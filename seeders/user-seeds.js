const { User } = require("../models");

const userData = [
    {
        user_name: "user1Yeah",
        user_email: "user1@gmail.com",
        user_password: "12345678",
    },
    {
        user_name: "user2Yeah",
        user_email: "user2@gmail.com",
        user_password: "12345678",
    },
];

const seedUsers = () => User.bulkCreate(userData);
module.exports = seedUsers;
