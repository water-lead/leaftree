//This displays
function showIndustryInput1() {
  document.getElementById("first-studio-display").style.display = "none";
  document.getElementById("enter-industries").style.display = "block";
  document.getElementById("init-analyse").style.display = "none";
  document.getElementById("industry1").style.display = "block";
  document.getElementById("industry2").style.display = "none";
  document.getElementById("industry1").focus(); // Sets focus on the username input field
}

document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowRight") {
    if (
      document.getElementById("enter-industries").style.display === "block" &&
      document.getElementById("industry2").style.display === "block"
    ) {
      document.getElementById("enter-industries").style.display = "none";
      document.getElementById("congrats-view").style.display = "block";
      document.getElementById("analyse-view").style.display = "none";
    }
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowRight") {
    if (
      document.getElementById("init-analyse").style.display === "block" &&
      document.getElementById("idea1").style.display === "none" &&
      document.getElementById("idea2").style.display === "none"
    ) {
      if (document.getElementById("idea3").style.display === "block") {
        document.getElementById("idea3").style.display = "none";
        document.getElementById("idea4").style.display = "none";
      } else if (document.getElementById("idea4").style.display === "block") {
        document.getElementById("idea4").style.display = "none";
        document.getElementById("idea5").style.display = "block";
        document.getElementById("analyse-view").style.display = "none";
      } else if (document.getElementById("idea5").style.display === "block") {
        document.getElementById("idea5").style.display = "none";
        document.getElementById("analyse-view").style.display = "none";
      } 
    }
  }

  if (event.key === "Enter") {
    const industry1Value = document.getElementById("industry1").value;
    const industry2Value = document.getElementById("industry2").value;

    if (
      industry1Value &&
      document.getElementById("enter-industries").style.display === "block"
    ) {
      document.getElementById("industry1").style.display = "none";
      document.getElementById("industry2").style.display = "block";
      document.getElementById("industry2").focus();
    }

    if (
      industry2Value &&
      document.getElementById("enter-industries").style.display === "block"
    ) {
      document.getElementById("enter-industries").style.display = "none";
      document.getElementById("congrats-view").style.display = "block";
      document.getElementById("analyse-view").style.display = "none";
    }

document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowLeft") {
    if (document.getElementById("industry1").style.display === "block") {
      document.getElementById("industry1").style.display = "none";
      document.getElementById("first-studio-display").style.display = "block";
      document.getElementById("enter-industries").style.display = "none";
      document.getElementById("analyse-view").style.display = "block";
    } else if (
      document.getElementById("enter-industries").style.display === "block" &&
      document.getElementById("industry2").style.display === "block"
    ) {
      document.getElementById("industry1").style.display = "block";
      document.getElementById("industry2").style.display = "none";
      document.getElementById("industry1").focus();
      document.getElementById("industry1").style.marginLeft = "25%";
      document.getElementById("industry1").value = "";
    } else if (
      document.getElementById("init-analyse").style.display === "block" &&
      document.getElementById("idea5").style.display === "block"
    ) {
      document.getElementById("idea5").style.display = "none";
      document.getElementById("idea4").style.display = "block";
      document.getElementById("idea4").focus();
    } else if (
      document.getElementById("init-analyse").style.display === "block" &&
      document.getElementById("idea4").style.display === "block"
    ) {
      document.getElementById("idea4").style.display = "none";
      document.getElementById("idea3").style.display = "block";
      document.getElementById("idea3").focus();
    } else if (
      document.getElementById("init-analyse").style.display === "block" &&
      document.getElementById("idea3").style.display === "block"
    ) {
      document.getElementById("idea3").style.display = "none";
      document.getElementById("idea2").style.display = "block";
      document.getElementById("idea2").focus();
    } else if (
      document.getElementById("init-analyse").style.display === "block" &&
      document.getElementById("idea2").style.display === "block"
    ) {
      document.getElementById("idea2").style.display = "none";
      document.getElementById("idea1").style.display = "block";
      document.getElementById("idea1").focus();
      document.getElementById("idea1").style.marginLeft = "25%";
      document.getElementById("idea1").value = "";
    } else if (
      document.getElementById("init-analyse").style.display === "block" &&
      document.getElementById("idea1").style.display === "block"
    ) {
      document.getElementById("init-analyse").style.display = "none";
      document.getElementById("congrats-view").style.display = "block";
    } else if (
      document.getElementById("congrats-view").style.display === "block" &&
      document.getElementById("enter-industries").style.display === "none"
    ) {
      document.getElementById("congrats-view").style.display = "none";
      document.getElementById("enter-industries").style.display = "block";
      document.getElementById("industry2").style.display = "block";
      document.getElementById("industry1").focus();
    }
  }
});
