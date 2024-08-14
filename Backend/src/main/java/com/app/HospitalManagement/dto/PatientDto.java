package com.app.HospitalManagement.dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
@Data
@AllArgsConstructor
@NoArgsConstructor
public class PatientDto {
    private String bloodgroup;
    private LocalDate dob;
    private int bedno;
    private String prescription;
    private String disease;
    private Long userId;
    private LocalDate doa;
    private LocalDate dod;
    private boolean isadmit;
}
