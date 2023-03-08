//Instantiate database 

//model dependencies 

const Sequelize = require('sequelize')

const db = new Sequelize('ems-backend', 'postgres', 'password',{
    host: 'local host',
    dialect: 'postgres'
});

//Export sequelize 

module.exports = db; 