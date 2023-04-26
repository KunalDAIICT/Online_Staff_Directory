const request = require("supertest");
const baseURL = "http://localhost:3000";


// describe("GET /verify-email", () => {
//     test("if user is verified", async () => {
//         const res = await request(baseURL).get("/verify-email")
//         .set('Authorization','Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIyMDIwMDEwMTFAZGFpaWN0LmFjLmluIiwiaWF0IjoxNjgyNTM5NTQwfQ.vr6UoUoKWdpZ6_IKDzm2ez8qIUGFf51etQC3JYZCaWo')
//         expect(res.status).toEqual(200);
//     });

//     test("if user is not verified", async () => {
//         const res = await request(baseURL).get("/verify-email")
//         .set('Authorization','Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIyMDIwMDEwMTFAZGFpaWN0LmFjLmluIiwiaWF0IjoxNjgyNTM5NTQwfQ.vr6UoUoKWdpZ6_IKDzm2ez8qIUGFf51etQC3JYZCaWo')
//         expect(res.status).toEqual(200);
//     });

//     test("token invalid", async () => {
//         const res = await request(baseURL).get("/verify-email")
//         .set('Authorization', 'Bearer iJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIyMDIwMDEwMTFAZGFpaWN0LmFjLmluIiwiaWF0IjoxNjgyNTM5NTQwfQ.vr6UoUoKWdpZ6_IKDzm2ez8qIUGFf51etQC3JYZCa3535')
//         expect(res.status).toEqual(401);
//     });
// });

// describe("POST /sendresetlink", () => {

//     test("should return status 401 for invalid credentials(wrong Email)", async () => {
//         const req = {
//             body: {
//                 email: "34355hyt@gmail.com"
//             }
//         };
//         const res = await request(baseURL).post("/sendresetlink").send(req.body);
//         expect(res.status).toEqual(404);
//     });

//     // test("should return status 200 for valid credentials", async () => {
//     //     const req = {
//     //         body: {
//     //             email: "jayesh@gmail.com"
//     //             }
//     //     };
//     //     const res = await request(baseURL).post("/sendresetlink").send(req.body);
//     //     expect(res.status).toEqual(200);
//     // });

// });

// describe("POST /resetpassword", () => {

//     test("invalid token", async () => {
//         const req = {
//             headers:{
//                 'Content-Type': 'application/json',
//                 'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQioiJkcDEyMzRhYmNAZ21haWwuY29tIiwiaWF0IjoxNjgyNTQ2MDAyfQ.jG8-cAjA3HCHadGrIGzzqGwdMKbswuJ_PEFvE_RobDs",
//             },
//             body:{
//                 "newpassword":"dp",
//             }
//         };
//         const res = await request(baseURL).post("/resetpassword").send(req.body).set(req.headers);
//         expect(res.status).toEqual(401);
//     });

//     test("valid token but new password not provided",  async () => {
//         const req  = {
//             body:{
//                 newpassword:""
//             }   
//         };
//         const res =  request(baseURL).post("/resetpassword").
//                 set('Authorization' , 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJkZXYxMjM0NTZAZ21haWwuY29tIiwiaWF0IjoxNjgyNTQ5MDUyfQ.cD8dUKvIhq4YHA739i-A8QBSrfve7OOb0EqzDor2KEc')
//                 .send(req.body);

//         expect(res.status).toEqual(400);
//     });

//     test("password reset successful", async () => {
//         const req = {
//             headers:{
//                 'Content-Type': 'application/json',
//                 Authorization:'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJkZXYxMjM0NTZAZ21haWwuY29tIiwiaWF0IjoxNjgyNTQ5MDUyfQ.cD8dUKvIhq4YHA739i-A8QBSrfve7OOb0EqzDor2KEc'
//             },
//             body:{
//                 newpassword:"123456",
//             }
//         };
//         const res = request(baseURL).post("/resetpassword").send(req.body).set(req.headers)
//         expect(res.status).toEqual(200);
//     });
// });

// describe("POST /getFaculty", () => {
//     test("valid email Id", async () => {
//         const req = {
//             body: {
//                 email: "pqr@gmail.com"
//             }
//         };
//         const res = await request(baseURL).post("/getFaculty").send(req.body);
//         expect(res.status).toEqual(200);
//     });

//     test("invalid email Id (student Id)", async () => {
//         const req = {
//             body: {
//                 email: "dp1234@gmail.com"
//             }
//         };
//         const res = await request(baseURL).post("/getFaculty").send(req.body);
//         expect(res.status).toEqual(404);
//     });

//     test("invalid email Id (invalid email)", async () => {
//         const req = {
//             body: {
//                 email: "dp1234gml.com"
//             }
//         };
//         const res = await request(baseURL).post("/getFaculty").send(req.body);
//         expect(res.status).toEqual(404);
//     });
// });

    
// describe("GET /deleteProfile", () => {
//     test("Invalid Token", async () => {
//             const req = {
//                 headers:{
//                     Authorization:'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIyMDiwMDEwMTFAZGFpaWN0LmFjLmluIiwiaWF0IjoxNjgyNTM5NTQwfQ.vr6UoUoKWdpZ6_IKDzm2ez8qIUGFf51etQC3JYZCaWo'
//                 },

//             };
//         const res = await request(baseURL).get("/deleteProfile").set(req.headers);
//         expect(res.status).toEqual(401);
//     });

//     test("Valid Token", async () => {
//         const req = {
//             headers:{
//                 Authorization:'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJqYXkzMmVAZ21haWwuY29tIiwiaWF0IjoxNjgyNTQ2ODY1fQ.lJ0X6395s9lQeZcB0lgVUSxFosfrKBAnHBILJq0ZcP4'
//             },

//         };
//     const res = await request(baseURL).get("/deleteProfile").set(req.headers);
//     expect(res.status).toEqual(200);
//     });
// });

describe("POST /editProfile", () => {
    test("Invalid Token", async () => {
        const req = {
            headers:{
                Authorization:'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIyMDiwMDEwMTFAZGFpaWN0LmFjLmluIiwiaWF0IjoxNjgyNTM5NTQwfQ.vr6UoUoKWdpZ6_IKDzm2ez8qIUGFf51etQC3JYZCaWo'
            },
            body:{
                "name":"dp",
                "email":"",
            }

        };
    const res = await request(baseURL).post("/editProfile").set(req.headers);
    expect(res.status).toEqual(401);
    });

    // test("Valid Token", async () => {

});
