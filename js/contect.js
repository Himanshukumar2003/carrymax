function validateForm() {
    // Clear previous error messages
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("phoneError").textContent = "";
    document.getElementById("messageError").textContent = "";
    
    let isValid = true;

    // Validate name
    const name = document.getElementById("feedbackName").value;
    if (name.length < 3) {
        document.getElementById("nameError").textContent = "Name must be at least 3 characters long.";
        isValid = false;
    }

    // Validate phone number
    const phone = document.getElementById("feedbackTel").value;
    const phonePattern = /^[0-9]{10}$/; // Adjust this pattern if you want to allow spaces or dashes
    if (!phonePattern.test(phone)) {
        document.getElementById("phoneError").textContent = "Please enter a valid 10-digit phone number.";
        isValid = false;
    }

    // Validate email for Gmail format
    const email = document.getElementById("feedbackEmail").value;
    const gmailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (!gmailPattern.test(email)) {
        document.getElementById("emailError").textContent = "Please enter a valid Gmail address.";
        isValid = false;
    }

    // Validate message
    const message = document.getElementById("feedbackMessage").value;
    if (message.trim().length === 0) {
        document.getElementById("messageError").textContent = "Please enter your message.";
        isValid = false;
    }

    return isValid; // If isValid is false, the form will not be submitted
}