// Register models, set up associations between tables, and generate barrel file for the models

const Task = require('./Task');
const Employee = require('./Employee');
const Order = require('./Order')
const Admin = require('./Admin')
Task.belongsTo(Employee);
Employee.hasMany(Task);
Order.belongsTo(Task);
Task.hasMany(Order);
Admin.belongsTo(Admin);
module.exports = {
  Task,
  Employee,
  Order,
  Admin,
};