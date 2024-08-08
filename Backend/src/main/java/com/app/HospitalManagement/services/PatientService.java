package com.app.HospitalManagement.services;

import com.app.HospitalManagement.dto.PatientDto;
import com.app.HospitalManagement.entites.PatientEntity;
import com.app.HospitalManagement.repositories.PatientRepository;
import com.app.HospitalManagement.repositories.UserRepositiory;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

public interface PatientService {
    //create a patient
    String registerPatient(PatientDto patientDto);
    //get allpatient
    List<PatientEntity> getAllPatient();
    //patient by patientId
    PatientEntity getPatientbyId(Long id);
    String updatePatient();
    String appointDoctor(Long id , Long did);

}
