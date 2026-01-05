//
//    Toggle Mobile Navigation
//
const navbarMenu = document.querySelector("#navigation #navbar-menu");
const hamburgerMenu = document.querySelector("#navigation .hamburger-menu");

hamburgerMenu.addEventListener('click', function() {
    const isNavOpen = navbarMenu.classList.contains("open");
    if (!isNavOpen) {
        hamburgerMenu.setAttribute("aria-expanded", true);
        hamburgerMenu.classList.add("clicked");
        navbarMenu.classList.add("open");
    } else {
        hamburgerMenu.setAttribute("aria-expanded", false);
        hamburgerMenu.classList.remove("clicked");
        navbarMenu.classList.remove("open");
    }
});

//
//    Toggle Mobile Dropdown Menus
//
const dropdownItems = document.querySelectorAll("#navigation #navbar-menu ul li.has-dropdown > a");

dropdownItems.forEach(function(item) {
    item.addEventListener('click', function(e) {
        // Only prevent default and toggle on mobile
        if (window.innerWidth <= 1023) {
        e.preventDefault();
        const parentLi = this.parentElement;
        const isOpen = parentLi.classList.contains("open");
        
        // Close all other dropdowns
        dropdownItems.forEach(function(otherItem) {
            if (otherItem !== item) {
                otherItem.parentElement.classList.remove("open");
            }
        });
        
        // Toggle current dropdown
        if (isOpen) {
            parentLi.classList.remove("open");
        } else {
            parentLi.classList.add("open");
        }
        }
    });
});