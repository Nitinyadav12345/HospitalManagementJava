package com.app.HospitalManagement.services;
import com.app.HospitalManagement.dto.AppointmentDtoInsert;
import com.app.HospitalManagement.entites.AppointmentEntity;
import com.app.HospitalManagement.entites.EmployeeEntity;
import com.app.HospitalManagement.entites.PatientEntity;
import com.app.HospitalManagement.entites.Status;
import com.app.HospitalManagement.repositories.AppointmentRepository;
import com.app.HospitalManagement.repositories.EmployeeRepositiory;
import com.app.HospitalManagement.repositories.PatientRepository;
import com.app.HospitalManagement.repositories.PaymentRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.ObjectInputFilter;
import java.util.List;
import java.util.Optional;

@Service
public class AppointmentServiceImpl implements AppointmentService {
   
    @Autowired
    private AppointmentRepository appointmentRepository;
    @Autowired
    private EmployeeRepositiory employeeRepositiory;
    @Autowired
    private PatientRepository patientRepository;

    @Autowired
    private ModelMapper model;


    @Override
    public String insertAppointment(AppointmentDtoInsert appointment) {
        AppointmentEntity appointment1 = model.map(appointment,AppointmentEntity.class);
        PatientEntity patient = patientRepository.findById(appointment.getPatientId()).orElseThrow();
        EmployeeEntity employee = employeeRepositiory.findById(appointment.getDoctorId()).orElseThrow();
        appointment1.setPatient(patient);
        appointment1.setDoctor(employee);
        appointmentRepository.save(appointment1);
        return "Booked Successfully";
    }

    @Override
    public List<AppointmentEntity> getAppointmentByDoctorId(Long doctorId) {
        return appointmentRepository.findByDoctor_Id(doctorId);
    }

    @Override
    public List<AppointmentEntity> getAppointmentByPatientId(Long patientId) {
        return appointmentRepository.findByPatient_Id(patientId);
    }

    @Override
    public String updateAppointmentStatus(Long appointmentId, Status newStatus) {
        Optional<AppointmentEntity> optionalAppointment = appointmentRepository.findById(appointmentId);

        if (optionalAppointment.isPresent()) {
            AppointmentEntity appointment = optionalAppointment.get();
            appointment.setStatus(newStatus);
            appointmentRepository.save(appointment);
            return "Appointment status updated successfully.";
        } else {
            return "Appointment not found.";
        }
    }

    @Override
    public List<AppointmentEntity> getAllApointment() {
        return List.of();
    }
}
