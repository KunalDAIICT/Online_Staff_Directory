const request = require("supertest");
const baseURL = "http://localhost:3000";
const serverController = require('../controllers/serverController');

function generateRandomEmail() {
	const alphabet = "abcdefghijklmnopqrstuvwxyz";
	const numbers = "0123456789";
	const emailLength = Math.floor(Math.random() * 10) + 5; // generate a random length between 5 and 14

	let email = "";

	// add random letters and numbers to the email string
	for (let i = 0; i < emailLength; i++) {
		const isNumber = Math.random() < 0.5; // 50/50 chance of generating a number or a letter
		const characterSet = isNumber ? numbers : alphabet;
		const randomCharacter = characterSet.charAt(
			Math.floor(Math.random() * characterSet.length)
		);
		email += randomCharacter;
	}

	// add the domain name and extension to the email string
	const domains = ["gmail.com", "yahoo.com", "hotmail.com", "outlook.com"];
	const randomDomain = domains[Math.floor(Math.random() * domains.length)];
	email += "@" + randomDomain;

	return email;
}

describe("POST /signUp", () => {
	test("User already exists Student", async () => {
		const req = {
			body: {
				userEmail: "dp@gmail.com",
				name: "Devansh",
				password: "1234567890",
				mobile_number: "1234567890",
				university: "IIT Bombay",
				role: "0",
			},
		};
		const res = await request(baseURL).post("/signUp").send(req.body);
		expect(res.status).toEqual(400);
	});

	test('Valid credentials (not used before) Student', async () => {
	    const req = {
	        body: {
	            userEmail: generateRandomEmail(),
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

	test("User already exists Faculty", async () => {
		const req = {
			body: {
				confirmpassword: "p",
				mobile_number: "07623065210",
				name: "Jay",
				password: "p",
				role: "1",
				university: "DAIICT",
				userEmail: "jay@gmail.com",
				specialization: "ML",
				experience: "5",
				Projects: ["ABC", "DEG"],
				Awards_and_Honors: ["ABC", "DEG"],
				Industrial_experience: ["ABC", "DEG"],
				Publications: ["ABC", "DEG"],
			},
		};
		const res = await request(baseURL).post("/signUp").send(req.body);
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
	            userEmail: generateRandomEmail(),
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
