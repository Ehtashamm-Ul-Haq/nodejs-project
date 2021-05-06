const Sequelize = require('sequelize');
const config = require('./config/database');

const username = config.username;
const password = config.password;
const sequelize = new Sequelize(config.database, username, password, config);

sequelize
  .authenticate()
  .then(() => {
    console.log('connected to db');
  })
  .catch((err) => {
    console.log('Unable to connect to the database:', err)
  });
