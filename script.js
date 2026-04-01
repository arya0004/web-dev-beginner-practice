document.addEventListener("DOMContentLoaded", function() {
    const submitButton = document.getElementById("submit-button");
    const form = document.getElementById("registration-form");

    // Function to check if all fields are filled
    function areFieldsFilled() {
        const inputs = form.querySelectorAll("input, select");
        return Array.from(inputs).every(input => input.value.trim() !== "");
    }

    // Move the submit button when not all fields are filled
    function moveButtonRandomly() {
        const container = document.querySelector(".container");
        const maxX = container.offsetWidth - submitButton.offsetWidth;
        const maxY = container.offsetHeight - submitButton.offsetHeight;

        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;

        submitButton.style.position = "absolute";
        submitButton.style.left = randomX + "px";
        submitButton.style.top = randomY + "px";
    }

    // Handle submit button behavior
    submitButton.addEventListener("click", function(event) {
        if (!areFieldsFilled()) {
            event.preventDefault();
            moveButtonRandomly();
        } else {
            window.location.href = "success.html"; // Redirect to success page
        }
    });
});
