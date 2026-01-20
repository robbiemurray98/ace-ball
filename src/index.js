import "./styles.css";
import { mobileMenu } from "./mobile-menu.js";
import { loadHeader } from "./header.js";
import { loadMobileSidebar } from "./mobileSidebar.js";
import { loadFooter } from "./footer.js";

loadHeader();
loadMobileSidebar();
mobileMenu();
loadFooter();


// 
const changeHeaderBorder = () => {
    const header = document.querySelector('#header');

    const currentPath = window.location.pathname;

    if (currentPath.includes('how-to-play.html')) {
        header.classList.add('header-border-orange');
    }
}
changeHeaderBorder();



const changeFooterColor = () => {
    const footer = document.querySelector('#footer');

    const currentPath = window.location.pathname;

    if(currentPath.includes('how-to-play.html')){
        footer.classList.add('background-blue');
    }
}
changeFooterColor();



const changeFooterBorder = () => {
    const footer = document.querySelector('#footer');

    const currentPath = window.location.pathname;

    if(currentPath.includes('contact.html')){
        footer.classList.add('footer-border-top');
        footer.classList.add('footer-add-margin');
    }
}
changeFooterBorder();





    



