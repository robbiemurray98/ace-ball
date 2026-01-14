import footballLogo from "./images/football-only-blue.jpg"

export const loadMobileSidebar = () => {
    const container = document.querySelector('#container');

    const mobileSideBar = document.createElement('div');
    mobileSideBar.id = "mobile-side-bar";


    const mobileMenu = document.createElement('div');
    mobileMenu.id = "mobile-menu";

    const mobileMenuLinkWhere = document.createElement('a');
    mobileMenuLinkWhere.textContent = 'Where To Buy';
    const mobileMenuLinkHow = document.createElement('a');
    mobileMenuLinkHow.textContent = 'How To Buy';
    mobileMenuLinkHow.href = 'how-to-play.html';
    const mobileMenuLinkContact = document.createElement('a');
    mobileMenuLinkContact.textContent = 'Contact';
    const mobileMenuLinkAbout = document.createElement('a');
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