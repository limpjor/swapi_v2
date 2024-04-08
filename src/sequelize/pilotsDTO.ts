import { Model, DataTypes } from 'sequelize';
import sequelize from './sequelizeConfig';
import VehicleDTO from './vehicleDTO';

class PilotDTO extends Model {
  public id!: number;
  public id_vehicles!: number;
  public url!: string;
}

PilotDTO.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    id_vehicles: {
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
    tableName: 'pilots',
    timestamps: false,
  }
);

PilotDTO.belongsTo(VehicleDTO, { foreignKey: 'id_vehicles' }); // Define la relación con la tabla vehicles

export default PilotDTO;
