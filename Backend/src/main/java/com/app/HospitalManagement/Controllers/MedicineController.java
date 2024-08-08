package com.app.HospitalManagement.Controllers;

import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.HospitalManagement.dto.MedicineDto;
import com.app.HospitalManagement.services.MedicineService;





@RestController
@RequestMapping("/chemist/medicine")
public class MedicineController {
	
	@Autowired
	private MedicineService medicineService;
	
	//post add medicine
		@PostMapping("/")
		public ResponseEntity<MedicineDto> addMedicine(@Valid @RequestBody MedicineDto medicineDto)
		{
			 MedicineDto createMedicineDto=this.medicineService.addMedicine(medicineDto);
			 
			 return new ResponseEntity<>(createMedicineDto, HttpStatus.CREATED);
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
		@GetMapping("/")
		public ResponseEntity<List<MedicineDto>> getAllMedicines()
		{
			return ResponseEntity.ok(this.medicineService.getAllMedicines());
		}
		
		//get medicine by id
		@GetMapping("/{id}")
		public ResponseEntity<MedicineDto> getMedicine(@PathVariable("id") Long id)
		{
			return ResponseEntity.ok(this.medicineService.getMedicine(id));
		}
}
