const requestBody = {};

function showEmailInput() {
  document.getElementById("loginButton").style.display = "none";
  document.getElementById("emailInput").style.display = "block";
  document.getElementById("loginEmail").focus();
}

function showPasswordInput() {
  return new Promise((resolve) => {
    requestBody.email = document.getElementById("loginEmail").value;
    document.getElementById("emailInput").style.display = "none";
    document.getElementById("passwordInput").style.display = "block";
    document.getElementById("loginPassword").focus();
    resolve();
  });
}

async function submitLoginForm() {
  await showPasswordInput(); // Wait for showPasswordInput to complete before proceeding

  requestBody.password = document.getElementById("loginPassword").value;

  try {
    const response = await fetch("http://localhost:8080/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });

    const data = await response.json();

    if (data.success) {
      window.location.href = "studio.html";
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
      showEmailInput();
    } else if (document.getElementById("emailInput").style.display === "block") {
      showPasswordInput();
    } else if (document.getElementById("passwordInput").style.display === "block") {
      submitLoginForm();
    }
  }
});
