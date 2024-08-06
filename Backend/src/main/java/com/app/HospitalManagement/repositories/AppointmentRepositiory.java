package com.app.HospitalManagement.repositories;

import com.app.HospitalManagement.entites.AppointmentEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface AppointmentRepositiory extends JpaRepository<AppointmentEntity,Long> {
   
}
