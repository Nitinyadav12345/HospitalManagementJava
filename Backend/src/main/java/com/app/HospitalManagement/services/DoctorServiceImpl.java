package com.app.HospitalManagement.services;

import com.app.HospitalManagement.dto.DoctorDto;
import com.app.HospitalManagement.entites.DoctorEntity;
import com.app.HospitalManagement.entites.EmployeeEntity;
import com.app.HospitalManagement.entites.UserEntity;
import com.app.HospitalManagement.exception.NoRecordFoundException;
import com.app.HospitalManagement.repositories.DoctorRepositiory;
import com.app.HospitalManagement.repositories.EmployeeRepositiory;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Optional;

@Service
@Transactional
@Slf4j
public class DoctorServiceImpl implements DoctorService {

    @Autowired
    private DoctorRepositiory doctorRepositiory;
    @Autowired
    private ModelMapper modelMapper;
    @Autowired
    private EmployeeRepositiory employeeRepositiory;

    //this getting the error we can do this late Doctor entity later
    @Override
    public String registerDoctor(DoctorDto doctorDto) {
        log.info("inside the function registerDoctor {}", doctorDto);
        Long id = doctorDto.getEmpid();
        EmployeeEntity employee = employeeRepositiory.findById(id)
                .orElseThrow(() -> new NoRecordFoundException("Doctor does not exist"));
        DoctorEntity doctor = modelMapper.map(doctorDto, DoctorEntity.class);
        doctor.setEmployee(employee);
        doctorRepositiory.save(doctor);
        return "Doctor added successfully";
    }
}
