document.getElementById("registerForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let valid = true;

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    // Clear errors
    document.querySelectorAll(".error").forEach(el => el.innerText = "");

    // Name validation
    if (name === "") {
        document.getElementById("nameError").innerText = "Name is required";
        valid = false;
    }

    // Email validation
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email === "") {
        document.getElementById("emailError").innerText = "Email is required";
        valid = false;
    } else if (!email.match(emailPattern)) {
        document.getElementById("emailError").innerText = "Invalid email format";
        valid = false;
    }

    // Password validation
    if (password === "") {
        document.getElementById("passwordError").innerText = "Password is required";
        valid = false;
    }

    // Confirm password
    if (confirmPassword === "") {
        document.getElementById("confirmError").innerText = "Confirm your password";
        valid = false;
    } else if (password !== confirmPassword) {
        document.getElementById("confirmError").innerText = "Passwords do not match";
        valid = false;
    }

    // Success
    if (valid) {
        alert("Registration Successful!");
        document.getElementById("registerForm").reset();
    }
});
