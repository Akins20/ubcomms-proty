// Function to check registration conditions
function checkRegistrationConditions(username, email, password) {
  // Example conditions: username and password should be at least 6 characters
  if (username.length >= 6 && password.length >= 6) {
    return true;
  }
  return false;
}

// Event listener for the sign-up button
function signup_button() {
  // Get form values
  const username = document.getElementById("signup-username").value;
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;

  // Check registration conditions
  if (checkRegistrationConditions(username, email, password)) {
    alert("Welcome! Registration successful.");
  } else {
    alert("Registration failed. Please check the conditions.");
  }
}

// Sample user credentials (you should replace these with your own user data)
const sampleUser = {
  username: "demoUser",
  password: "demoPassword",
};

// Function to check sign-in credentials
function checkSignIn(username, password) {
  // Check if the provided credentials match the sample user data
  if (username === sampleUser.username && password === sampleUser.password) {
    return true;
  }
  return false;
}

// Event listener for the sign-in button
function signin_button() {
  // Get form values
  const username = document.getElementById("signin-username").value;
  const password = document.getElementById("signin-password").value;

  // Check sign-in credentials
  if (checkSignIn(username, password)) {
    alert("Welcome! Sign-in successful.");
  } else {
    alert("Sign-in failed. Please check your credentials.");
  }
}
