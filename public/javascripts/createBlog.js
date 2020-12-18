const $postBlogBtn = $("#post-blog-btn");
const $newBlogBody = $("#blog-body");
const $newBlogTitle = $("#blog-title");

const checkBlog = (blogDetails) => {
    return $.ajax({
        url: "api/blog/create",
        data: blogDetails,
        method: "POST",
    });
};

// gets data from fields to make ajax call
const submitblogDetails = async (e) => {
    e.preventDefault();
    const blogDetails = {
        blog_title: $newBlogTitle.val(),
        blog_body: $newBlogBody.val(),
    };
    // console.log(blogDetails);

    // const res = await createBlog(blogDetails);
    // console.log(res);
    // window.location.href = `/dashboard/${res.user.id}`;
};

// triggers when login button is clicked
$postBlogBtn.on("click", submitblogDetails);
