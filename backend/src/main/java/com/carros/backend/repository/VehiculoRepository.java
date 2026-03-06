package com.carros.backend.repository;

import com.carros.backend.model.Vehiculo;

import java.util.List;

public interface VehiculoRepository {
    Vehiculo save();

    List<Vehiculo> findAll();
}
