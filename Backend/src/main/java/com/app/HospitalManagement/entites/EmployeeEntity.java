package com.app.HospitalManagement.entites;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "Employees" )
public class EmployeeEntity {
    @Id
    @Column(name="empID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false )
    private LocalDate doj;
    @Column(nullable = false)
    private LocalDate dob;
    private double salary;
    @OneToOne(cascade = CascadeType.ALL , orphanRemoval = true)
    @JoinColumn(name = "userID",unique = true,nullable = false)
    private UserEntity user;
}
