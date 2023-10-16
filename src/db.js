import pkg from 'sequelize';
const { Sequelize } = pkg;

const sequelize = new Sequelize({
  dialect: 'postgres',
  username: 'postgres',
  password: 'WgdSfxKl1R42CqQoPGg7',
  database: 'railway',
  host: 'containers-us-west-88.railway.app',
  port: 5586,

});

export default sequelize;
