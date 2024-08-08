package com.app.HospitalManagement.Controllers;

import com.app.HospitalManagement.dto.PatientDto;
import com.app.HospitalManagement.entites.PatientEntity;
import com.app.HospitalManagement.repositories.PatientRepository;
import com.app.HospitalManagement.response.ApiResponseSuccess;
import com.app.HospitalManagement.services.PatientService;
import com.app.HospitalManagement.services.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/patient")
@Slf4j
@Validated
@CrossOrigin
public class PatientController {
    @Autowired
    private PatientService patientService;


    @PostMapping("/register")
    public ResponseEntity<?> patientRegister(@RequestBody PatientDto patientDto){
        log.info("inside the patient Register function {}" , patientDto);
        ApiResponseSuccess<String> res = new ApiResponseSuccess<>();
        String result = patientService.registerPatient(patientDto);
        res.setData(result);
        return  ResponseEntity.ok(res);

    }
}
