const router = require("express").Router();

const { User } = require("../../models");

// create a new user
router.post("/create", async (req, res) => {
    try {
        const dbUserData = await User.create({
            user_name: req.body.user_name,
            user_password: req.body.user_password,
        });
        // Set up sessions with a 'loggedIn' variable set to `true`
        req.session.save(() => {
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
                user_name: req.body.username,
            },
        });

        if (!dbUserData) {
            res.status(400).json({
                message: "Incorrect username or password. Please try again!",
            });
            return;
        }

        const validPassword = await dbUserData.checkPassword(req.body.password);

        if (!validPassword) {
            res.status(400).json({
                message: "Incorrect email or password. Please try again!",
            });
            return;
        }

        // Once the user successfully logs in, set up the sessions variable 'loggedIn'
        req.session.save(() => {
            req.session.loggedIn = true;

            res.status(200).json({
                user: dbUserData,
                message: "You are now logged in!",
            });
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
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
module.exports = router;
