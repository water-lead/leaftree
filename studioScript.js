function showIndustryInput1() {
  document.getElementById("loginButton").style.display = "none";
  document.getElementById("industryInput1").style.display = "block";
  document.getElementById("industry1").focus(); // Sets focus on the username input field
}

function showIndustryInput2() {
  document.getElementById("industryInput1").style.display = "none";
  document.getElementById("industryInput2").style.display = "block";
  document.getElementById("industry1").focus(); // Sets focus on the password input field
}

async function submitIndustryForm() {
  const username = document.getElementById("industry1").value;
  const password = document.getElementById("industry2").value;

  const requestBody = {
    industry1: industry1,
    industry2: industry2,
  };

}
  function showIdeaInput1() {
  document.getElementById("proceedButton").style.display = "none";
  document.getElementById("ideaInput1").style.display = "block";
  document.getElementById("idea1").focus(); // Sets focus on the username input field
}

function showIdeaInput2() {
  document.getElementById("ideaInput1").style.display = "none";
  document.getElementById("ideaInput2").style.display = "block";
  document.getElementById("idea2").focus(); // Sets focus on the password input field
}

  function showIdeaInput3() {
  document.getElementById("ideaInput2").style.display = "none";
  document.getElementById("ideaInput3").style.display = "block";
  document.getElementById("idea3").focus(); // Sets focus on the username input field
}

function showIdeaInput4() {
  document.getElementById("ideaInput3").style.display = "none";
  document.getElementById("ideaInput4").style.display = "block";
  document.getElementById("idea4").focus(); // Sets focus on the password input field
}

  function showIdeaInput5() {
  document.getElementById("ideaInput4").style.display = "none";
  document.getElementById("ideaInput5").style.display = "block";
  document.getElementById("idea5").focus(); // Sets focus on the password input field
}

async function submitIdeaForm() {
  const username = document.getElementById("idea1").value;
  const password = document.getElementById("idea2").value;
  const username = document.getElementById("idea3").value;
  const password = document.getElementById("idea4").value;
  const password = document.getElementById("idea5").value;

  const requestBody = {
    idea1: idea1,
    idea2: idea2,
    idea3: idea3,
    idea4: idea4,
    idea5: idea5,
  };

  function analyzeButton() {
  document.getElementById("analyzeButton").style.display = "none";
  }
}

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
      showIndustryInput1(); // If login button is displayed, show username input
    } else if (
      document.getElementById("industry1").style.display === "block"
    ) {
      showIndustryInput2(); // If username input is displayed, show password input
    } else if (
      document.getElementById("industry2").style.display === "block"
    ) {
      submitIndustryForm(); // If password input is displayed, submit the login form
    }
  }
  if (event.key === "Enter") {
    if (document.getElementById("proceedButton").style.display === "block") {
      showIdeaInput1(); // If login button is displayed, show username input
    } else if (
      document.getElementById("idea1").style.display === "block"
    ) {
      showIdeaInput2(); // If username input is displayed, show password input
    } else if (
      document.getElementById("idea2").style.display === "block"
    ) {
      showIdeaInput3(); // If username input is displayed, show password input
    } else if (
      document.getElementById("idea3").style.display === "block"
    ) {
      showIdeaInput4(); // If username input is displayed, show password input
    } else if (
      document.getElementById("idea4").style.display === "block"
    ) {
      showIdeaInput5(); // If username input is displayed, show password input
    } else if (
      document.getElementById("idea5").style.display === "block"
    ) {
      submitIdeaForm(); // If password input is displayed, submit the login form
    }
});
