package com.app.HospitalManagement.security;

import io.jsonwebtoken.Claims;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

@Component
public class JwtAuthenticationFilter extends OncePerRequestFilter {
    //token verification
    //dep : JWT utils
    @Autowired
    private JwtUtils jwtUtils;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        //check auth header from the incoming request
        String authHeader = request.getHeader("Authorization");
        if(authHeader != null && authHeader.startsWith("Bearer ")){
            //=> req header contains JWT
            String jwt = authHeader.substring(7);
            //validate JWT
            Claims payloadClaims = jwtUtils.validateJwtToken(jwt);
            //get user name from the claims
            String email = jwtUtils.getUserNameFromJwtToken(payloadClaims);
            //get granted authorities as a custom claim
            List<GrantedAuthority> authorities  = jwtUtils.getAuthoritiesFromCLaims(payloadClaims);
            //add username/email n granted authorities in Authentication object
            UsernamePasswordAuthenticationToken token = new UsernamePasswordAuthenticationToken(email,null,authorities);
            //save this auth token under spring sec so that subsequent filters will not
            //retry the auth again
            SecurityContextHolder.getContext().setAuthentication(token);
            System.out.println("Saved auth token in sec ctx");
        }
        filterChain.doFilter(request,response);
    }
}
