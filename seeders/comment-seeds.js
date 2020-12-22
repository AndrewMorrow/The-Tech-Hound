const { Comment } = require("../models");

const commentData = [
    {
        blog_title: "Title Goes Here",
        blog_body: "Things about stuff and such.",
    },
    {
        blog_title: "This is a comment title",
        blog_body: "This is a comment body about things and stuff.",
    },
];

const seedComments = () => User.bulkCreate(commentData);
module.exports = seedComments;
