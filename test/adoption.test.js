import request from "supertest";
import express from "express";
import adoptionRouter from "../src/routes/adoption.router.js";

const app = express();

app.use(express.json());
app.use("/api/adoptions", adoptionRouter);  

describe("Testing Adoption Router", () => {

    test("GET /api/adoptions debe devolver status success", async () => {

        const response = await request(app).get("/api/adoptions");  
        
        expect(response.statusCode).toBe(200);
        expect(response.body.status).toBe("success");  
        expect(Array.isArray(response.body.payload)).toBe(true); 
    });

    test("POST /api/adoptions debe crear una nueva adopción", async () => {

        const adoptionMock = {
            user: "Jonatan",
            pet: "Simon"
        };

        const response = await request(app) 
        .post("/api/adoptions")
        .send(adoptionMock);

        expect(response.statusCode).toBe(201);
        expect(response.body.status).toBe("success");
        expect(response.body.payload.user).toBe(adoptionMock.user);
        expect(response.body.payload.pet).toBe(adoptionMock.pet);

    });

    test("POST /api/adoptions debe fallar si faltan datos", async () => {

        const response = await request(app)
        .post("/api/adoptions")
        .send({})

        expect(response.statusCode).toBe(400);
        expect(response.body.status).toBe("error");
    });
});
