const $postBlogBtn = $("#post-blog-btn");
const $newBlogBody = $("#blog-body");
const $newBlogTitle = $("#blog-title");

const createCredentials = async (e) => {
    const blogDetails = {
        blog_title: $newBlogTitle.val(),
        blog_body: $newBlogBody.val(),
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
};

// triggers when the signup button is clicked
$postBlogBtn.on("click", createCredentials);

// triggers when login button is clicked
$postBlogBtn.on("click", submitblogDetails);
