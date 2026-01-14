import menuIcon  from "./images/menu.svg";
import exitIcon from "./images/exit.svg";
import logo from "./images/ace-ball-logo-black-blue.jpg"

export const loadHeader = () => {
    const container = document.querySelector('#container');

    const header = document.createElement('header');
    container.insertAdjacentElement('afterbegin', header);

    const headerLogo = document.createElement('img');
    headerLogo.src = logo;
    headerLogo.alt = 'Logo';
    headerLogo.style.height = '60px';
    header.appendChild(headerLogo);

    const mobileMenuButton = document.createElement('button');
    mobileMenuButton.id = 'mobile-menu-button';

    

    // const menuIconImg = `<img src="${menuIcon}" alt="menu" id="header-menu-icon" height="35px" width="35px">`
    // const menuIconImg = document.createElement('img');
    // menuIconImg.src = `${menuIcon}`;
    // menuIconImg.alt = 'menu';
    // menuIconImg.id = 'header-menu-icon';
    // menuIconImg.style.height = '35px';
    // menuIconImg.style.width = '35px';
    // mobileMenuButton.appendChild(menuIconImg)
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
