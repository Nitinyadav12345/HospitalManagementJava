package com.app.HospitalManagement.services;

import com.app.HospitalManagement.dto.AppointmentDtoInsert;
import com.app.HospitalManagement.entites.AppointmentEntity;
import com.app.HospitalManagement.entites.Status;

import java.util.List;

public interface AppointmentService {

   String insertAppointment(AppointmentDtoInsert appointment);
   List<AppointmentEntity> getAppointmentByDoctorId(Long doctorId);
   List<AppointmentEntity> getAppointmentByPatientId(Long patientId);
   String updateAppointmentStatus(Long appointmentId, Status newStatus);
   List<AppointmentEntity> getAllApointment();

}
