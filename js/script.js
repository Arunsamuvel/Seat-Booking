document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registrationForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting by default

    // Fetch input values
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const stayLoggedIn = document.getElementById("stayLoggedIn").checked;

    // Validation checks
    if (firstName === "") {
      alert("Please enter your first name.");
      return;
    }

    if (lastName === "") {
      alert("Please enter your last name.");
      return;
    }

    if (email === "") {
      alert("Please enter your email address.");
      return;
    }

    if (!isValidEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (password === "") {
      alert("Please enter a password.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match. Please re-enter your password.");
      return;
    }

    // If all validations pass, submit the form
    // You can add additional processing here if needed
    alert("Form submitted successfully!");
    form.reset(); // Reset the form after successful submission
  });

  // Function to validate email format
  function isValidEmail(email) {
    // Basic email format validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
});
