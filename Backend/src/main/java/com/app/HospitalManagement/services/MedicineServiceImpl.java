package com.app.HospitalManagement.services;

import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.stream.Collectors;

import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.HospitalManagement.dto.MedicineDto;
import com.app.HospitalManagement.entites.MedicineEntity;
import com.app.HospitalManagement.repositories.MedicineRepository;

import com.app.HospitalManagement.exception.ResourceNotFoundException;

import javax.transaction.Transactional;

@Transactional
@Service
@Slf4j
public class MedicineServiceImpl implements MedicineService {

	@Autowired
	private ModelMapper modelMapper;
	@Autowired
	private FileStorageService fileStorageService;

	@Autowired
	private MedicineRepository medicineRepository;

	public MedicineEntity saveMedicine(MedicineDto medicineDTO)  {
		String photoPath = null;
		try{
			photoPath = fileStorageService.saveFile(medicineDTO.getPhoto());
			System.out.println(photoPath);
		}catch (Exception exception){
			exception.printStackTrace();
		}
		MedicineEntity medicine = modelMapper.map(medicineDTO,MedicineEntity.class);
		MedicineEntity m =  medicineRepository.save(medicine);
		log.info("{}" , m);
		return medicineRepository.save(medicine);
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
	public List<MedicineEntity> getAllMedicines() {
		List<MedicineEntity> medicines=this.medicineRepository.findAll();
		return medicines;
	}

}
