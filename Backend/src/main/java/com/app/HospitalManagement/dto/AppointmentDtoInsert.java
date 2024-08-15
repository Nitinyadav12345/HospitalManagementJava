package com.app.HospitalManagement.dto;

import com.app.HospitalManagement.entites.Status;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
@Data
@AllArgsConstructor
@NoArgsConstructor
public class AppointmentDtoInsert {
    private Status status;
    private LocalDate appdate;
    private Long doctorId;
    private Long patientId;
}
