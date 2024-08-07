package com.app.HospitalManagement.Controllers;

import com.app.HospitalManagement.dto.DoctorDto;
import com.app.HospitalManagement.services.DoctorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/doctor")
@CrossOrigin
@Slf4j
public class DoctorController {
    @Autowired
    private DoctorService doctorService;

    @PostMapping("/register")
    public ResponseEntity<?> registerDocotor(@RequestBody DoctorDto doctorDto){
        log.info("in the registerDocotor method {}" , doctorDto);

    }

}
