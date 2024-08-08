package com.app.HospitalManagement.repositories;

import com.app.HospitalManagement.entites.EmployeeEntity;
import com.app.HospitalManagement.entites.PatientEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface PatientRepository extends JpaRepository<PatientEntity, Long> {
    @Query("select p from PatientEntity p where p.user.id =:id")
    Optional<PatientEntity> findByUserId(Long id , Class<PatientEntity> type);
}
