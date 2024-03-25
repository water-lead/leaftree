const requestBody = {};

function showNameInput() {
    document.getElementById("emailButton").style.display = "none";
    document.getElementById("nameEntry").style.display = "block";
    document.getElementById("fullName").focus();
}

function showEmailInput() {
    return new Promise((resolve) => {
        requestBody.name = document.getElementById("fullName").value;
        document.getElementById("nameEntry").style.display = "none";
        document.getElementById("emailEntry").style.display = "block";
        document.getElementById("email").focus();
        resolve();
    });
}

function showInfoInput() {
    return new Promise((resolve) => {
        requestBody.email = document.getElementById("email").value;
        document.getElementById("emailEntry").style.display = "none";
        document.getElementById("infoEntry").style.display = "block";
        document.getElementById("info").focus();
        resolve();
    });
}

async function submitInfoForm() {
    try {
        const nameEntry = await showNameInput();
        const emailEntry = await showEmailInput();
        const infoEntry = await showInfoInput();

        // Check if all forms were successfully filled
        if (nameEntry && emailEntry && infoEntry) {
            // Here, you would submit the form data to the server
            // and handle the response accordingly
            const notification = document.getElementById("notification");
            notification.style.display = "block";
            notification.innerText = "Thank you for your interest! Your information has been received & you will be contacted shortly.";
        } else {
            throw new Error("Form data could not be submitted.");
        }
    } catch (error) {
        console.error("An error occurred:", error);
        const notification = document.getElementById("notification");
        notification.style.display = "block";
        notification.innerText = "The form could not be submitted, please try again.";
    }
}

// The event listener for the Enter key press remains the same
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
