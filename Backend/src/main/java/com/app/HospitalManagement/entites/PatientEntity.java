package com.app.HospitalManagement.entites;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "Patients")
public class PatientEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotNull
    @Column(name = "BloodGroup")
    private String bloodgroup;
    @NotNull
    private LocalDate dob;
    private String prescription;
    private String disease;
    @OneToOne
    @JoinColumn(name = "userID")
    private UserEntity user;
    private int bedno;
    @Column(nullable = false)
    private LocalDate doa;
    private LocalDate dod;
    private boolean isadmit;
    @OneToOne
    @JoinColumn(name="doctorID")
    private DoctorEntity doctor;
}
