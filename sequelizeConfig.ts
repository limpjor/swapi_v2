import { Sequelize } from 'sequelize-typescript';

// Configuración de la conexión a la base de datos
const sequelize = new Sequelize({
  dialect: 'mysql',
  database: 'swapi',
  username: 'admin',
  password: 'njRa9Oi20n85D6e7D8ex',
  host: 'databaseswapi.cvikwskgmzq2.us-east-1.rds.amazonaws.com',
  port: 3306, 
  define: {
    timestamps: false,
  },
});

export default sequelize;
