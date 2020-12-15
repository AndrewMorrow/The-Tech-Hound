const router = require("express").Router();

const { User } = require("../../models");

router.get("/", async (req, res) => {
    try {
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
