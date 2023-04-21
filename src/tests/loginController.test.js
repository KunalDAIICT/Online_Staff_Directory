const request = require("supertest");
const baseURL = "http://localhost:3000";
// const serverController = require('../controllers/serverController');

// let server;

// beforeAll(async () => {
// 	server = await serverController.startServer();
// });

// afterAll(async () => {
//     await serverController.stopServer(server);
// });

describe("POST /login", () => {
	test("should return status 401 for invalid credentials(wrong Email)", async () => {
		const req = {
			body: {
				userEmail: "mrchintansuthar@gmail.com",
				password: "9898439470",
			},
		};
		const res = await request(baseURL).post("/login").send(req.body);
		expect(res.status).toEqual(401);
	});

	test("should return status 200 for valid credentials", async () => {
		const req = {
			body: {
				userEmail: "jay@gmail.com",
				password: "p",
				role: "1",
			},
		};
		const res = await request(baseURL).post("/login").send(req.body);
		expect(res.status).toEqual(200);
	});

	test("should return status 401 for invalid credentials(wrong role)", async () => {
		const req = {
			body: {
				userEmail: "jay@gmail.com",
				password: "p",
				role: "0",
			},
		};
		const res = await request(baseURL).post("/login").send(req.body);
		expect(res.status).toEqual(401);
	});

	test("should return status 401 for invalid credentials(wrong password)", async () => {
		const req = {
			body: {
				userEmail: "dp@gmail.com",
				password: "a",
				role: "1",
			},
		};
		const res = await request(baseURL).post("/login").send(req.body);
		expect(res.status).toEqual(401);
	});
});
