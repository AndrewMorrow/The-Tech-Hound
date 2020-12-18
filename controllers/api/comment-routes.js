const router = require("express").Router();
const { Blog, User, Comment } = require("../../models");

// create a new comment
router.post("/create", async (req, res) => {
    try {
        const dbCommentData = await Comment.create({
            comment_body: req.body.comment_body,
            comment_blog_id: req.body.comment_blog_id,
            comment_user_id: req.session.user_id,
        });
        res.status(200).json(dbCommentData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;
