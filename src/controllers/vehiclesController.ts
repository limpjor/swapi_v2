import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { VehiclesServices } from '../services/vehiclesService';


export class VehiclesController {

  private vehiclesServices: VehiclesServices;


  constructor() {
    this.vehiclesServices = new VehiclesServices();
  }

  async getVehiclesById(event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> {
    try {
      const vehicleId = event.pathParameters?.id;
      const vehicleJson = await this.vehiclesServices.getVehiclesById(vehicleId);

      return {
        statusCode: 200,
        body: JSON.stringify(vehicleJson),
      };
    } catch (error) {
      console.error('Error:', error);
      return {
        statusCode: 500,
        body: JSON.stringify({ message: 'Error retrieving vehicle information' }),
      };
    }
  }

  async getAllVehicles(): Promise<APIGatewayProxyResult> {
    try {
      const vehicle = await this.vehiclesServices.getAllVehicles();
      return {
        statusCode: 200,
        body: JSON.stringify(vehicle),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ message: 'Error retrieving character information' }),
      };
    }
  }

  async getAllVehiclesRds(): Promise<APIGatewayProxyResult> {
    try {
      const vehicle = await this.vehiclesServices.getAllVehiclesRds();
      console.log("vehicle:", vehicle)
      return {
        statusCode: 200,
        body: (vehicle != null) ? JSON.stringify(vehicle) : null,
      };
    } catch (error) {
      console.log("error:", error)
      return {
        statusCode: 500,
        body: JSON.stringify({ message: 'Error retrieving character information' }),
      };
    }
  }

  async saveVehiclesRds(event): Promise<APIGatewayProxyResult> {
    try {
      const vehicle = await this.vehiclesServices.saveVehiclesRds(event);
      return {
        statusCode: 200,
        body: (vehicle != null) ? JSON.stringify(vehicle) : null,
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ message: 'Error retrieving character information' }),
      };
    }
  }
}