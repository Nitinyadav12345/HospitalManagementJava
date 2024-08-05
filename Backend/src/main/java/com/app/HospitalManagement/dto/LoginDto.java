package com.app.HospitalManagement.dto;

import com.app.HospitalManagement.entites.Role;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class LoginDto {
    String email;
    String password;
    Role role;
}
