package com.app.HospitalManagement.services;

import com.app.HospitalManagement.dto.PatientDto;
import com.app.HospitalManagement.entites.*;
import com.app.HospitalManagement.exception.NoRecordFoundException;
import com.app.HospitalManagement.repositories.EmployeeRepositiory;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import com.app.HospitalManagement.repositories.PatientRepository;
import com.app.HospitalManagement.repositories.UserRepositiory;
import org.springframework.beans.factory.annotation.Autowired;

import javax.transaction.Transactional;
import java.time.LocalDate;
import java.util.List;
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
    @Autowired
    private EmployeeRepositiory employeeRepositiory;

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
        return "Patient added Successfully";
    }

    @Override
    public List<PatientEntity> getAllPatient() {
       log.info("inside the function getAllPatient");
       List<PatientEntity> patients = patientRepo.findAll();
       if(patients.isEmpty()){
           throw new NoRecordFoundException("No Patient Found");
       }
       return patients;
    }

    @Override
    public PatientEntity getPatientbyId(Long id) {
        return null;
    }

    @Override
    public String updatePatient(String email , PatientDto patientDto) {
        UserEntity user = userRepo.findByEmail(email).orElseThrow();
        PatientEntity patient = modelMapper.map(patientDto,PatientEntity.class);
        patient.setUser(user);
        patientRepo.save(patient);
        return "Patient Details updated Successfully";
    }

    @Override
    public String appointDoctor(Long id , Long did) {
        log.info("inside the function appoint Doctor");
        PatientEntity patient = patientRepo.findById(id)
                .orElseThrow(()-> new NoRecordFoundException("Patient not found exception"));
        EmployeeEntity doctor = employeeRepositiory.findById(did)
                .orElseThrow(()-> new NoRecordFoundException("Doctor not found exception"));
        patient.setDoctor(doctor);
        patientRepo.save(patient);
        return "Doctor Appointed";
    }

    @Override
    public List<PatientEntity> getAllAdmitedPatients() {
        return patientRepo.findByisAdmit();
    }

    @Override
    public String dischargePatient(Long id, LocalDate x ) {
        PatientEntity patient =  patientRepo.findById(id).orElseThrow();
        patient.setDod(x);
        patient.setBedno(0);
        patientRepo.save(patient);
        return "Patient Discharged";
    }

    @Override
    public String insertPrescription(PatientDto patientDto) {
        PatientEntity patient =  patientRepo.findById(patientDto.getId()).orElseThrow();
        patient.setPrescription(patientDto.getPrescription());
        patientRepo.save(patient);
        return "Prescription added SuccessFully";
    }
}
