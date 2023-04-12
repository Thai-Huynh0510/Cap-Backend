const Sequelize = require('sequelize');
const db = require('../db');


const Order = db.define("order",{ 
    task:{
        type: Sequelize.STRING,
        allowNull: false
    },

    request: {
        type: Sequelize.STRING,
        allowNull: false
    }, 

    customer: {
        type: Sequelize.STRING, 
    }
}); 

module.exports = Order;