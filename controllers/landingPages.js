const router = require("express").Router();
const { User, Blog } = require(".././models");

//           Home Page
// Get all blogs from the database
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

        // console.log(blogs);

        res.render("homepage", {
            blogs,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

//     Dashboard Landing Page
// get all blogs for a specific user
router.get("/dashboard/:id", async (req, res) => {
    try {
        // get all blogs from db here
        const dbBlogData = await Blog.findAll({
            where: { blog_user_id: req.params.id },
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

// Login route
router.get("/login", (req, res) => {
    // If the user is already logged in, redirect to the homepage
    // if (req.session.loggedIn) {
    //     res.redirect("/");
    //     return;
    // }
    // Otherwise, render the 'login' template
    res.render("login");
});

module.exports = router;
