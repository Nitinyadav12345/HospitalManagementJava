package com.app.HospitalManagement.services;

import com.app.HospitalManagement.dto.EmployeeDto;
import com.app.HospitalManagement.dto.EmployeeUpdate;
import com.app.HospitalManagement.entites.EmployeeEntity;
import com.app.HospitalManagement.entites.PatientEntity;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface EmployeeService {
    String registerEmployee(EmployeeDto employeeDto) ;
    String updateEmployee(EmployeeUpdate employeeDto);
    List<EmployeeEntity> getAllEmployees();
    String deleteEmployee(Long id);
    EmployeeEntity getEmployee(String email);
}
