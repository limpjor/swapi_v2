
import axios from 'axios';
import FilmsDTO from '../dto/filmsDTO';
import PilotDTO from '../dto/pilotsDTO';
import VehicleDTO from '../dto/vehicleDTO';

export class VehiclesServices {

  async getVehiclesById(id: string): Promise<Vehicle> {
    const response = await axios.get(`${process.env.API_URL}vehicles/${id}`);
    return {
      id: response.data.id,
      nombre: response.data.name,
      modelo: response.data.model,
      clase_vehiculo: response.data.vehicle_class,
      fabricante: response.data.manufacturer,
      longitud: response.data.length,
      costo_creditos: response.data.cost_in_credits,
      tripulacion: response.data.crew,
      pasajeros: response.data.passengers.passengers,
      velocidad_maxima_atmosfera: response.data.max_atmosphering_speed,
      capacidad_carga: response.data.cargo_capacity,
      consumibles: response.data.consumables,
      peliculas: response.data.films,
      pilotos: response.data.pilots,
      url: response.data.url,
      creado: response.data.created,
      editado: response.data.edited
    };
  }
  async getAllVehicles(): Promise<Vehicle> {
    const response = await axios.get(`${process.env.API_URL}vehicles/`);
    return response.data.results.map((vehicle) => ({
      id: vehicle.id,
      nombre: vehicle.name,
      modelo: vehicle.model,
      clase_vehículo: vehicle.vehicle_class,
      fabricante: vehicle.manufacturer,
      longitud: vehicle.length,
      costo_en_créditos: vehicle.cost_in_credits,
      tripulación: vehicle.crew,
      pasajeros: vehicle.passengers,
      velocidad_máxima_en_atmósfera: vehicle.max_atmosphering_speed,
      capacidad_de_carga: vehicle.cargo_capacity,
      consumibles: vehicle.consumables,
      peliculas: vehicle.films,
      pilotos: vehicle.pilots,
      url: vehicle.url,
      creado: vehicle.created,
      editado: vehicle.edited
    }));
  }
  async getAllVehiclesRds(): Promise<Vehicle[]> {
    let vehicles = await VehicleDTO.findAll();
    let promises = vehicles.map(async (vehicle: VehicleDTO) => {
      let peliculas = await FilmsDTO.findAll({ where: { id_vehiculo: vehicle.id } });
      let pilotos = await PilotDTO.findAll({ where: { id_vehiculo: vehicle.id } });

      let peliculasUrls = peliculas.map(x => x.url);

      let pilotosUrl = pilotos.map(x => x.url);

      return {
        id: vehicle.id,
        nombre: vehicle.nombre,
        modelo: vehicle.modelo,
        clase_vehiculo: vehicle.clase_vehiculo,
        fabricante: vehicle.fabricante,
        longitud: vehicle.longitud,
        costo_creditos: vehicle.costo_creditos,
        tripulacion: vehicle.tripulacion,
        pasajeros: vehicle.pasajeros,
        velocidad_maxima_atmosfera: vehicle.velocidad_maxima_atmosfera,
        capacidad_carga: vehicle.capacidad_carga,
        consumibles: vehicle.consumibles,
        url: vehicle.url,
        peliculas: peliculasUrls,
        pilotos: pilotosUrl,
        creado: vehicle.creado,
        editado: vehicle.editado
      };
    });

    return Promise.all(promises);
  }

  async saveVehiclesRds(event: string): Promise<Vehicle> {
    let vehiculo = JSON.parse(event);
    let peliculas: string[] = [];
    let pilotos: string[] = [];
    const response = await VehicleDTO.create(vehiculo);

    for (let pelicula of vehiculo.peliculas) {
      await FilmsDTO.create({
        id_vehiculo: response.id,
        url: pelicula
      });
      peliculas.push(pelicula);
    }

    for (let piloto of vehiculo.pilotos) {
      await PilotDTO.create({
        id_vehiculo: response.id,
        url: piloto
      });
      pilotos.push(piloto);
    }

    return {
      id: response.id,
      nombre: response.nombre,
      modelo: response.modelo,
      clase_vehiculo: response.clase_vehiculo,
      fabricante: response.fabricante,
      longitud: response.longitud,
      costo_creditos: response.costo_creditos,
      tripulacion: response.tripulacion,
      pasajeros: response.pasajeros,
      velocidad_maxima_atmosfera: response.velocidad_maxima_atmosfera,
      capacidad_carga: response.capacidad_carga,
      consumibles: response.consumibles,
      url: response.url,
      peliculas: peliculas,
      pilotos: pilotos,
      creado: response.creado,
      editado: response.editado
    };
  }
}