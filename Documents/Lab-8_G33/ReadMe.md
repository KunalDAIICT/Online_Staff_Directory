#### Testing Login Controller

```
const request = require("supertest");
const baseURL = "http://localhost:3000";

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
```
#### Testing SignUp Controller

```
const request = require('supertest');
const baseURL = "http://localhost:3000";

describe('POST /signUp', () => {
    test('User already exists Student', async () => {
        const req = {
            body: {
                userEmail: 'dp@gmail.com',
                name: 'Devansh',
                password: '1234567890',
                mobile_number: '1234567890',
                university: 'IIT Bombay',
                role: '0',
            }
        };
        const res = await request(baseURL).post('/signUp').send(req.body);
        expect(res.status).toEqual(400);
    });

    test('Valid credentials (not used before) Student', async () => {
        const req = {
            body: {
                userEmail: 'deva123sfasefsfewfdasddadad@gmail.com',
                name: 'Devansh',
                password: '1234567890',
                mobile_number: '1234567890',
                university: 'IIT Bombay',
                role: '0',
            }
        };
        const res = await request(baseURL).post('/signUp').send(req.body);
        expect(res.status).toEqual(200);
    });

    test('User already exists Faculty', async () => {
        const req = {
            body: {
                confirmpassword: "p",
                mobile_number: "07623065210",
                name: "Jay",
                password: "p",
                role: "1",
                university: "DAIICT",
                userEmail: "jay@gmail.com",
                specialization : "ML",
                experience : "5",
                Projects : ["ABC","DEG"],
                Awards_and_Honors : ["ABC","DEG"],
                Industrial_experience: ["ABC","DEG"],
                Publications : ["ABC","DEG"]
            }
        };
        const res = await request(baseURL).post('/signUp').send(req.body);
        expect(res.status).toEqual(400);
    });

    test('Valid credentials (not used before) Faculty', async () => {
        const req = {
            body: {
                confirmpassword: "p",
                mobile_number: "07623065210",
                name: "Jay",
                password: "p",
                role: "1",
                university: "DAIICT",
                userEmail: "vansh1fsddsfdfsf6564sfee64@gmail.com",
                specialization : "ML",
                experience : "5",
                Projects : ["ABC","DEG"],
                Awards_and_Honors : ["ABC","DEG"],
                Industrial_experience: ["ABC","DEG"],
                Publications : ["ABC","DEG"]
            }
        };
        const res = await request(baseURL).post('/signUp').send(req.body);
        expect(res.status).toEqual(200);
    });
});
```

#### Results

<img width="1440" alt="Screenshot 2023-04-21 at 10 21 22 PM" src="https://user-images.githubusercontent.com/124344810/233691790-197db862-b6f0-42f9-bb2f-5caf0567dd41.png">
