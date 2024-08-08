package com.app.HospitalManagement.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.HospitalManagement.entites.MedicineEntity;



public interface MedicineRepository  extends JpaRepository<MedicineEntity,Long>
{

}
