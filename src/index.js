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

    if(currentPath.includes('how-to-play.html') || currentPath.includes('where-to-buy.html')){
        footer.classList.add('background-blue');
    }
}
changeFooterColor();

const changeFooterTextColor = () => {
    const footer = document.querySelector('#footer');

    const currentPath = window.location.pathname;

    if(currentPath.includes('where-to-buy.html')){
        footer.classList.add('text-white');
    }
}
changeFooterTextColor();


const changeFooterBorder = () => {
    const footer = document.querySelector('#footer');

    const currentPath = window.location.pathname;

    if(currentPath.includes('contact.html')){
        footer.classList.add('footer-border-top');
        footer.classList.add('footer-add-margin');
    }
}
changeFooterBorder();

const changeFooterInstaIcon = () => {
    const instaIcon = document.querySelector('#insta-icon');

    const currentPath = window.location.pathname;

    instaIcon.classList.add('background-black')

    if(currentPath.includes('where-to-buy.html')){
        instaIcon.classList.add('background-white')
    }
}
changeFooterInstaIcon();


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
    const inputTextAreaSelect = purchasePageForm.querySelectorAll('input, text area, select');

    inputTextAreaSelect.forEach(element => {
        element.addEventListener('click', () => {
            element.classList.add('bg-white');
        })

        element.addEventListener('blur', () => {
            element.classList.remove('bg-white')
        })
    })

    inputs.forEach(input => {
        input.addEventListener('click', () => {


            input.classList.remove('add-input-border');

        })

        input.addEventListener('blur', () => {
            input.classList.add('add-input-border')
        })
    })


}
toggleInputBorder();







