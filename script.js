// Mobile navigation, theme switcher, and contact form validation.
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const themeToggle = document.getElementById("theme-toggle");
const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

// Open and close the mobile navigation.
menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
  });
});

// Toggle dark mode.
themeToggle.addEventListener("click", () => {
  const darkModeOn = document.body.classList.toggle("dark-mode");
  themeToggle.textContent = darkModeOn ? "☀" : "☾";
  themeToggle.setAttribute("aria-label", darkModeOn ? "Switch to light mode" : "Switch to dark mode");
});

// Validate the contact form before opening the visitor's email application.
contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name || !email || !message) {
    formMessage.textContent = "Please complete all fields before sending.";
    formMessage.classList.remove("success");
    return;
  }
  if (!emailPattern.test(email)) {
    formMessage.textContent = "Please enter a valid email address.";
    formMessage.classList.remove("success");
    return;
  }

  formMessage.textContent = "Your email app should open with your message ready to send.";
  formMessage.classList.add("success");

  const subject = encodeURIComponent(`Portfolio message from ${name}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
  window.location.href = `mailto:patelkrishao284@gmail.com?subject=${subject}&body=${body}`;
});

// Keep the footer year current.
document.getElementById("year").textContent = new Date().getFullYear();
