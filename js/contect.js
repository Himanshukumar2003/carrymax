function validateForm() {

    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("phoneError").textContent = "";
    document.getElementById("messageError").textContent = "";

    let isValid = true;


    const name = document.getElementById("feedbackName").value;
    if (name.length < 3) {
        document.getElementById("nameError").textContent = "Name must be at least 3 characters long.";
        isValid = false;
    }


    const phone = document.getElementById("feedbackTel").value;
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
        document.getElementById("phoneError").textContent = "Please enter a valid 10-digit phone number.";
        isValid = false;
    }


    const email = document.getElementById("feedbackEmail").value;
    const gmailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (!gmailPattern.test(email)) {
        document.getElementById("emailError").textContent = "Please enter a valid Gmail address.";
        isValid = false;
    }


    const message = document.getElementById("feedbackMessage").value;
    if (message.trim().length === 0) {
        document.getElementById("messageError").textContent = "Please enter your message.";
        isValid = false;
    }

    return isValid;
}


document.getElementById("feedbackName").addEventListener("input", validateName);
document.getElementById("feedbackTel").addEventListener("input", validatePhone);
document.getElementById("feedbackEmail").addEventListener("input", validateEmail);
document.getElementById("feedbackMessage").addEventListener("input", validateMessage);

function validateName() {
    const name = document.getElementById("feedbackName").value;
    document.getElementById("nameError").textContent = name.length < 3 ? "Name must be at least 3 characters long." : "";
}

function validatePhone() {
    const phone = document.getElementById("feedbackTel").value;
    const phonePattern = /^[0-9]{10}$/;
    document.getElementById("phoneError").textContent = !phonePattern.test(phone) ? "Please enter a valid 10-digit phone number." : "";
}

function validateEmail() {
    const email = document.getElementById("feedbackEmail").value;
    const gmailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    document.getElementById("emailError").textContent = !gmailPattern.test(email) ? "Please enter a valid Gmail address." : "";
}

function validateMessage() {
    const message = document.getElementById("feedbackMessage").value;
    document.getElementById("messageError").textContent = message.trim().length === 0 ? "Please enter your message." : "";
}