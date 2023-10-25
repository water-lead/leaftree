function showEmailInput() {
  document.getElementById("loginButton").style.display = "none";
  document.getElementById("emailInput").style.display = "block";
  document.getElementById("username").focus(); // Sets focus on the username input field
}

function showPasswordInput() {
  document.getElementById("emailInput").style.display = "none";
  document.getElementById("passwordInput").style.display = "block";
  document.getElementById("password").focus(); // Sets focus on the password input field
}

async function submitLoginForm() {
  const username = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const requestBody = {
    email: email,
    password: password,
  };

   try {
    const response = await fetch("https://sample-login-endpoint/login-route", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });

    const data = await response.json();

    if (data.success) {
      window.location.href = "studio.html"; // Redirects to desired page on successful login
    } else {
      const notification = document.getElementById("notification");
      notification.style.display = "block";
      notification.innerText = "Incorrect login details. Please try again.";
    }
  } catch (error) {
    console.error("Error:", error);
    const notification = document.getElementById("notification");
    notification.style.display = "block";
    notification.innerText = "You may not have access, please contact us.";
  }
}

document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    if (document.getElementById("loginButton").style.display === "block") {
      showEmailInput(); // If login button is displayed, show username input
    } else if (
      document.getElementById("emailInput").style.display === "block"
    ) {
      showPasswordInput(); // If username input is displayed, show password input
    } else if (
      document.getElementById("passwordInput").style.display === "block"
    ) {
      submitLoginForm(); // If password input is displayed, submit the login form
    }
  }
});
