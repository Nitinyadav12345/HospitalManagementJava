package com.app.HospitalManagement.dto;
import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@AllArgsConstructor
@NoArgsConstructor
public class AppointmentDto {
private Status status;
private LocalDate appdate;
    

}
