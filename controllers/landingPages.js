const router = require("express").Router();
const { User, Blog, Comment } = require(".././models");
const withAuth = require("../utils/auth");

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
            logged_in: req.session.loggedIn,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// render comment page
router.get("/comment/:id", async (req, res) => {
    try {
        // get all blogs from db here
        const dbBlogData = await Blog.findByPk(req.params.id, {
            include: [{ model: Comment }, { model: User }],
            attributes: {
                exclude: ["blog_user_id", "user_password"],
            },
        });

        // console.log(dbBlogData);

        const blogData = dbBlogData.get({ plain: true });

        console.log(blogData);

        // console.log(req.session.loggedIn);
        res.render("comment-page", {
            ...blogData,
            logged_in: req.session.loggedIn,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

//     Dashboard Landing Page
// get all blogs for a specific user
router.get("/dashboard", withAuth, async (req, res) => {
    try {
        // get all blogs from db here
        const dbUserData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ["user_password"] },
            include: [{ model: Blog }],
        });

        // console.log(dbBlogData);

        const userData = dbUserData.get({ plain: true });

        // console.log(blogs);
        // console.log(userData);
        // console.log(req.session.loggedIn);
        res.render("dashboard", {
            ...userData,
            logged_in: req.session.loggedIn,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Create Page
router.get("/createblog", (req, res) => {
    try {
        if (req.session.loggedIn) {
            res.render("createblog", {
                logged_in: req.session.loggedIn,
            });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Login route
router.get("/login", (req, res) => {
    // If the user is already logged in, redirect to the homepage
    if (req.session.loggedIn) {
        res.redirect("/");
        return;
    }
    // Otherwise, render the 'login' template
    res.render("login", {
        logged_in: req.session.loggedIn,
    });
});

// Login route
router.get("/signup", (req, res) => {
    // If the user is already logged in, redirect to the homepage
    if (req.session.loggedIn) {
        res.redirect("/");
        return;
    }
    // Otherwise, render the 'sign-up' template
    res.render("sign-up");
});

module.exports = router;
