package com.carros.backend.controller;


import com.carros.backend.model.Vehiculo;
import com.carros.backend.service.VehiculoService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/vehiculos")

public class VehiculoController {

    private final VehiculoService vehiculoService;

    public VehiculoController(VehiculoService vehiculoService){
        this.vehiculoService = vehiculoService;
    }

    @PostMapping
    public Vehiculo crearVehiculo(@RequestBody Vehiculo vehiculo){
        return vehiculoService.guardaVehiculo(vehiculo);
    }

    @GetMapping
    public List<Vehiculo> obtenerVehiculos(){

        return vehiculoService.obtenerVehiculos();

    }


}
