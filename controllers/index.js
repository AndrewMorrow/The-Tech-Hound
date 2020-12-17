const router = require("express").Router();
const apiRoutes = require("./api");
const landingPages = require("./landingPages.js");

router.use("/", landingPages);
router.use("/api", apiRoutes);

/* GET home page. */
router.get("/", function (req, res, next) {
    res.render("index", { title: "Express" });
});

module.exports = router;
