package com.app.HospitalManagement.services;

import com.app.HospitalManagement.dto.RegisterDto;
import com.app.HospitalManagement.entites.UserEntity;
import com.app.HospitalManagement.exception.UniqueConstraintViolationException;
import com.app.HospitalManagement.repositories.UserRepositiory;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.io.FileUtils;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.persistence.UniqueConstraint;
import javax.transaction.Transactional;

@Service
@Transactional
@Slf4j
public class UserServiceImpl implements UserService{
    @Autowired
    private PasswordEncoder encoder;
    @Autowired
    private ModelMapper mapper;
    @Autowired
    private UserRepositiory userRepositiory;

    @Override
    public UserEntity registerUser(RegisterDto user) {
        log.info("inside user register user {}",user);
        user.setPassword(encoder.encode(user.getPassword()));
        UserEntity user1 = mapper.map(user,UserEntity.class);
        if(userRepositiory.existsByEmail(user.getEmail())){
            throw new UniqueConstraintViolationException("EMAIL_EXISTS");
        }
        return userRepositiory.save(user1);
    }

    @Override
    public String updateImageUser(RegisterDto user) {
        String email = SecurityContextHolder.getContext().getAuthentication().getPrincipal().toString();
        System.out.println(email);
        UserEntity user1 = userRepositiory.findByEmail(email).orElseThrow();
        try {
            user1.setUserImage(user.getImage().getBytes());
        }
        catch (Exception err){
            err.printStackTrace();
        }
        return "User Image Inserted Successfully";
     }

    @Override
    public byte[] getUserImage() {
        String email = SecurityContextHolder.getContext().getAuthentication().getPrincipal().toString();
        UserEntity user1 = userRepositiory.findByEmail(email).orElseThrow();
        return user1.getUserImage();
    }

}
