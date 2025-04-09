function animateLinks(navLinks) {
    navLinks.forEach((link, index) => {
        link.style.animation
            ? (link.style.animation = "")
            : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);
    });
}

function handleClick(mobileMenu, navList, navLinks, activeClass) {
    navList.classList.toggle(activeClass);
    mobileMenu.classList.toggle(activeClass);
    animateLinks(navLinks);
}

function initMobileNavbar(mobileMenuSelector, navListSelector, navLinksSelector) {
    const mobileMenu = document.querySelector(mobileMenuSelector);
    const navList = document.querySelector(navListSelector);
    const navLinks = document.querySelectorAll(navLinksSelector);
    const activeClass = "active";

    if (mobileMenu) {
        mobileMenu.addEventListener("click", () =>
            handleClick(mobileMenu, navList, navLinks, activeClass)
        );
    }
}

// Inicializa o menu mobile
initMobileNavbar(".mobile-menu", ".nav-list", ".nav-list li");
