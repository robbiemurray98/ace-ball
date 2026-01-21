import "./styles.css";
import { mobileMenu } from "./mobile-menu.js";
import { loadHeader } from "./header.js";
import { loadMobileSidebar } from "./mobileSidebar.js";
import { loadFooter } from "./footer.js";
import { loadHowManyDropdown } from "./how-many-dropdown.js"

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


const addHowManyDropdown = () => {
    const currentPath = window.location.pathname;

    if(currentPath.includes('where-to-buy.html')){
        loadHowManyDropdown();
    }
}
addHowManyDropdown();



// delete border of input
const toggleInputBorder = () => {
    const purchasePageForm = document.querySelector('#purchase-page-form');

    const inputs = purchasePageForm.querySelectorAll('input');

    inputs.forEach(input => {
        input.addEventListener('click', () => {


            input.classList.remove('add-input-border')
        })

        input.addEventListener('blur', () => {
            input.classList.add('add-input-border')
        })
    })


}
toggleInputBorder();







