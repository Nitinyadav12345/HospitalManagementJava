package com.app.HospitalManagement.Controllers;

import com.app.HospitalManagement.dto.PaymentDto;
import com.app.HospitalManagement.entites.PaymentEntity;
import com.app.HospitalManagement.exception.NoRecordFoundException;
import com.app.HospitalManagement.response.ApiResponseFailure;
import com.app.HospitalManagement.response.ApiResponseSuccess;
import com.app.HospitalManagement.services.ExcelFileReport;
import com.app.HospitalManagement.services.PaymentService;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
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

    @Autowired
    private ExcelFileReport excelFileReport;

    @Autowired
    private ModelMapper modelMapper;

    @PostMapping
    public ResponseEntity<?> createPayment(@RequestBody PaymentDto paymentDto) {
        log.info("Request to create payment: {}", paymentDto);
        ApiResponseSuccess<PaymentEntity> response = new ApiResponseSuccess<>();
        try {
            PaymentEntity payment = paymentService.savePayment(paymentDto);
            response.setData(payment);
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

    @GetMapping("/execelReport/{id}")
    public ResponseEntity<Resource> getBill(@PathVariable Long id){
        String filename = "bill.xlsx";
        InputStreamResource file = new InputStreamResource(excelFileReport.paymentBill(id));

        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=" + filename)
                .contentType(MediaType.parseMediaType("application/vnd.ms-excel"))
                .body(file);
    }

}
