const { Employee, Task } = require('../models');

const seedDB = async () => {
	const dummyEmployee = await Employee.create({
		first_name: "John",
		last_name: "Doe",
		department: "Engineering"
	});

	const dummyEmployee1 = await Employee.create({
		first_name: "Hello",
		last_name: "Kitty",
		department: "HR"
	});

	const dummyTask = await Task.create({
		description: "Build space rocket",
		completion_status: "Not Completed",
		due_date: "2023/05/10",
		comments: "get it done ASAP",
	});

	const dummyTask1 = await Task.create({
		description: "Fire John",
		completion_status: "Not Completed",
		due_date: "2023/05/15",
		comments: "we don't need him anymore",
	});

	await dummyTask.setEmployee(dummyEmployee);
	await dummyTask1.setEmployee(dummyEmployee1);
	
}

module.exports = seedDB;