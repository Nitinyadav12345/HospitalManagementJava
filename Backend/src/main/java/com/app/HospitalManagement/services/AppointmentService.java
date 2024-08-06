package com.app.HospitalManagement.services;
import java.util.List;

import com.app.HospitalManagement.entites.AppointmentEntity;
public interface AppointmentService {
    
    List<AppointmentEntity> getAllAppointments();

}
