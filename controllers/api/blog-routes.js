const router = require("express").Router();

const { Blog, User } = require("../../models");

// create a new blog post
router.post("/create", async (req, res) => {
    try {
        const dbBlogData = await Blog.create({
            blog_title: req.body.blog_title,
            blog_body: req.body.blog_body,
            blog_user_id: req.body.blog_user_id,
        });
        res.status(200).json(dbBlogData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// update a blog post by id
router.put("/update/:id", async (req, res) => {
    try {
        const newBlogData = await Blog.update(
            {
                blog_title: req.body.blog_title,
                blog_body: req.body.blog_body,
            },
            { where: { id: req.params.id } }
        );
        res.status(200).json(newBlogData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.delete("/delete/:id", async (req, res) => {
    try {
        const delBlogData = await Blog.destroy({
            where: { id: req.params.id },
        });
        res.status(200).json(delBlogData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;
