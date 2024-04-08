import { Model, DataTypes } from 'sequelize';
import sequelize from '../../sequelizeConfig';
import VehicleDTO from './vehicleDTO';

class PilotDTO extends Model {
  public id!: number;
  public id_vehiculo!: number;
  public url!: string;
}

PilotDTO.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    id_vehiculo: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: 'Pilot',
    tableName: 'pilotos',
    timestamps: false,
  }
);

PilotDTO.belongsTo(VehicleDTO, { foreignKey: 'id_vehiculo' }); // Define la relación con la tabla vehicles

export default PilotDTO;
