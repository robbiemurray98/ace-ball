import footballLogo from "./images/football-only-blue.jpg"

export const loadMobileSidebar = () => {
    const container = document.querySelector('#container');

    const mobileSideBar = document.createElement('div');
    mobileSideBar.id = "mobile-side-bar";


    const mobileMenu = document.createElement('div');
    mobileMenu.id = "mobile-menu";

    const mobileMenuLinkWhere = document.createElement('a');
    mobileMenuLinkWhere.href = 'where-to-buy.html';
    mobileMenuLinkWhere.textContent = 'Where To Buy';
    const mobileMenuLinkHow = document.createElement('a');
    mobileMenuLinkHow.id = 'how-to-play-link';
    mobileMenuLinkHow.textContent = 'How To Play';
    mobileMenuLinkHow.href = 'how-to-play.html';
    const mobileMenuLinkContact = document.createElement('a');
    mobileMenuLinkContact.textContent = 'Contact';
    mobileMenuLinkContact.href = 'contact.html';
    const mobileMenuLinkAbout = document.createElement('a');
    mobileMenuLinkAbout.href = 'about.html';
    mobileMenuLinkAbout.textContent = 'About';

    mobileMenu.appendChild(mobileMenuLinkWhere);
    mobileMenu.appendChild(mobileMenuLinkHow);
    mobileMenu.appendChild(mobileMenuLinkContact);
    mobileMenu.appendChild(mobileMenuLinkAbout);

    const ballLogoContainer = document.createElement('div');
    ballLogoContainer.id = 'ball-logo-container';

    const footballOnlyBlueImg = document.createElement('img');
    footballOnlyBlueImg.src = footballLogo;
    footballOnlyBlueImg.alt = 'Ball Logo';
    footballOnlyBlueImg.style.height = '110px';
    ballLogoContainer.appendChild(footballOnlyBlueImg);

    mobileSideBar.appendChild(mobileMenu);
    mobileSideBar.appendChild(ballLogoContainer);

    container.appendChild(mobileSideBar);
}

