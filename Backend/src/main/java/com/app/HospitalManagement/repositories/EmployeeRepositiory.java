package com.app.HospitalManagement.repositories;

import com.app.HospitalManagement.entites.EmployeeEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepositiory extends JpaRepository<EmployeeEntity,Long> {
}
