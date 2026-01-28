import menuIcon  from "./images/menu.svg";
import exitIcon from "./images/exit.svg";
import logo from "./images/ace-ball-logo-black-blue.jpg"
// import template from "./template.html"


// replace the content within the header when making a desktop version


// const createHeader = () => {
    
// }


const container = document.querySelector('#container');

export const loadDesktopHeader = () => {
    const header = document.createElement('header');
    header.id = 'desktop-header';

    const logoContainer = document.createElement('div');
    logoContainer.id = 'logo-container';
    const logoLink = document.createElement('a');
    logoLink.href = 'index.html';
    logoLink.id = 'logo-link';
    const headerLogo = document.createElement('img');
    headerLogo.src = logo;
    headerLogo.alt = 'Logo';
    headerLogo.style.height = '60px';
    logoLink.appendChild(headerLogo);
    logoContainer.appendChild(logoLink)
    header.appendChild(logoContainer);

    const div = document.createElement('div');
    div.id = 'desktop-header-link-cont';
    const whereLink = document.createElement('a');
    whereLink.href = 'where-to-buy.html'
    whereLink.textContent = 'WHERE TO BUY';
    const howLink = document.createElement('a');
    howLink.href = 'how-to-play.html';
    howLink.textContent = 'HOW TO PLAY';
    const contactLink = document.createElement('a');
    contactLink.href = 'contact.html';
    contactLink.textContent = 'CONTACT';
    const aboutLink = document.createElement('a');
    aboutLink.href = 'about.html';
    aboutLink.textContent = 'ABOUT';

    div.appendChild(whereLink);
    div.appendChild(howLink);
    div.appendChild(contactLink);
    div.appendChild(aboutLink);

    header.appendChild(div)


    container.insertAdjacentElement('afterbegin', header);


}



// export const loadDesktopHeader = () => {
//     const header = document.createElement('header');
//     header.id = 'desktop-header';

//     const logoContainer = document.createElement('div');
//     const logoLink = document.createElement('a');
//     logoLink.href = 'index.html';
//     logoLink.id = 'logo-link';
//     const headerLogo = document.createElement('img');
//     headerLogo.src = logo;
//     headerLogo.alt = 'Logo';
//     headerLogo.style.height = '60px';
//     logoLink.appendChild(headerLogo);
//     logoContainer.appendChild(logoLink);
//     header.appendChild(logoContainer);

//     const div = document.createElement('div');
//     div.id = 'desktop-header-link-cont';
//     const whereLink = document.createElement('a');
//     whereLink.href = 'where-to-buy.html'
//     whereLink.textContent = 'Where to buy';
//     const howLink = document.createElement('a');
//     howLink.href = 'how-to-play.html';
//     howLink.textContent = 'How to play';
//     const contactLink = document.createElement('a');
//     contactLink.href = 'contact.html';
//     contactLink.textContent = 'Contact';
//     const aboutLink = document.createElement('a');
//     aboutLink.href = 'about.html';
//     aboutLink.textContent = 'About';

//     div.appendChild(whereLink);
//     div.appendChild(howLink);
//     div.appendChild(contactLink);
//     div.appendChild(aboutLink);

//     header.appendChild(div);

//     container.insertAdjacentElement('afterbegin', header);


// }

export const loadHeader = () => {


    const header = document.createElement('header');
    header.id = 'header';

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

    container.insertAdjacentElement('afterbegin', header);
}




