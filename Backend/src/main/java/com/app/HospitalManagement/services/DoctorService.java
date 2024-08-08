package com.app.HospitalManagement.services;

import com.app.HospitalManagement.dto.DoctorDto;
import com.app.HospitalManagement.entites.DoctorEntity;

import java.util.List;

public interface DoctorService {
   String registerDoctor(DoctorDto doctorDto);
   List<DoctorEntity> getDoctors();
}
    


