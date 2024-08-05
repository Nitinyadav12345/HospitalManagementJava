package com.app.HospitalManagement.services;

import com.app.HospitalManagement.dto.RegisterDto;
import com.app.HospitalManagement.entites.UserEntity;

public interface UserService {
    public String registerUser(RegisterDto user);

}
