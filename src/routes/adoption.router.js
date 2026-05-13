import { Router } from 'express';

const router = Router();

let adoptions = [];

router.get("/", (req, res) => {
    res.json({
        status: "success",
        payload: adoptions,
    });
});

router.post("/", (req, res) => {
    const { user, pet } = req.body;

    if(!user || !pet) {
        return res.status(400).json({
            status: "error",
            message: "user y pet son requeridos"
        });
    }

const newAdoption = {
    id: adoptions.length + 1,
    user,
    pet
};

adoptions.push(newAdoption);

res.status(201).json({
    status: "success",
    payload: newAdoption
});

});

export default router;