package com.carros.backend.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "Vehiculos")

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder

public class Vehiculo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String marca;

    private String modelo;

    private Integer anio;

}
