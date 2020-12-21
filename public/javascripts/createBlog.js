const $postBlogBtn = $("#post-blog-btn");
const $newBlogBody = $("#blog-body");
const $newBlogTitle = $("#blog-title");

const submitblogDetails = async (e) => {
    e.preventDefault();
    const titleInput = $newBlogTitle.val().trim();
    const bodyInput = $newBlogBody.val().trim();
    if (
        titleInput.length >= 10 &&
        titleInput.length < 80 &&
        bodyInput.length >= 10 &&
        bodyInput.length < 400
    ) {
        const blogDetails = {
            blog_title: titleInput,
            blog_body: bodyInput,
        };

        if (blogDetails.blog_title && blogDetails.blog_body) {
            const response = await fetch("/api/blog/create", {
                method: "POST",
                body: JSON.stringify(blogDetails),
                headers: { "Content-Type": "application/json" },
            });
            if (response.ok) {
                // If successful, redirect the browser to the dashboard page
                document.location.replace("/dashboard");
            } else {
                alert("Something went wrong, please try again");
            }
        }
    } else {
        alert("Please check requirements for each input.");
    }
};

// // triggers when post blog button is clicked
$postBlogBtn.on("click", submitblogDetails);
