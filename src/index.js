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
    }else if(currentPath.includes('contact.html')){
        header.classList.add('border-bottom-orange')
    }
}
changeHeaderBorder();



const changeFooterColor = () => {
    const footer = document.querySelector('#footer');

    const currentPath = window.location.pathname;

    if(currentPath.includes('how-to-play.html') || currentPath.includes('where-to-buy.html') || currentPath.includes('contact.html')){
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

    if(currentPath.includes('contact.html') || currentPath.includes('about.html')){
        footer.classList.add('footer-border-top');
        footer.classList.add('footer-add-margin');
    }else if(currentPath.includes('where-to-buy.html')){
        footer.classList.add('border-top-black')
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

const addFooterBorder = () => {
    const footer = document.querySelector('footer');

    const currentPath = window.location.pathname;

    if(currentPath.includes('where-to-buy.html')){
        footer.classList.add('footer-add-border');
    }
}
addFooterBorder();


const addHowManyDropdown = () => {
    const currentPath = window.location.pathname;

    if(currentPath.includes('where-to-buy.html')){
        loadHowManyDropdown();
    }
}
addHowManyDropdown();

const purchaseSubmit = () => {
    const purchaseSubmitBtn = document.querySelector('#purchase-submit-btn');
    const currentPath = window.location.pathname;

    if(currentPath.includes('where-to-buy.html')){

        purchaseSubmitBtn.addEventListener('click', (event) => {
        const pickupDelivery = document.querySelector('#pickup-delivery');
        const selectValue = pickupDelivery.value;

        event.preventDefault();

        sessionStorage.setItem('orderType', selectValue);

        window.location.href = 'thank-you-page.html';
    })
    }

}
purchaseSubmit();

const confirmOrderType = () => {
    const delivery = document.querySelector('#delivery');
    const pickup = document.querySelector('#pickup');

    const currentPath = window.location.pathname;

    if(currentPath.includes('thank-you-page.html')){
        const orderType = sessionStorage.getItem('orderType');
        if(orderType === 'delivery'){
            pickup.classList.add('hidden');
        }else if(orderType === 'pickup'){
            delivery.classList.add('hidden');
        }
    }
}
confirmOrderType();

const changeBackgroundBlue = () => {
    const container = document.querySelector('#container');

    const currentPath = window.location.pathname;

    if(currentPath.includes('thank-you-page.html')){
        container.classList.add('background-blue');
    }

}
changeBackgroundBlue();



// delete border of input
// const toggleInputBorder = () => {


//     const currentPath = window.location.pathname;

//     if(currentPath.includes('where-to-buy.html')){

//     const purchasePageForm = document.querySelector('#purchase-page-form');

//     const inputs = purchasePageForm.querySelectorAll('input');
//     const inputTextAreaSelect = purchasePageForm.querySelectorAll('input, text area, select');

//     inputTextAreaSelect.forEach(element => {
//         element.addEventListener('click', () => {
//             element.classList.add('bg-white');
//         })

//         element.addEventListener('blur', () => {
//             element.classList.remove('bg-white')
//         })
//     })

//     inputs.forEach(input => {
//         input.addEventListener('click', () => {


//             input.classList.remove('add-input-border');

//         })

//         input.addEventListener('blur', () => {
//             input.classList.add('add-input-border')
//         })
//     })

//     }




// }
// toggleInputBorder();







