const requestBody = {};

//This displays
function showNameInput() {
  document.getElementById("emailButton").style.display = "none";
  document.getElementById("nameEntry").style.display = "block";
  document.getElementById("fullName").focus();
}

function showEmailInput() {
  return new Promise((resolve) => {
    requestBody.email = document.getElementById("loginEmail").value;
    document.getElementById("nameEntry").style.display = "none";
    document.getElementById("emailEntry").style.display = "block";
    document.getElementById("email").focus();
    resolve();
  });
}

function showInfoInput() {
  return new Promise((resolve) => {
    requestBody.email = document.getElementById("loginEmail").value;
    document.getElementById("emailEntry").style.display = "none";
    document.getElementById("infoEntry").style.display = "block";
    document.getElementById("info").focus();
    resolve();
  });
}

document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    if (document.getElementById("emailButton").style.display === "block") {
      showNameInput();
    } else if (document.getElementById("nameEntry").style.display === "block") {
      showEmailInput();
    } else if (document.getElementById("emailEntry").style.display === "block") {
      showInfoInput();
    } else if (document.getElementById("infoEntry").style.display === "block") {
      submitInfoForm();
    }
  }
});
