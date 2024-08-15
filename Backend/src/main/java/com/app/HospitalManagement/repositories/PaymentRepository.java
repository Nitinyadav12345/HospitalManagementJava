package com.app.HospitalManagement.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.HospitalManagement.entites.Category;
import com.app.HospitalManagement.entites.Fees;
import com.app.HospitalManagement.entites.PaymentEntity;
import org.springframework.data.jpa.repository.Query;


public interface PaymentRepository extends JpaRepository<PaymentEntity,Long> {
	@Query("select p from PaymentEntity p where p.patient.id=:patientId")
	List<PaymentEntity> findByPatientId(Long patientId);
	 List<PaymentEntity> findByStatus(Fees status);
	 List<PaymentEntity> findByCategory(Category category);

}
