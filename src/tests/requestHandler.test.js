const request = require("supertest");
const baseURL = "http://localhost:3000";

// ---------------------------- 1 ------------------------------------


describe("GET /verify-email", () => {
    test("if user is verified", async () => {
        const res = await request(baseURL).get("/verify-email")
        .set('Authorization','Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIyMDIwMDEwMTFAZGFpaWN0LmFjLmluIiwiaWF0IjoxNjgyNTM5NTQwfQ.vr6UoUoKWdpZ6_IKDzm2ez8qIUGFf51etQC3JYZCaWo')
        expect(res.status).toEqual(200);
    });

    test("if user is not verified", async () => {
        const res = await request(baseURL).get("/verify-email")
        .set('Authorization','Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIyMDIwMDEwMTFAZGFpaWN0LmFjLmluIiwiaWF0IjoxNjgyNTM5NTQwfQ.vr6UoUoKWdpZ6_IKDzm2ez8qIUGFf51etQC3JYZCaWo')
        expect(res.status).toEqual(200);
    });

    test("token invalid", async () => {
        const res = await request(baseURL).get("/verify-email")
        .set('Authorization', 'Bearer iJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIyMDIwMDEwMTFAZGFpaWN0LmFjLmluIiwiaWF0IjoxNjgyNTM5NTQwfQ.vr6UoUoKWdpZ6_IKDzm2ez8qIUGFf51etQC3JYZCa3535')
        expect(res.status).toEqual(401);
    });
});


// ---------------------------- 1 ------------------------------------


describe("POST /resetpassword", () => {

    test("invalid token", async () => {
        const req = {
            headers:{
                'Content-Type': 'application/json',
                'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQioiJkcDEyMzRhYmNAZ21haWwuY29tIiwiaWF0IjoxNjgyNTQ2MDAyfQ.jG8-cAjA3HCHadGrIGzzqGwdMKbswuJ_PEFvE_RobDs",
            },
            body:{
                "newpassword":"dp",
            }
        };
        const res = await request(baseURL).post("/resetpassword").send(req.body).set(req.headers);
        expect(res.status).toEqual(401);
    });

    test("valid token but new password not provided",  async () => {
        const req  = {
            headers:{
                'Content-Type': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJkZXYxMjM0NTZAZ21haWwuY29tIiwiaWF0IjoxNjgyNTQ5MDUyfQ.cD8dUKvIhq4YHA739i-A8QBSrfve7OOb0EqzDor2KEc'
            },
            body:{
                newpassword: null,
            }
        };
        const res =  await request(baseURL).post("/resetpassword").
                set(req.headers)
                .send(req.body);

        expect(res.status).toEqual(400);
    });

    test("password reset successful", async () => {
        const req = {
            headers:{
                'Content-Type': 'application/json',
                'Authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJkZXYxMjM0NTZAZ21haWwuY29tIiwiaWF0IjoxNjgyNTQ5MDUyfQ.cD8dUKvIhq4YHA739i-A8QBSrfve7OOb0EqzDor2KEc'
            },
            body:{
                newpassword:"123456",
            }
        };
        const res = await request(baseURL).post("/resetpassword").send(req.body).set(req.headers)
        expect(res.status).toEqual(200);
    });
});

// ---------------------------- 1 ------------------------------------


describe("POST /getFaculty", () => {
    test("valid email Id", async () => {
        const req = {
            body: {
                email: "pqr@gmail.com"
            }
        };
        const res = await request(baseURL).post("/getFaculty").send(req.body);
        expect(res.status).toEqual(200);
    });

    test("invalid email Id (student Id)", async () => {
        const req = {
            body: {
                email: "dp1234@gmail.com"
            }
        };
        const res = await request(baseURL).post("/getFaculty").send(req.body);
        expect(res.status).toEqual(404);
    });

    test("invalid email Id (invalid email)", async () => {
        const req = {
            body: {
                email: "dp1234gml.com"
            }
        };
        const res = await request(baseURL).post("/getFaculty").send(req.body);
        expect(res.status).toEqual(404);
    });
});

    
// ---------------------------- 1 ------------------------------------



describe("GET /deleteProfile", () => {
    test("Invalid Token", async () => {
            const req = {
                headers:{
                    Authorization:'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIyMDiwMDEwMTFAZGFpaWN0LmFjLmluIiwiaWF0IjoxNjgyNTM5NTQwfQ.vr6UoUoKWdpZ6_IKDzm2ez8qIUGFf51etQC3JYZCaWo'
                },

            };
        const res = await request(baseURL).get("/deleteProfile").set(req.headers);
        expect(res.status).toEqual(401);
    });

    test("Valid Token", async () => {
        const req = {
            headers:{
                Authorization:'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJqYXkzMmVAZ21haWwuY29tIiwiaWF0IjoxNjgyNTQ2ODY1fQ.lJ0X6395s9lQeZcB0lgVUSxFosfrKBAnHBILJq0ZcP4'
            },

        };
    const res = await request(baseURL).get("/deleteProfile").set(req.headers);
    expect(res.status).toEqual(200);
    });
});

