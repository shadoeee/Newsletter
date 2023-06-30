function validateEmail(event) {
    event.preventDefault(); // Prevents the form from submitting
  
    var emailInput = document.getElementById("email");
    var errorMessage = document.getElementById("error-message");
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (!emailRegex.test(emailInput.value)) {
      errorMessage.style.display = "block"; // Shows the error message
    } else {
      errorMessage.style.display = "none"; // Hides the error message
      // Do something with the valid email address
      window.location.href = "thanks.html";
    }
  }
  