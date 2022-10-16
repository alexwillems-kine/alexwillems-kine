// small-nav appears on click of special-nav

const smallNav = document.getElementById('small-nav');
const specialNavElement = document.getElementById('special-nav-element');

specialNavElement.addEventListener('click', () => {
    smallNav.style.left = '0px';
});

// Small nav dropdown 

const smallDropdownContent = document.getElementById('small-dropdown-content');
const dropdownButton = document.getElementById('dropdown-button');
const closeMenu = document.getElementById('close-menu');

dropdownButton.onclick = function () {
    if (smallDropdownContent.style.display === "block") {
        dropdownButton.innerHTML = "&#x25B6;";
        smallDropdownContent.style.display = "none";
    } else {
        dropdownButton.innerHTML = "&#x25BC;";
        smallDropdownContent.style.display = "block";
    }
}

closeMenu.onclick = function() {
    smallNav.style.left = '-500px';
    smallDropdownContent.style.display = "none";
    dropdownButton.innerHTML = "&#x25B6";
}

// Open and close Conditions d'utilisation

const openUtilisation = document.getElementById('open-utilisation');
const closeUtilisation = document.getElementById('close-utilisation');
const utilisation = document.getElementById('utilisation');
const closeUtilisationButton = document.getElementById('close-utilisation-button');

if(openUtilisation) {
    openUtilisation.addEventListener('click', () => {
        utilisation.style.display = "block";
    })
};

if(closeUtilisation) {
    closeUtilisation.addEventListener('click', () => {
        utilisation.style.display = "none";
    })
};

if(closeUtilisationButton) {
    closeUtilisationButton.addEventListener('click', () => {
        utilisation.style.display = "none";
    })
};

// Open and close Politique de confidentialié

const openConfidentialité = document.getElementById('open-confidentialité');
const closeConfidentialité = document.getElementById('close-confidentialite');
const confidentialité = document.getElementById('confidentialite');
const closeConfidentialitéButton = document.getElementById('close-confidentialité-button');

if(openConfidentialité) {
    openConfidentialité.addEventListener('click', () => {
        confidentialité.style.display = "block";
    })
};

if(closeConfidentialité) {
    closeConfidentialité.addEventListener('click', () => {
        confidentialité.style.display = "none";
    })
};

if(closeConfidentialitéButton) {
    closeConfidentialitéButton.addEventListener('click', () => {
        confidentialité.style.display = "none";
    })
};