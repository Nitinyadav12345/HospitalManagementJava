package com.app.HospitalManagement.services;

import java.util.List;
import java.util.Optional;

import com.app.HospitalManagement.dto.PaymentDto;
import com.app.HospitalManagement.entites.Category;
import com.app.HospitalManagement.entites.Fees;
import com.app.HospitalManagement.entites.PaymentEntity;

public interface PaymentService {
	 PaymentEntity savePayment(PaymentEntity payment);

	    
	    Optional<PaymentEntity> findPaymentById(Long id);

	   
	    List<PaymentEntity> findAllPayments();

	  
	    List<PaymentEntity> findPaymentsByPatientId(Long patientId);

	  
	    List<PaymentEntity> findPaymentsByStatus(Fees status);

	    
	    List<PaymentEntity> findPaymentsByCategory(Category category);

	  
	    void deletePayment(Long id);


		

}
