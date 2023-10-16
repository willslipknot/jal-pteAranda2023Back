import pkg from 'sequelize';
const { Sequelize } = pkg;

const sequelize = new Sequelize({
  dialect: 'postgres',
  username: 'postgres',
  password: 'djWhRM6xB8LtrnwRWsbE',
  database: 'railway',
  host: 'containers-us-west-101.railway.app',
  port: 5877,

});

export default sequelize;
