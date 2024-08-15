package com.app.HospitalManagement.services;

import com.app.HospitalManagement.entites.PaymentEntity;
import com.app.HospitalManagement.repositories.PaymentRepository;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.List;

@Service
@Transactional
public class ExcelFileReport {

    @Autowired
    private PaymentRepository paymentRepository;

    public ByteArrayInputStream paymentBill(Long id){
        try(Workbook workbook = new XSSFWorkbook();
            ByteArrayOutputStream out = new ByteArrayOutputStream();){
            List<PaymentEntity> payinfo = paymentRepository.findByPatientId(id);
            Sheet sheet = workbook.createSheet("Bill Excel");
            Row row = sheet.createRow(0);
            row.createCell(0 ).setCellValue("id");
            row.createCell(1 ).setCellValue("creation date");
            row.createCell( 2).setCellValue("updation date");
            row.createCell(3 ).setCellValue("category");
            row.createCell(4 ).setCellValue("fees");
            row.createCell(5 ).setCellValue("status");
            row.createCell(6 ).setCellValue("patientID");
            for(int i =0;i<payinfo.size() ;i++){
                Row rowtemp = sheet.createRow(i+1);
                rowtemp.createCell(0 ).setCellValue(payinfo.get(i).getId());
                rowtemp.createCell(1 ).setCellValue(payinfo.get(i).getCreatedAt());
                rowtemp.createCell( 2).setCellValue(payinfo.get(i).getUpdatedAt());
                rowtemp.createCell(3 ).setCellValue(payinfo.get(i).getCategory().name());
                rowtemp.createCell(4 ).setCellValue(payinfo.get(i).getFees());
                rowtemp.createCell(5 ).setCellValue(payinfo.get(i).getStatus().name());
                rowtemp.createCell(6 ).setCellValue(payinfo.get(i).getPatient().getId());
            }
            workbook.write(out);
            return new ByteArrayInputStream(out.toByteArray());
        }catch (IOException ex){
            ex.printStackTrace();
            throw new RuntimeException("fail to genrate report bill");
        }
    }

}
