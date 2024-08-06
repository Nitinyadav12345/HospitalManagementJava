package com.app.HospitalManagement.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
@Data
@AllArgsConstructor
@NoArgsConstructor
public class EmployeeUpdate {
    private Long id;
    private LocalDate doj;
    private LocalDate dob;
    private double salary;
}
