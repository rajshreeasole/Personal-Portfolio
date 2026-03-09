function sendMail(event) {
    event.preventDefault(); // Prevents page refresh

    // Get form values
    const params = {
        name: document.getElementById("name").value,
        phone: document.getElementById("phone").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    // Send email using EmailJS 
    emailjs.send("service_8h412b4", "template_3pl63sn", params)
        .then(function(response) {
            alert("Email Sent Successfully!");
            console.log("SUCCESS!", response);
            document.getElementById("contactForm").reset(); // Clears the form
        })
        .catch(function(error) {
            alert("Failed to Send Email. Please try again.");
            console.error("FAILED...", error);
        });
}
