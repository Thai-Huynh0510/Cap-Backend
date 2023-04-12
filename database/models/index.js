// Register models, set up associations between tables, and generate barrel file for the models

const Task = require('./Task');
const Employee = require('./Employee');
const Order = require('./Order')
Task.belongsTo(Employee);
Employee.hasMany(Task);
Order.belongsTo(Task);
Task.hasOne(Order)
module.exports = {
  Task,
  Employee,
  Order
};