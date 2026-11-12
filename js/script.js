const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const role = document.getElementById("role").value;

    const message = document.getElementById("loginMessage");

    message.textContent = "";

    if (!email || !password || !role) {
        message.textContent = "Please fill in all fields.";
        return;
    }

    // Save login details
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userRole", role);

    // Redirect according to selected role
    const selectedRole = role.toLowerCase();

    if (selectedRole === "faculty") {

        window.location.href = "faculty.html";

    } else if (selectedRole === "administrator") {

        window.location.href = "admin.html";

    } else {

        window.location.href = "dashboard.html";

    }

});
