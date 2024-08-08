package com.app.HospitalManagement.dto;

import com.app.HospitalManagement.entites.Status;

import java.time.LocalDate;

public class AppointmentDtoInsert {
    private Status status;
    private LocalDate appdate;
    private Long doctorId;
    private Long patientId;
}
