package com.app.HospitalManagement.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.HospitalManagement.entites.Category;
import com.app.HospitalManagement.entites.Fees;
import com.app.HospitalManagement.entites.PaymentEntity;



public interface PaymentRepository extends JpaRepository<PaymentEntity,Long> {
	 List<PaymentEntity> findByPatientId(Long patientId);
	 List<PaymentEntity> findByStatus(Fees status);
	 List<PaymentEntity> findByCategory(Category category);  
}
