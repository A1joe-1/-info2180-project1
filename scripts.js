document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector(".newsletter form");
    const emailInput = document.getElementById("email");
    const messageDiv = document.querySelector(".message");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Stops the page from refreshing

        const emailValue = emailInput.value.trim(); // Gets the email and removes extra spaces

        if (emailValue === "") {
            messageDiv.textContent = "Please enter a valid email address.";
            messageDiv.style.color = "white"; 
        } else {
            messageDiv.textContent = "Thank you! Your email address " + emailValue + " has been added to our mailing list!";
            messageDiv.style.color = "white"; 
            form.reset(); // Clears the input field
        }
    });
});