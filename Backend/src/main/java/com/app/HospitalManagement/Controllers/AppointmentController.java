package com.app.HospitalManagement.Controllers;

import com.app.HospitalManagement.dto.AppointmentStatusDto;
import com.app.HospitalManagement.response.ApiResponseFailure;
import com.app.HospitalManagement.response.ApiResponseSuccess;
import com.app.HospitalManagement.services.AppointmentService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/appointment")
@Slf4j
@CrossOrigin
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
            res.setData("Some Error Occured");
            return ResponseEntity.badRequest().body(res);
        }
        return ResponseEntity.ok(response);
    }
}
