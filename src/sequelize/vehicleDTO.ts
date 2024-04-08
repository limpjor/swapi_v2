import { Model, DataTypes } from 'sequelize';
import sequelize from './sequelizeConfig';

class VehicleDTO extends Model {
  public id!: number;
  public nombre!: string;
  public modelo!: string;
  public clase_vehiculo!: string;
  public fabricante!: string;
  public longitud!: string;
  public costo_creditos!: string;
  public tripulacion!: string;
  public pasajeros!: string;
  public velocidad_maxima_atmosfera!: string;
  public capacidad_carga!: string;
  public consumibles!: string;
  public url!: string;
  public creado!: string;
  public editado!: string;
}

VehicleDTO.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: DataTypes.STRING,
    modelo: DataTypes.STRING,
    clase_vehiculo: DataTypes.STRING,
    fabricante: DataTypes.STRING,
    longitud: DataTypes.STRING,
    costo_creditos: DataTypes.STRING,
    tripulacion: DataTypes.STRING,
    pasajeros: DataTypes.STRING,
    velocidad_maxima_atmosfera: DataTypes.STRING,
    capacidad_carga: DataTypes.STRING,
    consumibles: DataTypes.STRING,
    url: DataTypes.STRING,
    creado: DataTypes.STRING,
    editado: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: 'Vehicle',
    tableName: 'vehiculos', // El nombre de la tabla en la base de datos
    timestamps: false, // Si no tienes campos de timestamps
  }
);

export default VehicleDTO;
