const $currentBlog = $(".currentBlog");
const $commentBody = $("#comment-body");
const $postCommentBtn = $("#post-comment-btn");

const saveComment = async function (e) {
    e.preventDefault();
    const commentDetails = {
        comment_body: $commentBody.val().trim(),
        comment_blog_id: $($currentBlog).attr("id"),
    };

    if (commentDetails) {
        const response = await fetch("/api/comment/create", {
            method: "POST",
            body: JSON.stringify(commentDetails),
            headers: { "Content-Type": "application/json" },
        });
        if (response.ok) {
            // If successful, refreshes the page to see the changes
            location.reload();
        } else {
            alert("Something went wrong, please try again");
        }
    }
};

$postCommentBtn.on("click", saveComment);
