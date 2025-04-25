// Event listener for form submission
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent form from submitting

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const messageElement = document.getElementById("form-message");

    // Validate the form inputs
    if (name === "" || email === "" || message === "") {
        messageElement.textContent = "All fields are required!";
        messageElement.style.color = "red";
    } else if (!validateEmail(email)) {
        messageElement.textContent = "Please enter a valid email!";
        messageElement.style.color = "red";
    } else {
        messageElement.textContent = "Form submitted successfully!";
        messageElement.style.color = "green";
    }
});

// Email validation function
function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

// Event listener for toggling background color
document.getElementById("toggle-bg-btn").addEventListener("click", function() {
    document.body.style.backgroundColor = document.body.style.backgroundColor === 'rgb(14, 1, 10)' ? '#e8e8e8' : '#f0f0f0';
});
