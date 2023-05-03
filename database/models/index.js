// Register models, set up associations between tables, and generate barrel file for the models

const Task = require('./Task');
const Employee = require('./Employee');
const Order = require('./Order');
const Calendar = require('./Calendar');
Task.belongsTo(Employee);
Employee.hasMany(Task);
Order.belongsTo(Task);
Task.hasMany(Order);
module.exports = {
  Task,
  Employee,
  Order,
  Calendar
};