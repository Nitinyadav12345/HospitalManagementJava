package com.app.HospitalManagement.repositories;

import com.app.HospitalManagement.entites.EmployeeEntity;
import com.app.HospitalManagement.entites.PatientEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface PatientRepository extends JpaRepository<PatientEntity, Long> {
    @Query("select p from PatientEntity p where p.user.id =:id")
    Optional<PatientEntity> findByUserId(Long id , Class<PatientEntity> type);
    @Query("select p from PatientEntity p where p.isadmit = true")
    List<PatientEntity> findByisAdmit();
    @Query("select p from PatientEntity p where p.user.email =:email")
    Optional<PatientEntity> findByemail(String  email , Class<PatientEntity> type);
}
