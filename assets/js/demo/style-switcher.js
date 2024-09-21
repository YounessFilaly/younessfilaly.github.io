"use strict";

/* ======= DEMO THEME CONFIG (Remove This File On Production Site) ====== */

const configTrigger = document.getElementById('config-trigger');
const configClose = document.getElementById('config-close');
const configPanel = document.getElementById('config-panel');
const colorOptionsContainer = document.getElementById('color-options');
const colorOptions = document.querySelectorAll('#color-options a');
const themeStyleSheet = document.getElementById('theme-style');

// Function to set active class on the correct color option
function setActiveColorOption(selectedStyle) {
    colorOptions.forEach((colorOption) => {
        if (colorOption.getAttribute('data-style') === selectedStyle) {
            colorOption.parentElement.classList.add('active');
        } else {
            colorOption.parentElement.classList.remove('active');
        }
    });
}

window.addEventListener('DOMContentLoaded', () => {
    // Load the selected style from localStorage if it exists
    const savedStyle = localStorage.getItem('selectedColorStyle');
    
    if (savedStyle) {
        themeStyleSheet.setAttribute('href', savedStyle);
        setActiveColorOption(savedStyle);
    }

    configTrigger.addEventListener('click', (e) => {
        e.preventDefault();
        
        if (configPanel.classList.contains('config-panel-open')) {        
            configPanel.classList.remove('config-panel-open');
            configPanel.classList.add('config-panel-hide');
        } else {                    
            configPanel.classList.remove('config-panel-hide');
            configPanel.classList.add('config-panel-open');  
        }
    });

    configClose.addEventListener('click', (e) => {
        e.preventDefault();
        configPanel.classList.remove('config-panel-open');
        configPanel.classList.add('config-panel-hide');
    });

    colorOptions.forEach((colorOption) => {
        colorOption.addEventListener('click', (e) => {
            e.preventDefault();
            
            let style = colorOption.getAttribute('data-style');
            
            // Update the stylesheet
            themeStyleSheet.setAttribute('href', style);

            // Save the selected style to localStorage
            localStorage.setItem('selectedColorStyle', style);

            // Set active class on the clicked color option
            setActiveColorOption(style);
        });
    });
});
