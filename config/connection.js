import dotenv from 'dotenv';
import Sequelize from 'sequelize';
dotenv.config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: 'localhost',
  dialect: 'mysql',
  database: 'myblog-todaydb', // Update the database name
  dialectOptions: {
    decimalNumbers: true,
  },
});

export default sequelize;
