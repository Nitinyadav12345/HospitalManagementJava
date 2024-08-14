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

    //i have to work on this getting null pointer here
    public String updateImageUser(RegisterDto user , Long id) {
        UserEntity user1 = userRepositiory.findById(id).orElseThrow(() -> new RuntimeException("User not found"));
        if (user1 == null) {
            throw new RuntimeException("UserEntity is null");
        }
        if (user.getImage() == null) {
            throw new RuntimeException("Image is null");
        }
        try {
            user1.setUserImage(user.getImage().getBytes());
            userRepositiory.save(user1); // Don't forget to save the updated entity
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
        log.info("getImage");
        return user1.getUserImage();
    }

    @Override
    public byte[] getUserImageById(Long id) {
        UserEntity user = userRepositiory.findById(id).orElseThrow();
        return user.getUserImage();
    }

}
