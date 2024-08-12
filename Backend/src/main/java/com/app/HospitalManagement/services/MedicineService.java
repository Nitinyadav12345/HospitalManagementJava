package com.app.HospitalManagement.services;

import java.util.List;

import com.app.HospitalManagement.dto.MedicineDto;
import com.app.HospitalManagement.entites.MedicineEntity;


public interface MedicineService 
{
	public MedicineEntity saveMedicine(MedicineDto medicineDTO);
	//remove medicine
	void deleteMedicine(Long id);
	//change the quantity of the medicine
	MedicineDto updateQuantity(MedicineDto medicineDto, Long id);
	//get single medicine 
	MedicineDto getMedicine(Long id);
	//get all medicine
	List<MedicineEntity> getAllMedicines();
	
	
}
