package com.carros.backend.service;

import com.carros.backend.model.Vehiculo;
import com.carros.backend.repository.VehiculoRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VehiculoService {

    private final VehiculoRepository vehiculoRepository;

    public VehiculoRepository(VehiculoRepository vehiculoRepository){
        this.vehiculoRepository = vehiculoRepository;
    }

    public Vehiculo guardaVehiculo(Vehiculo vehiculo){

        return vehiculoRepository.save(vehiculo);

    }

    public List<Vehiculo> obtenerVehiculos(){
        return  vehiculoRepository.findAll();
    }

}
