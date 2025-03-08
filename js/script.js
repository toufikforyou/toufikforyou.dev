// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Enhanced Header scroll effect with hero section check
const header = document.querySelector("header");
const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {
  const heroHeight = hero.offsetHeight;
  const scrollPosition = window.scrollY;

  if (scrollPosition > heroHeight / 6) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Update initial state on page load
document.addEventListener("DOMContentLoaded", () => {
  const heroHeight = hero.offsetHeight;
  if (window.scrollY > heroHeight / 6) {
    header.classList.add("scrolled");
  }
});

// Reveal animations on scroll
const revealElements = document.querySelectorAll(".skill-card, .about-content");
const revealOnScroll = () => {
  revealElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight - 100) {
      element.classList.add("revealed");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
