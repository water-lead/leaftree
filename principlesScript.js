//This displays
function acceptEmail() {
  document.getElementById("principles-Display").style.display = "none";
  document.getElementById(""enter-information").style.display = "block";
  document.getElementById("name").style.display = "block";
  document.getElementById("email").style.display = "none";
  document.getElementById("name").focus(); // Sets focus on the username input field
}

document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowRight") {
    if (
      document.getElementById("enter-information").style.display === "block" &&
      document.getElementById("email").style.display === "block"
    ) {
      document.getElementById("enter-information").style.display = "none";
      document.getElementById("form-submission").style.display = "block"
    }
  }
});

  if (event.key === "Enter") {
    const nameEntry = document.getElementById("name").value;
    const emailEntry = document.getElementById("email").value;

    if (
      nameEntry &&
      document.getElementById("enter-information").style.display === "block"
    ) {
      document.getElementById("name").style.display = "none";
      document.getElementById("email").style.display = "block";
      document.getElementById("email").focus();
    }

    if (
      emailEntry &&
      document.getElementById("enter-information").style.display === "block"
    ) {
      document.getElementById("enter-information").style.display = "none";
      document.getElementById("form-submission").style.display = "block";
    }
});
