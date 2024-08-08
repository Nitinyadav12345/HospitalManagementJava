package com.app.HospitalManagement.services;

import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.HospitalManagement.dto.PaymentDto;
import com.app.HospitalManagement.entites.Category;
import com.app.HospitalManagement.entites.Fees;
import com.app.HospitalManagement.entites.PaymentEntity;
import com.app.HospitalManagement.exception.NoRecordFoundException;
import com.app.HospitalManagement.repositories.PaymentRepository;

@Service
	public class PaymentServiceImpl implements PaymentService {
	private static final Logger log = LoggerFactory.getLogger(PaymentServiceImpl.class);
	    @Autowired
	    private PaymentRepository paymentRepository;

		@Override
		public PaymentEntity savePayment(PaymentEntity payment) {
			   return paymentRepository.save(payment);
		}

		@Override
		public Optional<PaymentEntity> findPaymentById(Long id) {
			 return paymentRepository.findById(id);
		
		}

		
		@Override
		public List<PaymentEntity> findAllPayments() {
	        return paymentRepository.findAll();
		}
		@Override
	    public List<PaymentEntity> findPaymentsByPatientId(Long patientId) throws NoRecordFoundException {
			        log.info("Fetching payments for patient ID: {}", patientId);

			        List<PaymentEntity> payments = paymentRepository.findByPatientId(patientId);

			        if (payments.isEmpty()) {
			            log.error("No payments found for patient ID: {}", patientId);
			            throw new NoRecordFoundException("No payments found for the given patient ID");
			        }

			        log.info("Found {} payments for patient ID: {}", payments.size(), patientId);
			        return payments;
			    }
		

		@Override
		public List<PaymentEntity> findPaymentsByStatus(Fees status) {
			return paymentRepository.findByStatus(status);
		}

		@Override
		public List<PaymentEntity> findPaymentsByCategory(Category category) {
			 return paymentRepository.findByCategory(category);
		}

		@Override
		public void deletePayment(Long id) {
			paymentRepository.deleteById(id);
			
		}

		
	    

		
}
