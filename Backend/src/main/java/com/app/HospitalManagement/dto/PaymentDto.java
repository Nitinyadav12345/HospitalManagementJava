package com.app.HospitalManagement.dto;


import com.app.HospitalManagement.entites.Category;
import com.app.HospitalManagement.entites.Fees;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PaymentDto {
    private Long id; 
    private double fees;
    private Fees status;
    private Long patientId;
    private Category category; 
}
