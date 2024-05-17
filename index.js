function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username === "username" && password === "password") {
        alert("Login successful!");
        window.location.href = './page1/page1.html';
        return false;
    } else {
        alert("Invalid username or password. Please try again.");
        return false;
    }
}
