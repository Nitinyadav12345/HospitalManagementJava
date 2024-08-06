package com.app.HospitalManagement.entites;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "Doctors")
public class DoctorEntity {
    @Id
    @Column(name = "DID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String charges;
    private String department;
    @OneToOne
    @JoinColumn(name = "empID")
    private EmployeeEntity employee;
}
