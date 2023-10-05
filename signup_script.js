function togglePassword() {
    var passwordField = document.getElementById("confirmPassword");
    if (passwordField.type === "password") {
        passwordField.type = "text";
    } else {
        passwordField.type = "password";
    }
}

function login() {
    var loginBtn = document.querySelector(".login-btn");
    loginBtn.disabled = true;

    //  loader element
    var loader = document.createElement("div");
    loader.className = "loader";
    document.body.appendChild(loader);

    // delay
    setTimeout(function() {
        // Remove the loader
        document.body.removeChild(loader);

        // Enable login button
        loginBtn.disabled = false;
        
        // login logic here
        const email = document.getElementById('email');
        const password = document.getElementById('password');
        const confirmPassword= document.getElementById('confirmPassword');
        
        // Validate email
        if (!validateEmail(email.value)) {
            alert('Please enter a valid email address.');
            return;
        }

        // Validate password
        if (!validatePassword(password.value)) {
            alert('Please enter a valid password.');
            return;
        }
        if (password.value != confirmPassword.value) {
            alert('Password not matched\nPlease enter same password');
            return;
        }

        alert("SignUp Successful");
        window.location.href = 'index.html';

    }, 1000); // delay of 1 second
}

function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}

function validatePassword(password) {
    return password.length >= 8;
}
