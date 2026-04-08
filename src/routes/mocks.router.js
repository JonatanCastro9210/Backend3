import { Router } from "express";
import { generateMockUsers } from "../mocks/users.mock.js";
import * as petsMock from "../mocks/pets.mock.js";

const { generateMockPets } = petsMock;

const router = Router();

router.get("/mockingusers", (req, res) => {

    const mockUsers = generateMockUsers(50);

    res.json({
        status: 'success',
        payload: mockUsers
    });
});

router.post("/generateData", async (req, res) => {
    const { users, pets } = req.body;
    try {
        const mockUsers = generateMockUsers(users);
        const mockPets = generateMockPets(pets);
        res.json({
            status: 'success',
            message: "Datos generados correctamente",
            users: mockUsers.length,
            pets: mockPets.length
        });
    } catch (error) {
        res.status(500).json({
            status:"error",
            message: error.message
        });
    }
});

router.get("/mockingpets", (req, res) => {
    const mockPets = generateMockPets(20);

    res.json({
        status: 'success',
        payload: mockPets
    });
});

export default router;



