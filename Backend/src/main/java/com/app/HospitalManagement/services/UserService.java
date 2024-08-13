package com.app.HospitalManagement.services;

import com.app.HospitalManagement.dto.RegisterDto;
import com.app.HospitalManagement.entites.UserEntity;

public interface UserService {
    public UserEntity registerUser(RegisterDto user);
    public String updateImageUser(RegisterDto user);
    public byte[] getUserImage();
}
