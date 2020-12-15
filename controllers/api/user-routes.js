const router = require("express").Router();

const { User } = require("../../models");

router.get("/", async (req, res) => {
    try {
        console.log("The / route");
        res.status(200).json({
            message: "The / route works!",
        });
    } catch {
        res.status(500).json(err);
    }
});

module.exports = router;
