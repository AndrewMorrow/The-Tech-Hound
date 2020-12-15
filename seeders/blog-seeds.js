const { Blog } = require("../models");

const blogData = [
    {
        blog_title: "Blog title goes here",
        blog_body:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, fuga? Unde expedita excepturi obcaecati sint labore iste ullam quam numquam beatae aut eaque nam est, molestiae distinctio voluptatibus, quis blanditiis?",
        blog_user: "user1Yeah",
    },
];

const seedBlogs = () => {
    Blog.bulkCreate(blogData);
};

module.exports = seedBlogs;
