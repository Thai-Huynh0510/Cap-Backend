const Sequelize = require('sequelize');
const db = require('../db'); 

const Calendar = db.define("Calendar", {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    end_date:{
        type: Sequelize.DATE
    }
});

module.exports = Calendar;