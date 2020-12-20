const $blogSelect = $(".selectBlog");

const selectOneBlog = async function (e) {
    const blog_id = $(this).attr("id");

    document.location.replace(`/comment/${blog_id}`);

    // if (blog_id) {
    //     const response = await fetch("/api/comment", {
    //         method: "POST",
    //         body: JSON.stringify(blog_id),
    //         headers: { "Content-Type": "application/json" },
    //     });
    //     if (!response.ok) {
    //         alert("Something went wrong, please try again");
    //     }
    // }
};

$blogSelect.on("click", selectOneBlog);
