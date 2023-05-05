const { Employee, Task, Order, Event } = require('../models');

const seedDB = async () => {
	const dummyEmployee = await Employee.create({
		first_name: "John",
		last_name: "Smith",
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
	const dummyEmployee3 = await Employee.create({
        first_name: "Nathan",
        last_name: "Jones",
        department: "CEO"
    });

    const dummyEmployee4 = await Employee.create({
        first_name: "Stephen",
        last_name: "Howson",
        department: "Chief Ivesting Officer"
    });
    const dummyEmployee5 = await Employee.create({
        first_name: "Kristina",
        last_name: "Delia",
        department: "Head of Sales"
    });

    const dummyEmployee6 = await Employee.create({
        first_name: "Pablo",
        last_name: "Pena",
        department: "Chief Financial Officer"
    });

    const dummyEmployee7 = await Employee.create({
        first_name: "Thai",
        last_name: "Hyun",
        department: "Chairman"
	});

	const dummyTask = await Task.create({
        description: "Build a rocket",
        completion_status: "Not Completed",
        due_date: "2023/05/10",
        comments: "Get it done ASAP",
    });

    const dummyTask1 = await Task.create({
        description: "Build a 11 seater Jet",
        completion_status: "Not Completed",
        due_date: "2023/05/15",
        comments: "Clients wants full options and luxury",
    });
    const dummyTask2 = await Task.create({
        description: "Build a website",
        completion_status: "Not Completed",
        due_date: "2023/06/20",
        comments: "Customer needs EMS project",
    });
    const dummyTask3 = await Task.create({
        description: "Build an app",
        completion_status: "Not Completed",
        due_date: "2023/06/25",
        comments: "Customer needs it ASAP",
    });
    const dummyTask4 = await Task.create({
        description: "Create an investing portfolio for David",
        completion_status: "Not Completed",
        due_date: "2023/06/30",
        comments: "Customer wants aggressive trades",
    });
    const dummyTask5 = await Task.create({
        description: "Meeting with potential investors",
        completion_status: "Not Completed",
        due_date: "2023/07/05",
        comments: "Make sure sales department knows the details of products",
    });
    const dummyTask6 = await Task.create({
        description: "Meeting with Nathan",
        completion_status: "Not Completed",
        due_date: "2023/07/10",
        comments: "Disputes with fellow coworkers",
    });
    const dummyTask7 = await Task.create({
        description: "Give documents to Chairman",
        completion_status: "Not Completed",
        due_date: "2023/07/15",
        comments: "needs chairman's signature",
    });
    const dummyTask8 = await Task.create({
        description: "Team meeting",
        completion_status: "Not Completed",
        due_date: "2023/07/20",
        comments: "Go over quarterly budgeting",
    });
    const dummyTask9 = await Task.create({
        description: "Build a website",
        completion_status: "Not Completed",
        due_date: "2023/07/25",
        comments: "Webite about Fan sports content",
    });
    const dummyTask10 = await Task.create({
        description: "Build a website",
        completion_status: "Not Completed",
        due_date: "2023/07/30",
        comments: "Customer wants a website for dog adoption",
    });

	const dummyOrder = await Order.create({
		detail: "Cool looking rocket",
		request: "- Low cost \r\n- Cool Looking \r\n- Safe and secure \r\n",
		customer: "NASA",
		order_due_date: "2023/05/30"	
	})
	const dummyOrder1 = await Order.create({
		detail: "New G5 plane",
		request: "- Full options \r\n- Bullet Proof \r\n- Logo of the company on the side of plane",
		customer: "Jeff Bezos",
		order_due_date: "2023/07/25"	
	})
	const dummyOrder2 = await Order.create({
		detail: "Customer wants to build a website, showing their company ",
		request: "- Clear goal \r\n- Technical prowess \r\n- Security \r\n- Great design",
		customer: "StarBucks",
		order_due_date: "2023/07/25"	
	})
	const dummyOrder3 = await Order.create({
		detail: " Create and app aligning with company ",
		request: "- Easy UI \r\n- 2 MFA Security \r\n- Great design",
		customer: "StarBucks",
		order_due_date: "2023/07/25"	
	})
	const dummyOrder4 = await Order.create({
		detail: "Customer wants to build a website, showing their company ",
		request: "- Clear goal \r\n- Technical prowess \r\n- Security \r\n- Great design",
		customer: "StarBucks",
		order_due_date: "2023/07/25"	
	})
	const dummyEvent = await Event.create({
		title: "task1",
		start_date: "2023/05/04",
		end_date: "2023/05/17",
	})
	const dummyEvent1 = await Event.create({
		title: "task2",
		start_date: "2023/05/15",
		end_date: "2023/05/20",
	})
	await dummyTask.setEmployee(dummyEmployee);
	await dummyTask1.setEmployee(dummyEmployee1);
	await dummyTask2.setEmployee(dummyEmployee2);
	await dummyTask3.setEmployee(dummyEmployee3);
	await dummyTask4.setEmployee(dummyEmployee4);
	await dummyTask5.setEmployee(dummyEmployee5);
	await dummyTask6.setEmployee(dummyEmployee6);
	await dummyTask7.setEmployee(dummyEmployee7);
	await dummyTask8.setEmployee(dummyEmployee7);
	await dummyTask9.setEmployee(dummyEmployee7);
	await dummyTask10.setEmployee(dummyEmployee2);
	await dummyTask.addOrder(dummyOrder);
	await dummyTask2.addOrder(dummyOrder1);
	await dummyTask2.addOrder(dummyOrder2);
	await dummyTask3.addOrder(dummyOrder3);
	await dummyTask4.addOrder(dummyOrder4);
	await dummyEvent;
	await dummyEvent1;
}

module.exports = seedDB;