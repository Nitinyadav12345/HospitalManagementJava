package com.app.HospitalManagement.services;

import com.app.HospitalManagement.dto.DoctorDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
public class DoctorServiceImpl implements DoctorService {
    @Autowired
    DoctorService doctorService;

    @Override
    public String registerDoctor(DoctorDto doctorDto) {

        return "Doctor Registered Successfully";
    }
}
