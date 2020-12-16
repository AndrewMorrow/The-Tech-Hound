const router = require("express").Router();

const { User, Blog } = require("../../models");

router.get("/", async (req, res) => {
    try {
        const dbUserData = await User.findAll({
            include: [
                {
                    model: Blog,
                    attributes: ["blog_title"],
                },
            ],
        });
        // console.log(dbBlogData);

        const users = dbUserData.map((blog) => blog.get({ plain: true }));

        console.log(users);

        console.log("The / route");
        res.status(200).render("homepage");
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post("/create", async (req, res) => {
    // create a user
    try {
        const dbUserData = await User.create({
            user_name: req.body.name,
            user_email: req.body.email,
            user_password: req.body.password,
        });
        res.status(200).json(dbUserData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});
module.exports = router;
