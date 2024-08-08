package com.app.HospitalManagement.Controllers;

import com.app.HospitalManagement.dto.PaymentDto;
import com.app.HospitalManagement.entites.PaymentEntity;
import com.app.HospitalManagement.exception.NoRecordFoundException;
import com.app.HospitalManagement.response.ApiResponseFailure;
import com.app.HospitalManagement.response.ApiResponseSuccess;
import com.app.HospitalManagement.services.PaymentService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/payments")
@Slf4j
@CrossOrigin
public class PaymentController {

    @Autowired
    private PaymentService paymentService;

    @PostMapping
    public ResponseEntity<?> createPayment(@RequestBody PaymentDto paymentDto) {
        log.info("Request to create payment: {}", paymentDto);
        ApiResponseSuccess<PaymentDto> response = new ApiResponseSuccess<>();
        try {
            // Convert PaymentDto to PaymentEntity
            PaymentEntity paymentEntity = new PaymentEntity();
            paymentEntity.setFees(paymentDto.getFees());
            paymentEntity.setStatus(paymentDto.getStatus());
            paymentEntity.setCategory(paymentDto.getCategory());
            // Set PatientEntity if needed
            // paymentEntity.setPatient(new PatientEntity(paymentDto.getPatientId()));

            // Save the payment
            PaymentEntity savedPayment = paymentService.savePayment(paymentEntity);

            // Convert saved PaymentEntity back to PaymentDto
            PaymentDto savedPaymentDto = new PaymentDto();
            savedPaymentDto.setId(savedPayment.getId());
            savedPaymentDto.setFees(savedPayment.getFees());
            savedPaymentDto.setStatus(savedPayment.getStatus());
            savedPaymentDto.setCategory(savedPayment.getCategory());
            // Set PatientId if needed
            // savedPaymentDto.setPatientId(savedPayment.getPatient().getId());

            response.setData(savedPaymentDto);
        } catch (Exception ex) {
            ApiResponseFailure<String> failureResponse = new ApiResponseFailure<>();
            failureResponse.setData("Error occurred while creating payment");
            log.error("Error occurred while creating payment", ex);
            return ResponseEntity.badRequest().body(failureResponse);
        }
        return ResponseEntity.ok(response);
    }

    @GetMapping
    public ResponseEntity<?> getAllPayments() {
        log.info("Request to get all payments");
        ApiResponseSuccess<List<PaymentEntity>> response = new ApiResponseSuccess<>();
        try {
            List<PaymentEntity> payments = paymentService.findAllPayments();
            response.setData(payments);
        } catch (Exception ex) {
            ApiResponseFailure<String> failureResponse = new ApiResponseFailure<>();
            failureResponse.setData("Error occurred while retrieving payments");
            log.error("Error occurred while retrieving payments", ex);
            return ResponseEntity.badRequest().body(failureResponse);
        }
        return ResponseEntity.ok(response);
    }

    @GetMapping("/patient/{patientId}")
    public ResponseEntity<?> getPaymentsByPatientId(@PathVariable Long patientId) {
        log.info("Request to get payments by patient ID: {}", patientId);
        ApiResponseSuccess<List<PaymentEntity>> response = new ApiResponseSuccess<>();
        try {
            List<PaymentEntity> payments = paymentService.findPaymentsByPatientId(patientId);
            response.setData(payments);
        } catch (NoRecordFoundException ex) {
            ApiResponseFailure<String> failureResponse = new ApiResponseFailure<>();
            failureResponse.setData(ex.getMessage());
            log.error("Error fetching payments for patient ID: {}", patientId, ex);
            return ResponseEntity.status(404).body(failureResponse);
        } catch (Exception ex) {
            ApiResponseFailure<String> failureResponse = new ApiResponseFailure<>();
            failureResponse.setData("Error occurred while retrieving payments for patient ID: " + patientId);
            log.error("Error occurred while retrieving payments", ex);
            return ResponseEntity.badRequest().body(failureResponse);
        }
        return ResponseEntity.ok(response);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deletePayment(@PathVariable Long id) {
        log.info("Request to delete payment by ID: {}", id);
        try {
            paymentService.deletePayment(id);
            return ResponseEntity.noContent().build();
        } catch (NoRecordFoundException ex) {
            ApiResponseFailure<String> failureResponse = new ApiResponseFailure<>();
            failureResponse.setData(ex.getMessage());
            log.error("Error occurred while deleting payment", ex);
            return ResponseEntity.status(404).body(failureResponse);
        } catch (Exception ex) {
            ApiResponseFailure<String> failureResponse = new ApiResponseFailure<>();
            failureResponse.setData("Error occurred while deleting payment with ID: " + id);
            log.error("Error occurred while deleting payment", ex);
            return ResponseEntity.badRequest().body(failureResponse);
        }
    }
}
