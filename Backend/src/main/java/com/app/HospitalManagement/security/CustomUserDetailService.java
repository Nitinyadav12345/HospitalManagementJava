package com.app.HospitalManagement.security;

import com.app.HospitalManagement.entites.User;
import com.app.HospitalManagement.repositories.UserRepositiory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

@Service
@Component
public class CustomUserDetailService implements UserDetailsService {

    @Autowired
    private UserRepositiory userRepository;



    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user1 = userRepository.findByEmail(username).orElseThrow(()->new UsernameNotFoundException("Email doesn't exist"));
        return new CustomUserDetails(user1);
    }
}
