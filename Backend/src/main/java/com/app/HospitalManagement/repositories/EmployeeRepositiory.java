package com.app.HospitalManagement.repositories;

import com.app.HospitalManagement.entites.EmployeeEntity;
import com.app.HospitalManagement.entites.UserEntity;
import org.apache.catalina.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface EmployeeRepositiory extends JpaRepository<EmployeeEntity,Long> {

    @Query("select e from EmployeeEntity e where e.user.id =:id")
     Optional<EmployeeEntity> findByUserId(Long id , Class<EmployeeEntity> type);
    @Query("select e from EmployeeEntity e where e.user.email =:email")
    Optional<EmployeeEntity> findByEmail(String email );
}
