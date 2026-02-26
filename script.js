document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  hamburger.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });
});

// ==========================
// script.js
// ==========================

// 1️⃣ EmailJS config
const EMAILJS_SERVICE_ID = "service_xy87c3h";       // replace with your service ID
const EMAILJS_TEMPLATE_ID = "template_c6z7c7j";   // replace with your Contact Us template ID
const EMAILJS_PUBLIC_KEY = "NhcyB3wG1rAwAAnu_";     // replace with your public key

// 2️⃣ DOM Elements
const form = document.querySelector("form");

// 3️⃣ Create a status card to show message sent or errors
const statusCard = document.createElement("div");
statusCard.style.padding = "15px";
statusCard.style.margin = "15px 0";
statusCard.style.border = "2px solid #333";
statusCard.style.borderRadius = "10px";
statusCard.style.backgroundColor = "#f4f4f4";
statusCard.style.width = "fit-content";
statusCard.style.fontFamily = "Arial, sans-serif";
statusCard.style.fontWeight = "bold";
statusCard.style.boxShadow = "2px 2px 8px rgba(0,0,0,0.2)";
form.parentNode.insertBefore(statusCard, form);

// 4️⃣ Contact Form Submission
form.addEventListener("submit", function (e) {
  e.preventDefault(); // prevent default form submit

  // Get values from input fields
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  // Simple validation
  if (!name || !email || !message) {
    statusCard.textContent = "⚠ Please fill in all fields!";
    statusCard.style.color = "orange";
    return;
  }

  // 5️⃣ Send email with EmailJS
  emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
    name: name,
    email: email,
    message: message
  }, EMAILJS_PUBLIC_KEY)
    .then(function(response) {
      console.log("Email sent successfully!", response.status, response.text);
      statusCard.textContent = "💌 Message sent successfully!";
      statusCard.style.color = "green";

      // Reset the form
      form.reset();
    }, function(error) {
      console.error("Failed to send email:", error);
      statusCard.textContent = "❌ Failed to send message. Try again!";
      statusCard.style.color = "red";
    });
});

document.getElementById("contactForm")
  .addEventListener("submit", function(e){
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const service = document.getElementById("service").value;
    const msg = document.getElementById("message").value;

    const whatsappNumber = "2348037073519"; // replace with your number
    const text = `Hi! My name is ${name}. I need the following service: ${service}. Email: ${email}. Details: ${msg}`;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank"); // opens WhatsApp in new tab/app

    // Optional: reset form
    this.reset();
});

