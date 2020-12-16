const router = require("express").Router();

const { Blog, User } = require("../../models");

router.get("/", async (req, res) => {
    try {
        // get all blogs from db here
        const dbBlogData = await Blog.findAll({
            include: [
                {
                    model: User,
                    attributes: ["user_name"],
                },
            ],
        });
        // console.log(dbBlogData);

        const blogs = dbBlogData.map((blog) => blog.get({ plain: true }));

        console.log(blogs);

        res.render("homepage", {
            blogs,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get("/dashboard/:id", async (req, res) => {
    try {
        // get all blogs from db here
        const dbBlogData = await Blog.findAll({
            where: {
                blog_userId: 1,
            },
        });
        // console.log(dbBlogData);

        const blogs = dbBlogData.map((blog) => blog.get({ plain: true }));

        // console.log(blogs);

        res.render("dashboard", {
            blogs,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.post("/create", async (req, res) => {
    try {
        const dbBlogData = await Blog.create({
            blog_title: req.body.blog_title,
            blog_body: req.body.blog_body,
            user_name: req.body.blog_user,
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
                blog_user: req.body.blog_user,
            },
            { where: { blog_id: req.params.id } }
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
        res.status(200).json({ message: "Your blog has been deleted." });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;
