// Wrap the script in a DOMContentLoaded event listener to ensure it runs after the HTML document has been loaded
document.addEventListener("DOMContentLoaded", function() {

  // Select the form and feedback division elements from the HTML document
  const form = document.getElementById("registration-form");
  const feedbackDiv = document.getElementById("form-feedback");

  // Add an event listener to the form for the 'submit' event
  form.addEventListener("submit", function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Retrieve the user's input values from the form fields
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Initialize variables for validation
    let isValid = true;
    const messages = [];

    // Username validation: check if the username is at least 3 characters long
    if (username.length < 3) {
      isValid = false;
      messages.push("Username must be at least 3 characters long.");
    }

    // Email validation: check if the email includes both '@' and '.' characters
    if (!email.includes("@") || !email.includes(".")) {
      isValid = false;
      messages.push("Please enter a valid email address.");
    }

    // Password validation: check if the password is at least 8 characters long
    if (password.length < 8) {
      isValid = false;
      messages.push("Password must be at least 8 characters long.");
    }

    // Display feedback to the user based on the validation results
    feedbackDiv.style.display = "block";
    if (isValid) {
      feedbackDiv.textContent = "Registration successful!";
      feedbackDiv.style.color = "#28a745";
    } else {
      feedbackDiv.innerHTML = messages.join("<br>");
      feedbackDiv.style.color = "#dc3545";
    }
  });
});
