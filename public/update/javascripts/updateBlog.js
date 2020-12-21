const $updatePostBtn = $(".update-post-btn");
const $newBlogTitle = $(".new-blog-title");
const $newBlogBody = $(".new-blog-body");

const updateBlog = async function (e) {
    e.preventDefault();
    const blogId = $(this).closest(".currentBlog").attr("id");
    const titleInput = $newBlogTitle.val().trim();
    const bodyInput = $newBlogBody.val().trim();

    if (
        titleInput.length >= 10 &&
        titleInput.length < 80 &&
        bodyInput.length >= 10 &&
        bodyInput.length < 400
    ) {
        const newBlogDetails = {
            blog_title: titleInput,
            blog_body: bodyInput,
        };

        if (newBlogDetails) {
            const response = await fetch(`/api/blog/update/${blogId}`, {
                method: "PUT",
                body: JSON.stringify(newBlogDetails),
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
$updatePostBtn.on("click", updateBlog);
