const request = require("supertest");
const baseURL = "http://localhost:3000";
const adminRequestHandler = require('../controllers/adminRequestHandler');
const { response } = require("express");


describe("GET /admin/allfaculties", () => {
    test("if admin", async () => {
        const response = await request(baseURL).get("/admin/allfaculties")
        .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJhZG1pbkBnbWFpbC5jb20iLCJpYXQiOjE2ODI1MTY0NzZ9.Cv6L4qS_e0_EpFgCr_nE8gSw9sTUtOt2hHWRjR21_G0');
        expect(response.status).toEqual(200);
    });

    test ("if not admin", async () => {
        const response = await request(baseURL).get("/admin/allfaculties")
        .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJkcDEyMzRhYmNAZ21haWwuY29tIiwiaWF0IjoxNjgyNTE3ODU5fQ.UhNTlpcB8gpHJJEzNuqQPaT771OAlgMgpwXv7h1QjjA');
        expect(response.status).toEqual(401);
    });
});

describe("POST /admin/approveFaculty", () => {
    test("if admin but id not found (student ID)", async () => {
        const response = await request(baseURL).post("/admin/approvefaculty")
        .send({
            email: "dp1234abc@gmail.com",
        })
        .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJhZG1pbkBnbWFpbC5jb20iLCJpYXQiOjE2ODI1MTkxMTN9.JSdN7iOCpoEdxCbi1IdEr1wtrHlqhcg32NMatobEIDE');
        expect(response.status).toEqual(404);
    });

    test("if admin but id not found in database", async () => {
        const response = await request(baseURL).post("/admin/approvefaculty")
        .send({
            email: "dp1234abc@gil.com",
        })
        .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJhZG1pbkBnbWFpbC5jb20iLCJpYXQiOjE2ODI1MTkxMTN9.JSdN7iOCpoEdxCbi1IdEr1wtrHlqhcg32NMatobEIDE');
        expect(response.status).toEqual(404);
    });

    test("if admin and faculty", async () => {
        const response = await request(baseURL).post("/admin/approvefaculty")
        .send({
            email: "tf3@yahoo.com",
        })
        .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJhZG1pbkBnbWFpbC5jb20iLCJpYXQiOjE2ODI1MTkxMTN9.JSdN7iOCpoEdxCbi1IdEr1wtrHlqhcg32NMatobEIDE');
        expect(response.status).toEqual(200);
    });

    test("if not admin and id not found (student ID)", async () => {
        const response = await request(baseURL).post("/admin/approvefaculty")
        .send({
            email: "dp1234abc@gmail.com",
        })
        .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJkcDEyMzRhYmNAZ21haWwuY29tIiwiaWF0IjoxNjgyNTM1MzE3fQ.1l0zKkZrJlOMNrezzLqC6rKVLzvGkIOaH5uh4sRumFo');
        expect(response.status).toEqual(401);
    });

    test("if not admin and id not found in database", async () => {
        const response = await request(baseURL).post("/admin/approvefaculty")
        .send({
            email: "dp1234abc@gil.com",
        })
        .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJkcDEyMzRhYmNAZ21haWwuY29tIiwiaWF0IjoxNjgyNTM1MzE3fQ.1l0zKkZrJlOMNrezzLqC6rKVLzvGkIOaH5uh4sRumFo');
        expect(response.status).toEqual(401);
    });

    test("if not admin and faculty", async () => {
        const response = await request(baseURL).post("/admin/approvefaculty")
        .send({
            email: "pqr@gmail.com",
        })
        .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJkcDEyMzRhYmNAZ21haWwuY29tIiwiaWF0IjoxNjgyNTM1MzE3fQ.1l0zKkZrJlOMNrezzLqC6rKVLzvGkIOaH5uh4sRumFo');
        expect(response.status).toEqual(401);
    });

});

describe("POST /admin/deleteFaculty", () => {
    test("if admin but id not found", async () => {
        const response = await request(baseURL).post("/admin/deleteFaculty")
        .send({
            email: "ab@gmail.com"   
        })
        .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJhZG1pbkBnbWFpbC5jb20iLCJpYXQiOjE2ODI1MTY0NzZ9.Cv6L4qS_e0_EpFgCr_nE8gSw9sTUtOt2hHWRjR21_G0');
        expect(response.status).toEqual(404);
    });

    test("if admin and faculty", async () => {
        const response = await request(baseURL).post("/admin/deleteFaculty")
        .send({
            email: "dp1234567@gmail.com"
        })
        .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJhZG1pbkBnbWFpbC5jb20iLCJpYXQiOjE2ODI1MTY0NzZ9.Cv6L4qS_e0_EpFgCr_nE8gSw9sTUtOt2hHWRjR21_G0');
        expect(response.status).toEqual(200);
    });


});

describe("POST /admin/addUniversity", () => {
    test("if admin and new", async () => {
        const response = await request(baseURL).post("/admin/addUniversity")
        .send({
            name: "Unit Test University 4",
            Image: "",
        })
        .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJhZG1pbkBnbWFpbC5jb20iLCJpYXQiOjE2ODI1MTY0NzZ9.Cv6L4qS_e0_EpFgCr_nE8gSw9sTUtOt2hHWRjR21_G0');
        expect(response.status).toEqual(200);
    });

    test("if admin and already exist", async () => {
        const response = await request(baseURL).post("/admin/addUniversity")
        .send({
            name: "University of Toronto",
            Image: "",
        })
        .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJhZG1pbkBnbWFpbC5jb20iLCJpYXQiOjE2ODI1MTY0NzZ9.Cv6L4qS_e0_EpFgCr_nE8gSw9sTUtOt2hHWRjR21_G0');
        expect(response.status).toEqual(302);
    });

    test("if not admin and new", async () => {
        const response = await request(baseURL).post("/admin/addUniversity")
        .send({
            name: "University of To4324344tr",
            Image: "",
        })
        .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJkcDEyMzRhYmNAZ21haWwuY29tIiwiaWF0IjoxNjgyNTM1MzE3fQ.1l0zKkZrJlOMNrezzLqC6rKVLzvGkIOaH5uh4sRumFo');
        expect(response.status).toEqual(401);
    });

    test("if not admin and already exist", async () => {
        const response = await request(baseURL).post("/admin/addUniversity")
        .send({
            name: "University of Toronto",
            Image: "",
        })
        .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJkcDEyMzRhYmNAZ21haWwuY29tIiwiaWF0IjoxNjgyNTM1MzE3fQ.1l0zKkZrJlOMNrezzLqC6rKVLzvGkIOaH5uh4sRumFo');
        expect(response.status).toEqual(401);
    });
    
});


describe("GET /admin/isadmin", () => {
    test("if admin" , async () => {
        const response = await request(baseURL).get("/admin/isadmin")
        .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJhZG1pbkBnbWFpbC5jb20iLCJpYXQiOjE2ODI1MTY0NzZ9.Cv6L4qS_e0_EpFgCr_nE8gSw9sTUtOt2hHWRjR21_G0');
        expect(response.status).toEqual(200);
    })

    test("if not admin" , async () => {
        const response = await request(baseURL).get("/admin/isadmin")
        .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJkcDEyMzRhYmNAZ21haWwuY29tIiwiaWF0IjoxNjgyNTM1MzE3fQ.1l0zKkZrJlOMNrezzLqC6rKVLzvGkIOaH5uh4sRumFo');
        expect(response.status).toEqual(401);
    });

});