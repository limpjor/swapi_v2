import { Model, DataTypes } from 'sequelize';
import sequelize from './sequelizeConfig';

class VehicleDTO extends Model {
  public id!: number;
  public name!: string;
  public model!: string;
  public vehicle_class!: string;
  public manufacturer!: string;
  public length!: string;
  public cost_in_credits!: string;
  public crew!: string;
  public passengers!: string;
  public max_atmosphering_speed!: string;
  public cargo_capacity!: string;
  public consumables!: string;
  public url!: string;
  public created!: string;
  public edited!: string;
}

VehicleDTO.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    model: DataTypes.STRING,
    vehicle_class: DataTypes.STRING,
    manufacturer: DataTypes.STRING,
    length: DataTypes.STRING,
    cost_in_credits: DataTypes.STRING,
    crew: DataTypes.STRING,
    passengers: DataTypes.STRING,
    max_atmosphering_speed: DataTypes.STRING,
    cargo_capacity: DataTypes.STRING,
    consumables: DataTypes.STRING,
    url: DataTypes.STRING,
    created: DataTypes.STRING,
    edited: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: 'Vehicle',
    tableName: 'vehicles', // El nombre de la tabla en la base de datos
    timestamps: false, // Si no tienes campos de timestamps
  }
);

export default VehicleDTO;
