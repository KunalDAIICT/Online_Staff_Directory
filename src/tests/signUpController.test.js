const request = require('supertest');
const baseURL = "http://localhost:3000";

// const serverController = require('../controllers/serverController');

// let server;

// beforeAll(async () => {
// 	server = await serverController.startServer();
// });

// afterAll(async () => {
//     await serverController.stopServer(server);
// });


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
                userEmail: 'devansh123sfasefsfewfdasddadad@gmail.com',
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
                userEmail: "vansh12345svfsddsfdfsf6564sfee64@gmail.com",
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