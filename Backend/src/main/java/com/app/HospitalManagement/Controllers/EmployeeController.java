package com.app.HospitalManagement.Controllers;

import com.app.HospitalManagement.dto.EmployeeDto;
import com.app.HospitalManagement.dto.EmployeeUpdate;
import com.app.HospitalManagement.entites.EmployeeEntity;
import com.app.HospitalManagement.repositories.EmployeeRepositiory;
import com.app.HospitalManagement.response.ApiResponseFailure;
import com.app.HospitalManagement.response.ApiResponseSuccess;
import com.app.HospitalManagement.services.EmployeeService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/employee")
@CrossOrigin
@Slf4j
@Validated
public class EmployeeController {
    @Autowired
    private EmployeeService employeeService;
    @Autowired
    private EmployeeRepositiory employeeRepositiory;


    @PostMapping("/register")
    public ResponseEntity<?> registerEmployee(@RequestBody EmployeeDto employeeDto)  {
        log.info("inside the function register Employee {}" , employeeDto);
        ApiResponseSuccess<String> response = new ApiResponseSuccess<>();
        try {
            String result= employeeService.registerEmployee(employeeDto);
            if(result.equals("Employee already Exist")){
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
        return  ResponseEntity.ok(response);
    }

    @PostMapping("/update")
    public ResponseEntity<?> updateEmployee(@RequestBody EmployeeUpdate employeeDto){
        log.info("inside the function updateEmployee {}",employeeDto);
        ApiResponseSuccess<String> response = new ApiResponseSuccess<>();
        response.setData(employeeService.updateEmployee(employeeDto));
        return ResponseEntity.ok(response);
    }

    @GetMapping("/employees")
    public ResponseEntity<?> allEmployee(){
        log.info("inside the function allEmployee ");
        ApiResponseSuccess<List<EmployeeEntity>> response = new ApiResponseSuccess<>();
        try {
            List<EmployeeEntity> employeeList = employeeService.getAllEmployees();
            response.setData(employeeService.getAllEmployees());
        }catch (Exception ex){
            ex.printStackTrace();
        }
        return ResponseEntity.ok(response);
    }

    @GetMapping("/delete/{id}")
    public ResponseEntity<?> deleteEmployee(@PathVariable("id") Long id ){
        log.info("inside the function deleteEmployee {}" , id);
        ApiResponseSuccess<String> response = new ApiResponseSuccess<>();
        try {
            String result = employeeService.deleteEmployee(id);
            response.setData(result);
        }catch (Exception ex){
            ex.printStackTrace();
        }
        return ResponseEntity.ok(response);
    }
    @GetMapping("/{id}")
    public  ResponseEntity<?> getEmpById(@PathVariable Long id ){
        ApiResponseSuccess<EmployeeEntity> responseSuccess = new ApiResponseSuccess<>();
        EmployeeEntity emp = employeeRepositiory.findById(id).orElseThrow();
        responseSuccess.setData(emp);
        return ResponseEntity.ok(responseSuccess);
    }
}
