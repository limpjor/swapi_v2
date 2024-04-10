import { Sequelize } from 'sequelize-typescript';

// Configuración de la conexión a la base de datos
const sequelize = new Sequelize({
  dialect: 'mysql',
  database: 'swapi',
  username: 'admin',
  password: 'pedir password, por seguridad no lo pongo',
  host: 'pedir host, por seguridad no lo pongo',
  port: 3306, 
  define: {
    timestamps: false,
  },
});

export default sequelize;
