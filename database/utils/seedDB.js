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
		department: "HR"
	});

	const dummyEmployee2 = await Employee.create({
		first_name: "Bryan",
		last_name: "Park",
		department: "Web Developer"
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
		description: "Build a website",
		completion_status: "Not Completed",
		due_date: "2023/07/10",
		comments: "Customer needs it ASAP",
	});
	const dummyOrder = await Order.create({
		detail: "Cool looking rocket",
		request: "- Low cost \r\n- Cool Looking \r\n- Safe and secure \r\n",
		customer: "NASA",
		order_due_date: "2023/05/30"	
	})
	const dummyOrder2 = await Order.create({
		detail: "Customer wants to build a website, showing their company ",
		request: "- Clear goal \r\n- Technical prowess \r\n- Security \r\n- Great design",
		customer: "StarBucks",
		order_due_date: "2023/07/25"	
	})
	await dummyTask.setEmployee(dummyEmployee);
	await dummyTask1.setEmployee(dummyEmployee1);
	await dummyTask2.setEmployee(dummyEmployee2);
	await dummyTask.addOrder(dummyOrder);
	await dummyTask2.addOrder(dummyOrder2);
}

module.exports = seedDB;