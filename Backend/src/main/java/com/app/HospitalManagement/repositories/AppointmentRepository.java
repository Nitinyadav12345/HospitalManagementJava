package com.app.HospitalManagement.repositories;

import com.app.HospitalManagement.entites.AppointmentEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AppointmentRepository extends JpaRepository<AppointmentEntity, Long> {
    List<AppointmentEntity> findByDoctor_Id(Long doctorId);
    List<AppointmentEntity> findByPatient_Id(Long patientId);
}
