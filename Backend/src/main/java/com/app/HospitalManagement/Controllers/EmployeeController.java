package com.app.HospitalManagement.Controllers;

import com.app.HospitalManagement.dto.EmployeeDto;
import com.app.HospitalManagement.response.ApiResponseSuccess;
import com.app.HospitalManagement.services.EmployeeService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/employee")
@CrossOrigin
@Slf4j
public class EmployeeController {
    @Autowired
    private EmployeeService employeeService;

    @PostMapping("/register")
    public ResponseEntity<?> registerEmployee(@RequestBody EmployeeDto employeeDto){
        log.info("inside the function register Employee {}" , employeeDto);
        ApiResponseSuccess<String> response = new ApiResponseSuccess<>();
        try{
            response.setData(employeeService.registerEmployee(employeeDto));
        }catch(Exception ex){
            ex.printStackTrace();
        }
        return  ResponseEntity.ok(response);
    }
}
