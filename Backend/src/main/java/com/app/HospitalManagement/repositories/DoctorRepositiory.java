package com.app.HospitalManagement.repositories;

import com.app.HospitalManagement.entites.EmployeeEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import com.app.HospitalManagement.entites.DoctorEntity;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface DoctorRepositiory extends JpaRepository<DoctorEntity,Long> {
    @Query("SELECT d FROM DoctorEntity d WHERE d.employee.id = :empId")
    Optional<DoctorEntity> findByEmployeeId(@Param("empId") Long empId);

}
