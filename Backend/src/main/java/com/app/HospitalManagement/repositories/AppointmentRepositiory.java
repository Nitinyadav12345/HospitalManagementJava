package com.app.HospitalManagement.repositories;

import com.app.HospitalManagement.entites.AppointmentEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AppointmentRepositiory extends JpaRepository<AppointmentEntity,Long> {

}
