'use strict';

// small-nav appears on click of special-nav

var smallNav = document.getElementById('small-nav');
var specialNavElement = document.getElementById('special-nav-element');

specialNavElement.addEventListener('click', function () {
    smallNav.style.left = '0px';
});

// Small nav dropdown 

var smallDropdownContent = document.getElementById('small-dropdown-content');
var dropdownButton = document.getElementById('dropdown-button');
var closeMenu = document.getElementById('close-menu');

dropdownButton.onclick = function () {
    if (smallDropdownContent.style.display === "block") {
        dropdownButton.innerHTML = "&#x25B6;";
        smallDropdownContent.style.display = "none";
    } else {
        dropdownButton.innerHTML = "&#x25BC;";
        smallDropdownContent.style.display = "block";
    }
};

closeMenu.onclick = function () {
    smallNav.style.left = '-500px';
    smallDropdownContent.style.display = "none";
    dropdownButton.innerHTML = "&#x25B6";
};

// Open and close Conditions d'utilisation

var openUtilisation = document.getElementById('open-utilisation');
var closeUtilisation = document.getElementById('close-utilisation');
var utilisation = document.getElementById('utilisation');
var closeUtilisationButton = document.getElementById('close-utilisation-button');

if (openUtilisation) {
    openUtilisation.addEventListener('click', function () {
        utilisation.style.display = "block";
    });
};

if (closeUtilisation) {
    closeUtilisation.addEventListener('click', function () {
        utilisation.style.display = "none";
    });
};

if (closeUtilisationButton) {
    closeUtilisationButton.addEventListener('click', function () {
        utilisation.style.display = "none";
    });
};

// Open and close Politique de confidentialié

var openConfidentialité = document.getElementById('open-confidentialité');
var closeConfidentialité = document.getElementById('close-confidentialite');
var confidentialité = document.getElementById('confidentialite');
var closeConfidentialitéButton = document.getElementById('close-confidentialité-button');

if (openConfidentialité) {
    openConfidentialité.addEventListener('click', function () {
        confidentialité.style.display = "block";
    });
};

if (closeConfidentialité) {
    closeConfidentialité.addEventListener('click', function () {
        confidentialité.style.display = "none";
    });
};

if (closeConfidentialitéButton) {
    closeConfidentialitéButton.addEventListener('click', function () {
        confidentialité.style.display = "none";
    });
};