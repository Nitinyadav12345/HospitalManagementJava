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

import java.util.List;

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

    @GetMapping("/patients")
    public ResponseEntity<?> getAllPatients(){
        log.info("inside the function get all patients");
        ApiResponseSuccess<List<PatientEntity>> response = new ApiResponseSuccess<>();
        List<PatientEntity> patientEntities = patientService.getAllPatient();
        response.setData(patientEntities);
        return ResponseEntity.ok(patientEntities);
    }

    @GetMapping("/update/{id}/{did}")
    public ResponseEntity<?> appointDoctor(@PathVariable(name = "id") Long id ,@PathVariable(name = "did") Long did){
        log.info("inside the function get all Doctors");
        ApiResponseSuccess<String> response = new ApiResponseSuccess<>();
        String msg = patientService.appointDoctor(id,did);
        response.setData(msg);
        return ResponseEntity.ok(response);
    }
}
