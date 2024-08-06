package com.app.HospitalManagement.services;

import com.app.HospitalManagement.dto.EmployeeDto;
import com.app.HospitalManagement.entites.EmployeeEntity;
import com.app.HospitalManagement.repositories.EmployeeRepositiory;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
@Slf4j
public class EmployeeServiceImpl implements  EmployeeService{
        @Autowired
        private EmployeeRepositiory employeeRepositiory;

        @Autowired
        private ModelMapper modelMapper;

        @Override
        public String registerEmployee(EmployeeDto employeeDto) {
                log.info("inside the function registerEmployee {}" , employeeDto);
                Long id = employeeDto.getUserid();
                EmployeeEntity employee = modelMapper.map(employeeDto , EmployeeEntity.class);
                employeeRepositiory.save(employee);
                return "Employee added Successfully";
        }
}
