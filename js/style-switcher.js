/* ========================== toggle style switcher =========================== */
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
})

/* ========================== theme colors =========================== */

const alternateStyles = document.querySelectorAll(".alternate-style");
const styleSwitcher = document.querySelector(".style-switcher");

function setActiveStyle(color) {
    alternateStyles.forEach((style) => {
        if (color === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        } else {
            style.setAttribute("disabled", "true");
        }
    });

    // Save the selected color to localStorage
    localStorage.setItem("selectedColor", color);
    // Hide the style switcher
    styleSwitcher.classList.remove("open");
}

// On page load, retrieve the selected color from localStorage and apply it
window.addEventListener("DOMContentLoaded", () => {
    const selectedColor = localStorage.getItem("selectedColor");
    if (selectedColor) {
        setActiveStyle(selectedColor);
    }
});

/* ========================== theme light and dark mode =========================== */

const dayNight = document.querySelector(".day-night");

dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");

    // Store the user's preference in localStorage
    const isDarkModeNow = document.body.classList.contains("dark");
    localStorage.setItem("darkMode", isDarkModeNow);
});

window.addEventListener("load", () => {
    // Check for user's preference in localStorage
    const isDarkMode = localStorage.getItem("darkMode") === "true";

    if (isDarkMode) {
        document.body.classList.add("dark");
        dayNight.querySelector("i").classList.add("fa-sun");
    } else {
        dayNight.querySelector("i").classList.add("fa-moon");
    }
});
