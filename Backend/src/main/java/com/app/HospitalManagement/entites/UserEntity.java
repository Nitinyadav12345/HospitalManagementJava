package com.app.HospitalManagement.entites;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "user")
@Inheritance(strategy = InheritanceType.JOINED)
public class UserEntity extends BaseEntity{
    @Column(nullable = false)
    @NotBlank(message = "User name cannot be null")
    private String name;
    @Column(unique = true,nullable = false)
    @NotBlank(message = "User Email  cannot be null and should be unique")
    private String email;
    @Column(nullable = false)
    @Size(min=6,message = "password should be greater then 6")
    private String password;
    @Column(nullable = false)
    @Size(min = 10,max = 12 , message = "Enter correct phone number")
    private String phoneNumber;
    @Column(nullable = false)
    @Enumerated(value = EnumType.STRING)
    private Role role;
}
