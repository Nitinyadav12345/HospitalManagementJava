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
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

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

        //have to change the fucntions b/z i have to register in both user table and emp table have
        //to chanege the employee dto

        @Override
        public String registerEmployee(EmployeeDto employeeDto){
                log.info("inside the function registerEmployee {}" , employeeDto);
                Long id = employeeDto.getUserid();
                UserEntity user = userRepositiory.findById(id).orElseThrow(()->new NoRecordFoundException("User Does not exist"));
                Optional<EmployeeEntity> checkEmpExist = employeeRepositiory.findByUserId(id,EmployeeEntity.class);
                log.info("{}" ,checkEmpExist);
                System.out.println(checkEmpExist);
                if(!checkEmpExist.isEmpty()){
                        return "Employee already Exist";
                }
                EmployeeEntity employee = modelMapper.map(employeeDto , EmployeeEntity.class);
                employee.setUser(user);
                employeeRepositiory.save(employee);

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
                employeeRepositiory.save(employee1);
                return "User updated Successfully";
        }

        @Override
        public List<EmployeeEntity> getAllEmployees() {
                List<EmployeeEntity> emplist = employeeRepositiory.findAll();
                return emplist;
        }

        @Override
        public String deleteEmployee(Long id) {
                log.info("inside the function deleteEmployee {}" ,id);
                employeeRepositiory.deleteById(id);
                return "Employee deleted Successfully";
        }

        @Override
        public EmployeeEntity getEmployee(String email) {
                return employeeRepositiory.findByEmail(email).orElseThrow();
        }
}
