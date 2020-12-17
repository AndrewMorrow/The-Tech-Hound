const { Blog } = require("../models");

const blogData = [
    {
        blog_title: "Blog title goes here",
        blog_body:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, fuga? Unde expedita excepturi obcaecati sint labore iste ullam quam numquam beatae aut eaque nam est, molestiae distinctio voluptatibus, quis blanditiis?",
        blog_user_id: "148bef15-b1ce-424b-9dc5-e6f0a3b1e50a",
    },
    {
        blog_title: "Blog title goes here",
        blog_body:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, fuga? Unde expedita excepturi obcaecati sint labore iste ullam quam numquam beatae aut eaque nam est, molestiae distinctio voluptatibus, quis blanditiis?",
        blog_user_id: "148bef15-b1ce-424b-9dc5-e6f0a3b1e50a",
    },
];

const seedBlogs = () => Blog.bulkCreate(blogData);

module.exports = seedBlogs;
