const $blogCard = $(".card");
const $deletePostBtn = $(".delete-post-btn");
const $updatePostBtn = $(".update-post-btn");

const updatePostPage = async function (e) {
    e.preventDefault();
    const blogId = $(this).closest(".card").attr("id");
    // console.log(blogId);
    document.location.replace(`/update/${blogId}`);
};

// deletes post from db
const deletePost = async function (e) {
    const blogId = $(this).closest(".card").attr("id");
    if (blogId) {
        const response = await fetch(`/api/blog/delete/${blogId}`, {
            method: "DELETE",
        });
        if (response.ok) {
            // If successful, reload the page to reflect changes
            location.reload();
        } else {
            alert("Something went wrong, please try again");
        }
    }
};

// triggers when "Delete Post" button is clicked
$deletePostBtn.on("click", deletePost);
$updatePostBtn.on("click", updatePostPage);
