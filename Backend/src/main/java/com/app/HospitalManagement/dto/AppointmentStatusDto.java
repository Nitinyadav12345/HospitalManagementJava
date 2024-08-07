package com.app.HospitalManagement.dto;

import com.app.HospitalManagement.entites.Status;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@AllArgsConstructor
@NoArgsConstructor
public class AppointmentStatusDto {
private Status status;
private Long id;
}
