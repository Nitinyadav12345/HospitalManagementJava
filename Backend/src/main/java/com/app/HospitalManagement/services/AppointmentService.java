package com.app.HospitalManagement.services;

import com.app.HospitalManagement.entites.AppointmentEntity;
import com.app.HospitalManagement.entites.Status;

import java.util.List;

public interface AppointmentService {

   List<AppointmentEntity> getAppointmentByDoctorId(Long doctorId);
   List<AppointmentEntity> getAppointmentByPatientId(Long patientId);
   String updateAppointmentStatus(Long appointmentId, Status newStatus);
   List<AppointmentEntity> getAllApointment();

}
