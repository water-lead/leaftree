//This displays
function showIndustryInput1() {
  document.getElementById("first-studio-display").style.display = "none";
  document.getElementById("enter-industries").style.display = "block";
  /*document.getElementById("analyse-view").style.display = "none";*/
  document.getElementById("industry1").style.display = "block";
  document.getElementById("industry2").style.display = "none";
  document.getElementById("industry1").focus(); // Sets focus on the username input field
}

function showIdeaInput1() {
  document.getElementById("congrats-view").style.display = "none";
  document.getElementById("init-analyse").style.display = "block";
  document.getElementById("analyse-view").style.display = "none";
  document.getElementById("idea1").style.display = "block";
  document.getElementById("idea1").focus();
}

function runEngine() {
    // Get the input values from your HTML elements (assuming text inputs for simplicity)
    const industry1 = document.getElementById("industry1").value;
    const industry2 = document.getElementById("industry2").value;
    // ... Fetch other input values similarly
    const idea1 = document.getElementById("idea1").value;
    const idea2 = document.getElementById("idea2").value;
    const idea3 = document.getElementById("idea3").value;
    const idea4 = document.getElementById("idea4").value;
    const idea5 = document.getElementById("idea5").value;

    // Create the payload for your OpenAI request
    const payload = {
        industry1: industry1,
        industry2: industry2,
        // ... Include other input values
        idea1: idea1,
        idea2: idea2,
        idea3: idea3,
        idea4: idea4,
        idea5: idea5,
    };

    // Make the API call
    fetch("/path_to_your_engine_endpoint", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    })
    .then(response => response.json())
    .then(data => {
        // Handle the OpenAI response here. 
        // For example, display the results on the page
        document.getElementById("results").innerText = data.text;
    })
    .catch(error => {
        console.error("Error:", error);
    });
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
        document.getElementById("idea3").style.display = "block";
        document.getElementById("idea4").style.display = "none";
        document.getElementById("idea5").style.display = "none";
        document.getElementById("analyse-view").style.display = "none";
      }
    }
  }

  if (event.key === "Enter") {
    const industry1Value = document.getElementById("industry1").value;
    const industry2Value = document.getElementById("industry2").value;

    const idea1 = document.getElementById("idea1").value;
    const idea2 = document.getElementById("idea2").value;
    const idea3 = document.getElementById("idea3").value;
    const idea4 = document.getElementById("idea4").value;
    const idea5 = document.getElementById("idea5").value;

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

    //This uses right arrow key to skip an move to next step
    if (
      idea1 &&
      document.getElementById("init-analyse").style.display === "block"
    ) {
      document.getElementById("idea1").style.display = "none";
      document.getElementById("idea2").style.display = "block";
      document.getElementById("analyse-view").style.display = "none";
      document.getElementById("idea2").focus();
    }

    if (
      idea2 &&
      document.getElementById("init-analyse").style.display === "block"
    ) {
      document.getElementById("idea2").style.display = "none";
      document.getElementById("idea3").style.display = "block";
      document.getElementById("analyse-view").style.display = "none";
    }

    if (
      idea3 &&
      document.getElementById("init-analyse").style.display === "block"
    ) {
      document.getElementById("idea3").style.display = "none";
      document.getElementById("idea4").style.display = "none";
      document.getElementById("analyse-view").style.display = "block";
      if (
        idea4 &&
        document.getElementById("init-analyse").style.display === "block"
      ) {
        document.getElementById("idea4").style.display = "none";
        document.getElementById("idea5").style.display = "none";
        /*document.getElementById("analyse-view").style.display = "block";*/
      }
    }
  }
});

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
