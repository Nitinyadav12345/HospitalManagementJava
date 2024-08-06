package com.app.HospitalManagement.entites;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "Payments")
public class PaymentEntity extends BaseEntity {
    @Column(nullable = false)
    private double fees;
    @Enumerated(EnumType.STRING)
    private Fees status;
    @ManyToOne
    @JoinColumn(name = "patientID")
    private  PatientEntity patient;
    @Enumerated(EnumType.STRING)
    private Category category;
}
