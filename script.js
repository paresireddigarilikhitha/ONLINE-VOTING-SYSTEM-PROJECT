let users = JSON.parse(localStorage.getItem('users')) || []; // Load users from localStorage or initialize empty array

// Login
document.getElementById("loginForm")?.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
        localStorage.setItem("loggedInUser", username);

        // Initialize vote history for the new user if not present
        let userVotesList = JSON.parse(localStorage.getItem("userVotes")) || {};
        if (!userVotesList[username]) {
            userVotesList[username] = []; // Initialize empty vote list for new user
            localStorage.setItem("userVotes", JSON.stringify(userVotesList));
        }

        alert("Login successful! Welcome, " + username);
        window.location.href = "dashboard.html"; // Redirect to the dashboard
    } else {
        alert("Invalid username or password!");
    }
});

// Registration
document.getElementById("registerForm")?.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const newUser = { username: username, password: password };
    users.push(newUser); // Add new user to users array
    localStorage.setItem('users', JSON.stringify(users)); // Save users to localStorage

    alert("Registration successful! You can now log in.");
    window.location.href = "index.html"; // Redirect to the login page
});