// ---------------------------- 1 ------------------------------------


describe("POST /editProfile", () => {
    test("Invalid Token", async () => {
        const req = {
            headers:{
                Authorization:'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIyMDiwMDEwMTFAZGFpaWN0LmFjLmluIiwiaWF0IjoxNjgyNTM5NTQwfQ.vr6UoUoKWdpZ6_IKDzm2ez8qIUGFf51etQC3JYZCaWo'
            },
            body:{
                
            }

        };
    const res = await request(baseURL).post("/editProfile").set(req.headers);
    expect(res.status).toEqual(401);
    });

    test("valid Token (Student) ", async () => {
        const req = {
            headers:{
                Authorization:'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJkcDEyMzRhYmNAZ21haWwuY29tIiwiaWF0IjoxNjgyNTUxMzY3fQ.PbDrqNmdmXyC9ee_HszgBZTnLkTiG_yFM9IIXK3X8Jo'
            },
            body:{
            name: "Unit Testing",
			password: "test",
			mobile_number: "1234567890",
			university: "DAIICT",
			role: "0",
			Image: "",
                
            }

        };
    const res = await request(baseURL).post("/editProfile").send(req.body).set(req.headers);
    expect(res.status).toEqual(200);
    });

    test("valid Token (faculty) ", async () => {
        const req = {
            headers:{
                Authorization:'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJydzk2cG5iaGE5bTNmNUB5YWhvby5jb20iLCJpYXQiOjE2ODI1NTE2MjB9.UvtB5Zg2mzQXXcu8n6fUmfxRUek2R0zUF5Entmnk8Ks'
            },
            body:{
                name: "Unit Testing",
                password: "password",
                mobile_number: "1234567890",
                university: "DAIICT",
                role: "1",
                specialization: "temp",
                experience: "None",
                projects: "None",
                Awards_and_Honors: "None",
                Industrial_experience: "None",
                Publications: "None",
                Image: "None",
                
            }

        };
    const res = await request(baseURL).post("/editProfile").send(req.body).set(req.headers);
    expect(res.status).toEqual(200);
    });

    // test("Valid Token", async () => {

});

// ---------------------------- 1 ------------------------------------



describe("GET /getProfile", () => {
    test("Invalid Token", async () => {
        const res = await request(baseURL).post("/profile")
        .set('Authorization','Bearer iJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIyMDIwMDEwMTFAZGFpaWN0LmFjLmluIiwiaWF0IjoxNjgyNTM5NTQwfQ.vr6UoUoKWdpZ6_IKDzm2ez8qIUGFf51etQC3JYZCa3535')
        expect(res.status).toEqual(401);
    });

    test("Valid token (Student)", async () => {
        const res = await request(baseURL).post("/profile")
        .set('Authorization','Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJkcDEyMzRhYmNAZ21haWwuY29tIiwiaWF0IjoxNjgyNTUxMzY3fQ.PbDrqNmdmXyC9ee_HszgBZTnLkTiG_yFM9IIXK3X8Jo')
        expect(res.status).toEqual(200);
    });

    test("Valid Token (Faculty)", async () => {
        const res = await request(baseURL).post("/profile")
        .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJydzk2cG5iaGE5bTNmNUB5YWhvby5jb20iLCJpYXQiOjE2ODI1NTE2MjB9.UvtB5Zg2mzQXXcu8n6fUmfxRUek2R0zUF5Entmnk8Ks')
        expect(res.status).toEqual(200);
    });
});

// ---------------------------- 1 ------------------------------------


describe("POST /filter/faculties", () => {
    test("should return status 404 for University having no faculties", async () => {
        const req = {
            body: {
               university: "SVNIT"
            }
        };
        const res = await request(baseURL).post("/filter/faculties").send(req.body);
        expect(res.status).toEqual(404);
    });

    test("should return status 200 for University having faculties", async () => {
        const req = {
            body: {
               university: "DAIICT"
            }
        };
        const res = await request(baseURL).post("/filter/faculties").send(req.body);
        expect(res.status).toEqual(200);    });
});


// --------------------------------1--------------------------------------

describe("POST /sendresetlink", () => {
    test("user not found should return 404", async () => {
        const req = {
            body: {
               email: "abc@gil.com"
            }
        };
        const res = await request(baseURL).post("/sendresetlink").send(req.body);
        expect(res.status).toEqual(404);
    });

    test("should return status 200 for validEmail", async () => {
        const req = {
            body: {
               email: "jkuvadiya17@gmail.com"
            }
        };
        const res = await request(baseURL).post("/sendresetlink").send(req.body);
        expect(res.status).toEqual(200);   
    } , 10000 );
});

// --------------------------------1--------------------------------------

describe("GET /getUniversities", () => {
    test("Should return status code 200 ", async () => {
        const res = await request(baseURL).get("/getUniversities")
    
        expect(res.status).toEqual(200);
    });


});
// /filter/faculties

