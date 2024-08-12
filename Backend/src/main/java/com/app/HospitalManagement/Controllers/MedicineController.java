package com.app.HospitalManagement.Controllers;

import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import com.app.HospitalManagement.entites.MedicineEntity;
import com.app.HospitalManagement.response.ApiResponseSuccess;
import com.app.HospitalManagement.services.FileStorageService;
import org.apache.commons.io.FileUtils;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.MediaType;
import com.app.HospitalManagement.dto.MedicineDto;
import com.app.HospitalManagement.services.MedicineService;
import org.springframework.core.io.Resource;
import org.yaml.snakeyaml.util.EnumUtils;


@RestController
@RequestMapping("/chemist/medicine")
@CrossOrigin
public class MedicineController {
	
	@Autowired
	private MedicineService medicineService;
	@Autowired
	private FileStorageService fileStorageService;
	@Autowired
	private ModelMapper modelMapper;
	//post add medicine
		@PostMapping("/insert")
		public ResponseEntity<?> insertMedicine(@ModelAttribute MedicineDto medicineDTO)  {
			MedicineEntity savedMedicine = medicineService.saveMedicine(medicineDTO);
			ApiResponseSuccess<MedicineEntity> responseSuccess = new ApiResponseSuccess<>();
			responseSuccess.setData(savedMedicine);
			return ResponseEntity.ok(responseSuccess);
		}
		//edit quantity	
		@PutMapping("/{id}")
		public ResponseEntity<MedicineDto> updateQuantity(@Valid @RequestBody MedicineDto medicineDto, @PathVariable("id") Long id)
		{
			MedicineDto updatedQuantity=this.medicineService.updateQuantity(medicineDto, id);
			return ResponseEntity.ok(updatedQuantity);
		}
		
		//delete  medicine
		@DeleteMapping("/{id}")
		public ResponseEntity<?> deleteMedicine(@PathVariable("id") Long id)
		{
			this.medicineService.deleteMedicine(id);
			return new ResponseEntity(Map.of("Message","Medicine removed successfully"),HttpStatus.OK);
		}
		
		//get all medicine
		@GetMapping()
		public ResponseEntity<?> getAllMedicines()
		{
			List<MedicineEntity> list  = medicineService.getAllMedicines();
			ApiResponseSuccess<List<MedicineEntity>> responseSuccess = new ApiResponseSuccess<>();
			responseSuccess.setData(list);
			return ResponseEntity.ok(responseSuccess);
		}
		
		//get medicine by id
		@GetMapping("/{id}")
		public ResponseEntity<MedicineDto> getMedicine(@PathVariable("id") Long id)
		{
			return ResponseEntity.ok(this.medicineService.getMedicine(id));
		}

	@GetMapping("/{id}/photo")
	public ResponseEntity<Resource> getMedicinePhoto(@PathVariable Long id) {
		MedicineDto medicine = medicineService.getMedicine(id);
		MedicineEntity med = modelMapper.map(medicine,MedicineEntity.class);
		Resource file = null;
		try{
			file = fileStorageService.loadFile(med.getPhoto());
		}catch (Exception ex){
			ex.printStackTrace();
		}
		return ResponseEntity.ok()
				.contentType(MediaType.IMAGE_JPEG)
				.body(file);
	}
}
