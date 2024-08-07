package com.app.HospitalManagement.entites;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "Appointments")
public class AppointmentEntity extends BaseEntity {
    @Enumerated(EnumType.STRING)
private Status status;
    private LocalDate appdate;
    @ManyToOne
    @JoinColumn(name = "doctorID")
    private DoctorEntity doctor;
    @ManyToOne
    @JoinColumn(name = "patientID")
    private PatientEntity patient;
}
