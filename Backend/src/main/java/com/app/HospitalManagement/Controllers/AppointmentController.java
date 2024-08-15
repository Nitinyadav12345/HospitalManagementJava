package com.app.HospitalManagement.Controllers;

import com.app.HospitalManagement.dto.AppointmentDtoInsert;
import com.app.HospitalManagement.dto.AppointmentStatusDto;
import com.app.HospitalManagement.entites.AppointmentEntity;
import com.app.HospitalManagement.response.ApiResponseFailure;
import com.app.HospitalManagement.response.ApiResponseSuccess;
import com.app.HospitalManagement.services.AppointmentService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/appointment")
@Slf4j
@CrossOrigin
@Validated
public class AppointmentController {
    @Autowired
    private AppointmentService appointmentService;


    @PostMapping("/updatestatus")
    public ResponseEntity<?> updateStatus(@RequestBody AppointmentStatusDto appointmentStatusDto){
        log.info("inside the function updateStatus {}" , appointmentStatusDto);
        ApiResponseSuccess<String> response = new ApiResponseSuccess<>();
        try{
            String result = appointmentService.updateAppointmentStatus(appointmentStatusDto.getId(),appointmentStatusDto.getStatus());
            if(result.equals("Appointment not found.")){
                ApiResponseFailure<String> res = new ApiResponseFailure<>();
                res.setData(result);
                return ResponseEntity.badRequest().body(res);
            }
            response.setData(result);
        }catch (Exception ex){
            ApiResponseFailure<String> res = new ApiResponseFailure<>();
            res.setData(ex.getLocalizedMessage());
            return ResponseEntity.badRequest().body(res);
        }
        return ResponseEntity.ok(response);
    }

    @PostMapping("/bookapp")
    public ResponseEntity<?> bookAppointment(@RequestBody AppointmentDtoInsert appoint){
        log.info("inside the function updateStatus {}" , appoint);
        ApiResponseSuccess<String> response = new ApiResponseSuccess<>();
        String msg = appointmentService.insertAppointment(appoint);
        response.setData(msg);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/patient/{id}")
    public ResponseEntity<?> getPatientAppointment(@PathVariable Long id){
        ApiResponseSuccess<List<AppointmentEntity>> responseSuccess = new ApiResponseSuccess<>();
        List<AppointmentEntity> list = appointmentService.getAppointmentByPatientId(id);
        responseSuccess.setData(list);
        return ResponseEntity.ok(responseSuccess);
    }

    @GetMapping("/doctor/{id}")
    public ResponseEntity<?> getPatientAppointmentByDoctor(@PathVariable Long id){
        ApiResponseSuccess<List<AppointmentEntity>> responseSuccess = new ApiResponseSuccess<>();
        List<AppointmentEntity> list = appointmentService.getAppointmentByDoctorId(id);
        responseSuccess.setData(list);
        return ResponseEntity.ok(responseSuccess);
    }

}
