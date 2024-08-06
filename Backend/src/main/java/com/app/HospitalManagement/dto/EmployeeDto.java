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
    private Long id;
<<<<<<< HEAD
   
=======
>>>>>>> 776729e986812aa7948ea1eec8098b362f7cfaa2
    private LocalDate doj;
    private LocalDate dob;
    private double salary;
    private Long userid;
}
