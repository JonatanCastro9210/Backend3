import { faker } from "@faker-js/faker";

export const generateMockPets = (quantity) => {

    const pets = [];

    for (let i = 0; i < quantity; i++) {

        const pet = {
            _id: faker.database.mongodbObjectId(),
            name: faker.animal.dog(),
            age: faker.number.int({ min: 1, max: 15 }),
            type: "dog"
        };

        pets.push(pet);
    }

    return pets;
};