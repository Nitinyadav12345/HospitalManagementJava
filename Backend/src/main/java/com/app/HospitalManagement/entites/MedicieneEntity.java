package com.app.HospitalManagement.entites;

import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Data
@Table(name = "Medicienes")
@AllArgsConstructor
@NoArgsConstructor
public class MedicieneEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name ="medicieneID")
    private Long id;
    @Column(nullable = false , unique = true)
    private String name;
    @Column(nullable = false)
    private double price;
    @Column(nullable = false)
    private int quantity;
    @Lob
    private Byte [] photo;
    @NotNull
    @Column(nullable = false)
    private LocalDate expiarydate;
    private String details;
}
