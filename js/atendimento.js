document
    .getElementById("contact-form")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const subject = document.getElementById("subject").value;
        const message = document.getElementById("message").value;

        alert("Please review your message before sending.");

        const note = prompt("Add an optional note for this message:", "");

        if (note === null) {
            alert("No message was sent.");
            return;
        }

        const sendMessage = confirm(
            "Confirm submission?\n\n" +
            "Name: " + name + "\n" +
            "Email: " + email + "\n" +
            "Subject: " + subject + "\n" +
            "Message: " + message + "\n" +
            "Note: " + (note || "No additional note")
        );

        if (sendMessage) {
            alert("Message sent successfully.");
        } else {
            alert("Submission cancelled.");
        }
    });