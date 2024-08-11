package com.app.HospitalManagement.dto;

import com.app.HospitalManagement.entites.Role;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;


@Data
@NoArgsConstructor
public class RegisterDto {

    String name;
    String email;
    String password;
    String phoneNumber;
    Role role;
    MultipartFile image;
}
