"use strict";

window.addEventListener("load", () => {
    const modeToggler = document.getElementById('darkmode');
    const documentBody = document.body;

    function setThemeFromLocalStorage() {
        const mode = localStorage.getItem('mode'); // Get the stored mode from localStorage

        if (mode === 'dark-mode') {
            documentBody.classList.add('dark-mode');
            modeToggler.checked = true; // Ensure the toggle is set to dark
            console.log('LocalStorage: dark mode');
        } else {
            documentBody.classList.remove('dark-mode');
            modeToggler.checked = false; // Ensure the toggle is set to light
            console.log('LocalStorage: light mode');
        }
    }

    setThemeFromLocalStorage(); // Call the function to apply theme from localStorage

    modeToggler.addEventListener('change', () => {
        if (modeToggler.checked) {
            documentBody.classList.add('dark-mode');
            localStorage.setItem('mode', 'dark-mode'); // Store dark mode in localStorage
            console.log('Changed to dark mode');
        } else {
            documentBody.classList.remove('dark-mode');
            localStorage.removeItem('mode'); // Remove the mode from localStorage for light mode
            console.log('Changed to light mode');
        }
    });
});
