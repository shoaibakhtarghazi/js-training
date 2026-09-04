let username = document.getElementById("username");
let loginBtn = document.getElementById("loginBtn");
let message = document.getElementById("message");

function validateLogin() {

    let name = username.value;

    if (name === "") {
        message.textContent = "Username is required";
    }
    else if (name.length < 4) {
        message.textContent = "Username is too short";
    }
    else {
        message.textContent = "Welcome, " + name + "!";
    }
}

loginBtn.addEventListener("click", validateLogin);