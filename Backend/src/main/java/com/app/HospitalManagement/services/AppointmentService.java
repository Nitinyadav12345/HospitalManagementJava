package com.app.HospitalManagement.services;

import com.app.HospitalManagement.entites.AppointmentEntity;

import java.io.ObjectInputFilter.Status;
import java.util.List;

public interface AppointmentService {

   List<AppointmentEntity> getAppointmentByDoctorId(Long doctorId);

   List<AppointmentEntity> getAppointmentByPatientId(Long patientId);

   String updateAppointment(Long appointmentId, Status newStatus);

}
