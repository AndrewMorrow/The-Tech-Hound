const router = require("express").Router();

const { User, Blog } = require("../../models");

// create a new user
router.post("/create", async (req, res) => {
    try {
        const dbUserData = await User.create({
            user_name: req.body.user_name,
            user_email: req.body.user_email,
            user_password: req.body.user_password,
        });
        res.status(200).json(dbUserData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});
module.exports = router;
