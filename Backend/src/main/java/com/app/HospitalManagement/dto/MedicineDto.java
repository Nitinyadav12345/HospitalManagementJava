package com.app.HospitalManagement.dto;

import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@AllArgsConstructor
@NoArgsConstructor
public class MedicineDto {
	private Long id;
    
    private String name;
    
    private double price;
    
    private int quantity;
    
    private Byte [] photo;
    
    private LocalDate expiarydate;
    private String details;

}
