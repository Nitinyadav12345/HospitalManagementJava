package com.app.HospitalManagement.dto;

import com.app.HospitalManagement.entites.Role;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
public class RegisterDto {
    String name;
    String email;
    String password;
    String phoneNumber;
    Role role;
}
