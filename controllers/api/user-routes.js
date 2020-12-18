const router = require("express").Router();
const bcrypt = require("bcrypt");
const { User } = require("../../models");

// create a new user
router.post("/create", async (req, res) => {
    try {
        // console.log(req.body);
        const dbUserData = await User.create(req.body);
        // Set up sessions with a 'loggedIn' variable set to `true`
        req.session.save(() => {
            req.session.user_id = dbUserData.id;
            req.session.loggedIn = true;
            res.status(200).json(dbUserData);
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Login
router.post("/login", async (req, res) => {
    try {
        const dbUserData = await User.findOne({
            where: {
                user_name: req.body.user_name,
            },
        });

        // console.log(dbUserData);
        if (!dbUserData) {
            res.status(400).json({
                message: "Please check your credentials and try again!",
            });
            return;
        }

        const validPassword = await dbUserData.checkPassword(
            req.body.user_password
        );

        if (!validPassword) {
            res.status(400).json({
                message: "Please check your credentials and try again!",
            });
            return;
        }

        // Once the user successfully logs in, set up the sessions variable 'loggedIn'
        req.session.save(() => {
            req.session.user_id = dbUserData.id;
            req.session.loggedIn = true;

            res.status(200).json({
                user: dbUserData,
                message: "You are now logged in!",
            });
        });
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
});

// Logout
router.post("/logout", (req, res) => {
    // When the user logs out, destroy the session
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

// PUT update a user
router.put("/update/:id", async (req, res) => {
    try {
        const userData = await User.update(req.body, {
            where: {
                id: req.params.id,
            },
            individualHooks: true,
        });
        if (!userData[0]) {
            res.status(404).json({ message: "No user with this id!" });
            return;
        }
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
