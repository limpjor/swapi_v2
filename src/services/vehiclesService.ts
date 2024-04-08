
import axios from 'axios';
import FilmsDTO from 'src/sequelize/filmsDTO';
import PilotDTO from 'src/sequelize/pilotsDTO';
import VehicleDTO from 'src/sequelize/vehicleDTO';

export class VehiclesServices{

  async getVehiclesById (id: string): Promise<Vehicle> {
    const response = await axios.get(`${process.env.API_URL}vehicles/${id}`);
    return  {      
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
  async getAllVehicles (): Promise<Vehicle> {
    const response = await axios.get(`${process.env.API_URL}vehicles/`);
    return response.data.results.map((vehicle: { id: any; name: any; model: any; vehicle_class: any; manufacturer: any; length: any; cost_in_credits: any; crew: any; passengers: any; max_atmosphering_speed: any; cargo_capacity: any; consumables: any; films: any; pilots: any; url: any; created: any; edited: any; }) => ({
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
    const response = await VehicleDTO.findAll();
    return response.map(vehicle => ({
      id:vehicle.id,
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
      peliculas : [],
      pilotos : [],
      creado: vehicle.creado,
      editado: vehicle.editado
    }));
  }
  async saveVehiclesRds(event: string): Promise<Vehicle> {
    
    let vehiculo = JSON.parse(event);
    let peliculas : string [];
    let pilotos : string[];
    const response = await VehicleDTO.create(vehiculo);
    console.log("vehiculo.peliculas:",vehiculo.peliculas);

    vehiculo.peliculas.forEach(async (pelicula: string) => {
      const film = {
        id_vehiculo:response.id,
        url:pelicula
      };
      await FilmsDTO.create(film);
      peliculas.push(pelicula);
    });

    vehiculo.pilotos.forEach(async (piloto: string) => {
      await PilotDTO.create({
        id_vehiculo:response.id,
        url:piloto
      });
      pilotos.push(piloto);
    });

    return {
      id:response.id,
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
      peliculas : peliculas,
      pilotos : pilotos,
      creado: response.creado,
      editado: response.editado
    };
  }
}