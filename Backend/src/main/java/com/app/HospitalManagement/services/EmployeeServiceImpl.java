package com.app.HospitalManagement.services;

import com.app.HospitalManagement.dto.EmployeeDto;
import com.app.HospitalManagement.dto.EmployeeUpdate;
import com.app.HospitalManagement.entites.EmployeeEntity;
import com.app.HospitalManagement.entites.UserEntity;
import com.app.HospitalManagement.exception.CustomSQLException;
import com.app.HospitalManagement.exception.NoRecordFoundException;
import com.app.HospitalManagement.repositories.EmployeeRepositiory;
import com.app.HospitalManagement.repositories.UserRepositiory;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import javax.validation.ConstraintViolationException;

import java.sql.SQLException;

@Service
@Transactional
@Slf4j
public class EmployeeServiceImpl implements  EmployeeService{
        @Autowired
        private EmployeeRepositiory employeeRepositiory;
        @Autowired
        private UserRepositiory userRepositiory;

        @Autowired
        private ModelMapper modelMapper;

        @Override
        public String registerEmployee(EmployeeDto employeeDto) {
                log.info("inside the function registerEmployee {}" , employeeDto);
                Long id = employeeDto.getUserid();
                UserEntity user = userRepositiory.findById(id).orElseThrow(()->new NoRecordFoundException("User Does not exist"));
                EmployeeEntity employee = modelMapper.map(employeeDto , EmployeeEntity.class);
                employee.setUser(user);
                try{
                        employeeRepositiory.save(employee);
                }catch (Exception ex){
                       return "Some Sql error occurred";
                }
                return "Employee added Successfully";
        }

        @Override
        public String updateEmployee(EmployeeUpdate employeeDto) {

                log.info("inside the function updateEmployee {}" ,employeeDto);
                EmployeeEntity employee = employeeRepositiory.findById(employeeDto.getId()).orElseThrow(()->new NoRecordFoundException("User Does not exist"));
                UserEntity user = employee.getUser();
                System.out.println(user);
                EmployeeEntity employee1 =  modelMapper.map(employeeDto ,EmployeeEntity.class);
                employee1.setUser(user);
                try {
                        employeeRepositiory.save(employee1);
                }catch (Exception ex){
                        return ex.getLocalizedMessage();
                }
                return "User updated Successfully";
        }
}
