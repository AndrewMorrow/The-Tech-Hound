const { User } = require("../models");

const userData = [
    {
        user_name: "user1Yeah",
        email: "user1@gmail.com",
        user_password: "12345678",
    },
    {
        user_name: "user2Yeah",
        email: "user2@gmail.com",
        user_password: "12345678",
    },
];

const seedUsers = () => {
    console.log("user seeding");
    User.bulkCreate(userData);
};

module.exports = seedUsers;
