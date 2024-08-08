package com.app.HospitalManagement.services;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.HospitalManagement.dto.MedicineDto;
import com.app.HospitalManagement.entites.MedicineEntity;
import com.app.HospitalManagement.repositories.MedicineRepository;

import com.app.HospitalManagement.exception.ResourceNotFoundException;

@Service
public class MedicineServiceImpl implements MedicineService {

	@Autowired
	private ModelMapper modelMapper;
	
	@Autowired
	private MedicineRepository medicineRepository;
	
	@Override
	public MedicineDto addMedicine(MedicineDto medicineDto) {
		MedicineEntity medicineEntity=this.modelMapper.map(medicineDto, MedicineEntity.class);
		MedicineEntity savedMedicineEntity=this.medicineRepository.save(medicineEntity);
		 
		return this.modelMapper.map(savedMedicineEntity, MedicineDto.class);
	}

	@Override
	public void deleteMedicine(Long id) {
		MedicineEntity medicineEntity=this.medicineRepository.findById(id)
				.orElseThrow(()->new ResourceNotFoundException("user"," Id",id));
		this.medicineRepository.delete(medicineEntity);
	}

	@Override
	public MedicineDto updateQuantity(MedicineDto medicineDto, Long id) {
		// TODO Auto-generated method stub
		MedicineEntity medicineEntity=this.medicineRepository.findById(id)
				.orElseThrow(()->new ResourceNotFoundException("user"," Id",id));
		MedicineEntity updatedMedicineEntity=this.medicineRepository.save(medicineEntity);
		MedicineDto updatedMedicineDto=this.modelMapper.map(updatedMedicineEntity,MedicineDto.class);
		return updatedMedicineDto;
	}

	@Override
	public MedicineDto getMedicine(Long id) {
		MedicineEntity medicineEntity=this.medicineRepository.findById(id)
				.orElseThrow(()->new ResourceNotFoundException("user"," Id",id));
		
		return this.modelMapper.map(medicineEntity,MedicineDto.class);
	}

	@Override
	public List<MedicineDto> getAllMedicines() {
		List<MedicineEntity> medicines=this.medicineRepository.findAll();
		 List<MedicineDto> medicineDto = medicines.stream()
			        .map(medicineEntity -> this.modelMapper.map(medicineEntity, MedicineDto.class))
			        .collect(Collectors.toList());
		
		// TODO Auto-generated method stub
		return medicineDto;
	}

}
