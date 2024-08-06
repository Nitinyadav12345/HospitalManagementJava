package com.app.HospitalManagement.security;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;

import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@EnableWebSecurity //to enable spring sec frmwork support
@Configuration//to tell SC , this is config class containing @Bean methods
@EnableMethodSecurity(prePostEnabled = true)

//to enable method level authorization support : pre n post authorization
public class SecurityConfig {

    //dep : custom jwt auth filter
    @Autowired
    private JwtAuthenticationFilter jwtFilter;
    //dep : custom auth entry point
    @Autowired
    private CustomAuthenticationEntryPoint authEntry;

    
    @Bean
    public SecurityFilterChain authorizeRequests(HttpSecurity http) throws Exception
    {
        http.cors()
                .and().
                //disable CSRF token generation n verification
                        csrf()	.disable()
                .exceptionHandling().authenticationEntryPoint(authEntry).
                and().
                authorizeRequests()
                .antMatchers("/products/view","/users/signup","/users/signin","/user/login","/user/register",
                        "/v*/api-doc*/**","/swagger-ui/**").permitAll()
                // only required for JS clnts (react / angular) : for the pre flight requests
                .antMatchers(HttpMethod.OPTIONS).permitAll()
                .antMatchers("/products/purchase/**").hasAuthority("CUSTOMER")
                .antMatchers("/employee/**").hasAuthority("ADMIN")
                .anyRequest().authenticated()
                .and()
                //to tell spring sec : not to use HttpSession to store user's auth details
                .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                //inserting jwt filter before sec filter
                .addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }

    //configure AuthMgr as a spring bean
    @Bean
    public AuthenticationManager authenticationManager
    (AuthenticationConfiguration config) throws Exception
    {
        return config.getAuthenticationManager();
    }
}
