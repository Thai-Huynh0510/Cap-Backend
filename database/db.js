//Instantiate database 

//model dependencies 
const Sequelize = require('sequelize')

//entry point
const db = new Sequelize('ems-backend', 'postgres', 'password',{
    host: 'localhost',
    dialect: 'postgres'
});

//Export sequelize 
module.exports = db;