package com.app.HospitalManagement.services;

import com.app.HospitalManagement.dto.RegisterDto;
import com.app.HospitalManagement.entites.UserEntity;
import com.app.HospitalManagement.exception.UniqueConstraintViolationException;
import com.app.HospitalManagement.repositories.UserRepositiory;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
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
    public String registerUser(RegisterDto user) {
        log.info("inside user register user {}",user);

        user.setPassword(encoder.encode(user.getPassword()));
        UserEntity user1 = mapper.map(user,UserEntity.class);
        if(userRepositiory.existsByEmail(user.getEmail())){
            throw new UniqueConstraintViolationException("EMAIL_EXISTS");
        }
        userRepositiory.save(user1);
        return "User Added Successfully";
    }
}
