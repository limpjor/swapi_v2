import { APIGatewayProxyResult } from 'aws-lambda';
import { VehiclesController } from './controllers/vehiclesController';

export const handler = async (event): Promise<APIGatewayProxyResult> => {
  const vehiclesController = new VehiclesController();
  try {
    let opc = (event.pathParameters === null)? 
        event.rawPath:
        event.rawPath.replace('/'+event.pathParameters.id,'');
    switch (opc) {
      case '/vehicle':
        return  (event.pathParameters === null)? vehiclesController.getAllVehicles() :vehiclesController.getVehiclesById(event);
      default:
        return {
          statusCode: 404,
          body: JSON.stringify({ message: 'Route not found' }),
        };
      case '/RDS/vehicle':
        return (event.requestContext.http.method=='GET')?vehiclesController.getAllVehiclesRds():vehiclesController.saveVehiclesRds(event.body);
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Internal server error' }),
    };
  }
};
