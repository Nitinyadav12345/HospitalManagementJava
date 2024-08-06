package com.app.HospitalManagement.services;

import com.app.HospitalManagement.dto.EmployeeDto;
import com.app.HospitalManagement.dto.EmployeeUpdate;

public interface EmployeeService {
    String registerEmployee(EmployeeDto employeeDto);
    String updateEmployee(EmployeeUpdate employeeDto);
}
