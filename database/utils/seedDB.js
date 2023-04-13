const { Employee, Task, Order } = require('../models');

const seedDB = async () => {
	const dummyEmployee = await Employee.create({
		first_name: "John",
		last_name: "Cena",
		department: "Engineering"
	});

	const dummyEmployee1 = await Employee.create({
		first_name: "Kevin",
		last_name: "Space",
		department: "Marketing"
	});

	const dummyEmployee2 = await Employee.create({
		first_name: "Bryan",
		last_name: "Park",
		department: "HR"
	});

	const dummyTask = await Task.create({
		description: "Build a rocket",
		completion_status: "Not Completed",
		due_date: "2023/05/10",
		comments: "Get it done ASAP",
	});

	const dummyTask1 = await Task.create({
		description: "Fire John",
		completion_status: "Not Completed",
		due_date: "2023/05/15",
		comments: "We don't need him anymore",
	});
	const dummyTask2 = await Task.create({
		description: "Monthly report",
		completion_status: "Not Completed",
		due_date: "2023/05/12",
		comments: "This month report",
	});
	const dummyOrder = await Order.create({
		detail: "Cool looking rocket",
		request: "- Low cost \r\n - Cool Looking \r\n - Security \r\n",
		customer: "NASA",
		order_due_date: "2023/05/30"	
	})
	await dummyTask.setEmployee(dummyEmployee);
	await dummyTask1.setEmployee(dummyEmployee1);
	await dummyTask2.setEmployee(dummyEmployee2);
	await dummyOrder.setTask(dummyTask);
}

module.exports = seedDB;