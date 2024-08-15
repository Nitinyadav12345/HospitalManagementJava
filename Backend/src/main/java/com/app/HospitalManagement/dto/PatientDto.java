package com.app.HospitalManagement.dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.UniqueElements;

import java.time.LocalDate;
@Data
@AllArgsConstructor
@NoArgsConstructor
public class PatientDto {
    private Long id;
    private String bloodgroup;
    private LocalDate dob;
    @UniqueElements
    private int bedno;
    private String prescription;
    private String disease;
    private Long userId;
    private LocalDate doa;
    private LocalDate dod;
    private boolean isadmit;
}
