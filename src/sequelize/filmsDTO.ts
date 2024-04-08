import { Model, DataTypes } from 'sequelize';
import sequelize from './sequelizeConfig';
import VehicleDTO from './vehicleDTO';

class FilmsDTO extends Model {
    public id!: number;
    public id_vehiculo!: number;
    public url!: string;
}

FilmsDTO.init(
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
        tableName: 'peliculas',
        timestamps: false,
    }
);

FilmsDTO.belongsTo(VehicleDTO, { foreignKey: 'id_vehiculo' }); // Define la relación con la tabla vehicles

export default FilmsDTO;
