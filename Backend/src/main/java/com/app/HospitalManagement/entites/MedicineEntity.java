package com.app.HospitalManagement.entites;

import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Data
@Table(name = "Medicines")
@AllArgsConstructor
@NoArgsConstructor
public class MedicineEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name ="medicineID")
    private Long id;
    @Column(nullable = false , unique = true)
    private String name;
    @Column(nullable = false)
    private double price;
    @Column(nullable = false)
    private int quantity;
    private String photo;
    @NotNull
    @Column(nullable = false)
    private LocalDate expiryDate;
    private String manufacturer;
}
