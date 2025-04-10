// Purpose: Account validation for creating new accounts with Lootbox
console.log("JS file is connected!");

document.addEventListener("DOMContentLoaded", function () {

  //Finds the form in our createaccount.html page
  const form = document.getElementById("createAccountsForm");

  // Check if form exists
  if (!form) {
    console.error("Form not found! Check the ID in your HTML.");
    return;
  }

  //Checks each field from the form to make sure they're valid inputs
  const first_name = document.getElementById("first_name");
  const last_name = document.getElementById("last_name");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirm_password");

  const fields = [first_name, last_name, email, password, confirmPassword];

  //Doesn't allow the form to be submitted empty
  form.addEventListener("submit", function (e) {
    console.log("Submit handler triggered");
    e.preventDefault();

    let isValid = true;
    clearErrors();

    // Check for empty fields
    fields.forEach((field) => {
      if (field.value.trim() === "") {
        showError(field, "This field is required");
        isValid = false;
      }
    });

    // Email validation
    const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.value && !emailPattern.test(email.value)) {
      showError(email, "Enter a valid email address");
      isValid = false;
    }

    // Password length
    if (password.value && password.value.length < 8) {
      showError(password, "Password must be at least 8 characters");
      isValid = false;
    }

    // Password match
    if (
      password.value &&
      confirmPassword.value &&
      password.value !== confirmPassword.value
    ) {
      showError(confirmPassword, "Passwords do not match");
      isValid = false;
    }

    // Submit if valid and redirect to login page after 5 secs
    if (isValid) {
      form.innerHTML = `
    <h3 style="text-align: center; margin-bottom: 20px;">Account created successfully!</h3>
    <p style="text-align: center;">Redirecting to login page in <span id="countdown">5</span> seconds...</p>
  `;

      // Countdown logic
      let timeLeft = 5;
      const countdownEl = document.getElementById("countdown");
      const countdown = setInterval(() => {
        timeLeft--;
        countdownEl.textContent = timeLeft;
        if (timeLeft === 0) {
          clearInterval(countdown);
          window.location.href = "login.html";
        }
      }, 1000);
    }
  });

  //Shows an error message on the specfic input fields
  function showError(input, message) {
    input.classList.add("error_border");

    //Makes a new "div" element so that the field can be styled red
    let errorMsg = document.createElement("div");
    errorMsg.className = "error_message";
    errorMsg.innerText = message;
    input.insertAdjacentElement("afterend", errorMsg);
  }

  //Resets any errors so revalidation is possible 
  function clearErrors() {
    fields.forEach((field) => field.classList.remove("error_border"));
    document.querySelectorAll(".error_message").forEach((el) => el.remove());
  }
});