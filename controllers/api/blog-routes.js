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

        const blogs = dbBlogData.map((blog) => {
            blog.get({ plain: true });
        });

        // console.log(blogs);

        res.render("homepage", {
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
            blog_user: req.body.blog_user,
        });
        res.status(200).json(dbBlogData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;
