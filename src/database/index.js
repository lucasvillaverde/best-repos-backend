const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Owner = require('../models/Owner');
const Repository = require('../models/Repository');

const connection = new Sequelize(dbConfig);
// connection
//   .authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully.');
//   })
//   .catch(err => {
//     console.error('Unable to connect to the database:', err);
//   });

  Repository.init(connection);
  Owner.init(connection);
  
  Owner.associate(connection.models);
  Repository.associate(connection.models);

module.exports = connection;
