// Register models, set up associations between tables, generate barrel file for the models 


const Task = require('./Task');
const Employee = require('./Employee');  

Task.belongsTo(Employee); 
Employee.hasMany(Task); 

Module.exports= {
    Task, 
    Employee
}