package com.app.HospitalManagement.security;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.security.Key;
import java.util.Collection;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Component
@Slf4j
public class JwtUtils {
    @Value("${SECRET_KEY}")
    private String jwtSecret;
    @Value("${EXP_TIMEOUT}")
    private int jwtExpirationMs;

    private Key key;
    @PostConstruct
    public void init(){
        key = Keys.hmacShaKeyFor(jwtSecret.getBytes());
    }
    //will be invoked by authentication Controller , upon SuccessFul Authentication
    public String generateJwttoken(Authentication authentication){
        log.info("generate jwt Token " + authentication);
        CustomUserDetails userPrincipal = (CustomUserDetails) authentication.getPrincipal();
        //JWT : username ,issued at , expdate,digital Signature(does not typically passwords,can contains authorities
        return Jwts.builder()//JWTS a factory class used to create JWT tokens
                .setSubject(userPrincipal.getUsername())//setting subject part of the token(typically user,email
                .setIssuedAt(new Date())
                .setExpiration(new Date((new Date()).getTime()//sets the JWT Claims exp
                +jwtExpirationMs))//setting a custom claims
                .claim("authorities", getAuthoritiesInString(userPrincipal.getAuthorities()))
                .signWith(key, SignatureAlgorithm.HS512)
                //signs the constructed JWT using the specified
                //algorithm with the specified key , producing
                //JWS(json web signature=signed JWT)
        //Using token signing algo : HMAC using SHA_512
                .compact();
        //Actually builds the JWT and serializes it to compact . URL-safe string
    }

    //Accepts Collection<? extends GrantedAuthority> n rets comma Separated list of its
    //string form
    private String getAuthoritiesInString( Collection<? extends GrantedAuthority> authorities){
        String authorityString = authorities.stream().map(authority->authority.getAuthority())
                .collect(Collectors.joining(","));
        System.out.println(authorityString);
        return authorityString;
    }

    //this method will be invoked by our custom JWT filter
    public String getUserNameFromJwtToken(Claims claims){
        return claims.getSubject();
    }
    //this method will be invoked by our custom filter
    public Claims validateJwtToken(String jwtToken){
        //try{
        Claims claims = Jwts.parserBuilder()
                .setSigningKey(key).build()
        // Sets the signing key used to verify JWT digital signature.
                .parseClaimsJws(jwtToken).getBody();
        //parse the signed JWT reuturns the resulting Jws<Claims> instance
        //throws exc in case of failures in verification
        return claims;
   }
    public List<GrantedAuthority> getAuthoritiesFromCLaims(Claims claims){
        String authString = (String) claims.get("authorities");
        List<GrantedAuthority> authorities = AuthorityUtils.commaSeparatedStringToAuthorityList(authString);
        authorities.forEach(System.out::println);
        return authorities;
    }

    public Long getIdFromClaims(Claims claims){
        return (Long)claims.get("userID");
    }

}
