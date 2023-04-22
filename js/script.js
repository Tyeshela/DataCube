// Navigation menu toggle
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav__link");

navToggle.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
  });
});

// Contact form submission
const form = document.querySelector("form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");
const successMessage = document.querySelector(".success-message");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Check if all fields are filled
  if (nameInput.value.trim() === "" || emailInput.value.trim() === "" || messageInput.value.trim() === "") {
    alert("Please fill in all fields.");
    return;
  }

  // Send email using EmailJS service
  emailjs.sendForm('service_abcdefg', 'template_hijklmn', form)
    .then((response) => {
      // Display success message
      successMessage.style.display = "block";

      // Reset form fields
      form.reset();
    }, (error) => {
      alert("An error occurred while sending the email. Please try again later.");
    });
});