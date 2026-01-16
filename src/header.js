import menuIcon  from "./images/menu.svg";
import exitIcon from "./images/exit.svg";
import logo from "./images/ace-ball-logo-black-blue.jpg"
// import template from "./template.html"

export const loadHeader = () => {
    const container = document.querySelector('#container');

    const header = document.createElement('header');
    header.id = 'header';
    container.insertAdjacentElement('afterbegin', header);

    const logoLink = document.createElement('a');
    logoLink.href = 'index.html';
    logoLink.id = 'logo-link';
    const headerLogo = document.createElement('img');
    headerLogo.src = logo;
    headerLogo.alt = 'Logo';
    headerLogo.style.height = '60px';
    logoLink.appendChild(headerLogo);
    header.appendChild(logoLink);

    const mobileMenuButton = document.createElement('button');
    mobileMenuButton.id = 'mobile-menu-button';

    const menuIconDiv = document.createElement('div');
    menuIconDiv.id = 'header-menu-icon';
    menuIconDiv.style.webkitMaskImage = `url('${menuIcon}')`
    menuIconDiv.style.maskImage = `url('${menuIcon}')`;
    mobileMenuButton.appendChild(menuIconDiv);
    header.appendChild(mobileMenuButton);

    const mobileMenuExitButton = document.createElement('button');
    mobileMenuExitButton.id = 'mobile-menu-exit-button';
    mobileMenuExitButton.classList.add('hidden');

    const exitIconDiv = document.createElement('div');
    exitIconDiv.id = 'header-exit-icon';
    exitIconDiv.style.webkitMaskImage = `url('${exitIcon}')`;
    exitIconDiv.style.maskImage = `url('${exitIcon}')`
    mobileMenuExitButton.appendChild(exitIconDiv);
    header.appendChild(mobileMenuExitButton);




}
