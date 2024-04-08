
import axios from 'axios';
import VehicleDTO from 'src/sequelize/vehicleDTO';

export class VehiclesServices{

  async getVehiclesById (id: string): Promise<Vehicle> {
    let vehicle: Vehicle;
    const response = await axios.get(`${process.env.API_URL}vehicles/${id}`);
    return  vehicle={      
      nombre: response.data.name,
      modelo: response.data.model,
      clase_vehículo: response.data.vehicle_class,
      fabricante: response.data.manufacturer,
      longitud: response.data.length,
      costo_en_créditos: response.data.cost_in_credits,
      tripulación: response.data.crew,
      pasajeros: response.data.passengers.passengers,
      velocidad_máxima_en_atmósfera: response.data.max_atmosphering_speed,
      capacidad_de_carga: response.data.cargo_capacity,
      consumibles: response.data.consumables,
      películas: response.data.films,
      pilotos: response.data.pilots,
      url: response.data.url,
      creado: response.data.created,
      editado: response.data.edited
    };
  }
  async getAllVehicles (): Promise<Vehicle> {
    const response = await axios.get(`${process.env.API_URL}vehicles/`);
    return response.data.results.map(vehicle => ({
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
      películas: vehicle.films,
      pilotos: vehicle.pilots,
      url: vehicle.url,
      creado: vehicle.created,
      editado: vehicle.edited
    }));
  }
  async getAllVehiclesRds(): Promise<Vehicle[]> {
    const response = await VehicleDTO.findAll();
    return response.map(vehicle => ({
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
      url: vehicle.url,
      películas : [],
      pilotos : [],
      creado: vehicle.created,
      editado: vehicle.edited
    }));
  }
  async saveVehiclesRds(event): Promise<Vehicle> {
    const response = await VehicleDTO.create(event);
    return {
      nombre: response.name,
      modelo: response.model,
      clase_vehículo: response.vehicle_class,
      fabricante: response.manufacturer,
      longitud: response.length,
      costo_en_créditos: response.cost_in_credits,
      tripulación: response.crew,
      pasajeros: response.passengers,
      velocidad_máxima_en_atmósfera: response.max_atmosphering_speed,
      capacidad_de_carga: response.cargo_capacity,
      consumibles: response.consumables,
      url: response.url,
      películas : [],
      pilotos : [],
      creado: response.created,
      editado: response.edited
    };
  }
}