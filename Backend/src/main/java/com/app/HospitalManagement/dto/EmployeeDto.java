package com.app.HospitalManagement.dto;


import com.app.HospitalManagement.entites.UserEntity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class EmployeeDto {
    private LocalDate doj;
    private LocalDate dob;
    private double salary;
    private String charges;
    private String department;
    private Long userid;
}
