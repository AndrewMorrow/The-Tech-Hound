const $userName = $("#user-name");
const $userPassword = $("#user-password");
const $loginBtn = $("#login-btn");

// sends login data to server
// const checkLogin = (credentials) => {
//     return;
// };

// gets data from fields to make ajax call
const submitCredentials = async (e) => {
    e.preventDefault();
    const credentials = {
        user_name: $userName.val().trim(),
        user_password: $userPassword.val().trim(),
    };
    // const res = await $.ajax({
    //     url: "/api/user/login",
    //     data: credentials,
    //     method: "POST",
    // });

    const response = await fetch("/api/user/login", {
        method: "POST",
        body: JSON.stringify(credentials),
        headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
        // If successful, redirect the browser to the dashboard page
        document.location.replace("/dashboard");
    } else {
        alert("Please check your credentials and try again.");
    }
};

// triggers when login button is clicked
$loginBtn.on("click", submitCredentials);
