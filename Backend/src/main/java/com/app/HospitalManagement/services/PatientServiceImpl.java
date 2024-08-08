package com.app.HospitalManagement.services;

import com.app.HospitalManagement.dto.PatientDto;
import com.app.HospitalManagement.entites.EmployeeEntity;
import com.app.HospitalManagement.entites.PatientEntity;
import com.app.HospitalManagement.entites.Role;
import com.app.HospitalManagement.entites.UserEntity;
import com.app.HospitalManagement.exception.NoRecordFoundException;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import com.app.HospitalManagement.repositories.PatientRepository;
import com.app.HospitalManagement.repositories.UserRepositiory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Optional;

@Service
@Transactional
@Slf4j
public class PatientServiceImpl implements  PatientService{
    @Autowired
    private PatientRepository patientRepo;
    @Autowired
    private UserRepositiory userRepo;
    @Autowired
    private ModelMapper modelMapper;

    @Override
    public String registerPatient(PatientDto patientDto) {
        Long id = patientDto.getUserId();
        UserEntity user = userRepo.findById(id).orElseThrow(()->new NoRecordFoundException("User Does not exist"));
        if( user.getRole() !=  Role.PATIENT){
            return "User have diffrent role Can Not update";
        }
        Optional<PatientEntity> checkEmpExist = patientRepo.findByUserId(id, PatientEntity.class);
        log.info("{}" ,checkEmpExist);
        System.out.println(checkEmpExist);
        if(!checkEmpExist.isEmpty()){
            return "Patient already Exist";
        }
        PatientEntity employee = modelMapper.map(patientDto , PatientEntity.class);
        employee.setUser(user);
        patientRepo.save(employee);
        return "Employee added Successfully";
    }

    @Override
    public ResponseEntity<?> getAllPatient() {
        return null;
    }

    @Override
    public ResponseEntity<?> getPatientbyId(Long id) {
        return null;
    }

    @Override
    public ResponseEntity<?> updatePatient() {
        return null;
    }
}
