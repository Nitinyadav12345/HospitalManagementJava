package com.app.HospitalManagement.Controllers;

import com.app.HospitalManagement.dto.DoctorDto;
import com.app.HospitalManagement.entites.DoctorEntity;
import com.app.HospitalManagement.response.ApiResponseFailure;
import com.app.HospitalManagement.response.ApiResponseSuccess;
import com.app.HospitalManagement.services.DoctorService;
import com.app.HospitalManagement.services.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import lombok.extern.slf4j.Slf4j;

import java.util.List;

@RestController
@RequestMapping("/doctor")
@CrossOrigin
@Slf4j
@Validated
public class DoctorController {
    @Autowired
    private DoctorService doctorService;

    @Autowired
    private EmployeeService employeeService;


    @PostMapping("/register")
    public ResponseEntity<?> registerDocotor(@RequestBody DoctorDto doctorDto){
        log.info("in the registerDocotor method {}" , doctorDto);
        ApiResponseSuccess<String> response = new ApiResponseSuccess<>();
        try{
            String result = doctorService.registerDoctor(doctorDto);
            response.setData(result);
        }catch (Exception ex){
            ApiResponseFailure<String> res = new ApiResponseFailure<>();
            res.setData(ex.getLocalizedMessage());
            return ResponseEntity.badRequest().body(res);
        }
        return ResponseEntity.ok(response);
    }
    @GetMapping("/doctors")
    public ResponseEntity<?> getALlDoctor(){
        log.info("inside the getAllDoctor {} ");
        ApiResponseSuccess<List<DoctorEntity>> response = new ApiResponseSuccess<>();
        List<DoctorEntity> doctors = doctorService.getDoctors();
        response.setData(doctors);
        return ResponseEntity.ok(doctors);
    }
}
