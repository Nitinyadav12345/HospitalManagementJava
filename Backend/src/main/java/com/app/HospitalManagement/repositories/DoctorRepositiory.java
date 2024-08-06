package com.app.HospitalManagement.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.HospitalManagement.entites.DoctorEntity;

public interface DoctorRepositiory extends JpaRepository<DoctorEntity,Long> {

}
