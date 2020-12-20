const $updatePostBtn = $(".update-post-btn");
const $newBlogTitle = $(".new-blog-title");
const $newBlogBody = $(".new-blog-body");

const updateBlog = async function (e) {
    e.preventDefault();
    const blogId = $(this).closest(".currentBlog").attr("id");

    const newBlogDetails = {
        blog_title: $newBlogTitle.val(),
        blog_body: $newBlogBody.val(),
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
};

// // triggers when post blog button is clicked
$updatePostBtn.on("click", updateBlog);
