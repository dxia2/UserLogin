// User Login

//define varibles
let loginButton = document.getElementById("loginButton");
let usernameInput = document.getElementById("usernameInput");
let passwordInput = document.getElementById("passwordInput");

let correctUsername = "admin";
let correctPassword = "1234";

//event listener
loginButton.addEventListener("click", attemptLogin);

function attemptLogin() {
    // check if username and password is correct
    if (usernameInput.value === correctUsername && passwordInput.value === correctPassword) {
        //username and password is correct
        alert("Login Successful");
    } else if (usernameInput.value != correctUsername) {
        //username is incorrect, password doesn't matter
        alert("Invalid Username");
    } else {
        //username correct and password incorrect
        alert("Invalid Password");
    }
}