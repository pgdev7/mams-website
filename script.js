let degrees = 0;
const targetSequence = "pranav";
let currentStep = 0;

function handleKeySequence(event) {
  const key = event.key.toLowerCase();

  if (key === targetSequence[currentStep]) {
    currentStep++;
    if (currentStep === targetSequence.length) {
      degrees = Math.floor(Math.random() * 360) + 1;
      document.body.style.transform = `rotate(${degrees}deg)`;
      currentStep = 0;
    }
  } else {
    if (key === "r") {
      degrees = 0;
      document.body.style.transform = `rotate(${degrees}deg)`;
    }
    currentStep = key === "p" ? 1 : 0;
  }
}

// Worked with Daniel Korkin (users.wpi.edu/~dkorkin1/) to get the key logging working

document.addEventListener("keydown", handleKeySequence);

// Navbar adapted from W3Schools: https://www.w3schools.com/css/css_navbar.asp
document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navbar");
  const menuButton = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (!navbar || !menuButton || !navLinks) return;

  // Wrap detection adapted from Stack Overflow: https://stackoverflow.com/questions/43420603/can-flexbox-detect-when-a-flex-item-wraps
  function updateNavigationLayout() {
    navbar.classList.remove("is-collapsed");
    navLinks.classList.remove("is-open");

    const firstLink = navLinks.querySelector("a");
    const linksHaveWrapped = firstLink && navLinks.scrollHeight > firstLink.offsetHeight + 1;

    if (linksHaveWrapped) {
      navbar.classList.add("is-collapsed");
    }
  }

  menuButton.addEventListener("click", () => {
    navLinks.classList.toggle("is-open");
  });

  navLinks.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      navLinks.classList.remove("is-open");
    }
  });

  window.addEventListener("resize", updateNavigationLayout);
  updateNavigationLayout();
});
