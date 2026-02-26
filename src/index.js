import "./styles.css";
import { mobileMenu } from "./mobile-menu.js";
import { loadMobileSidebar } from "./mobileSidebar.js";
import { checkPurchaseMethod } from "./purchase-form.js";


loadMobileSidebar();
mobileMenu();



const changeHeaderBorder = () => {
    const header = document.querySelector('#header');
    const desktopHeader = document.querySelector('#desktop-header')
    const body = document.body;

    const currentPath = window.location.pathname;

    if (currentPath.includes('how-to-play.html')) {
        header.classList.add('header-border-orange');
    }else if(currentPath.includes('contact.html')){
        header.classList.add('border-bottom-orange')
    } else if(currentPath.includes('where-to-buy.html')) {
        header.classList.add('where-to-buy-header-mobile')
        desktopHeader.classList.add('where-to-buy-header')
        body.classList.add('background-black')
    }
}
changeHeaderBorder();



const changeFooterColor = () => {
    const footer = document.querySelector('#footer');

    const currentPath = window.location.pathname;

    if(currentPath.includes('how-to-play.html') || currentPath.includes('where-to-buy.html') || currentPath.includes('contact.html') || currentPath.includes('about.html')){
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
    }else if(currentPath.includes('about.html')){
        footer.classList.remove('footer-border-top')
        footer.classList.add('about-border-black')
    }
}
addFooterBorder();


// const addHowManyDropdown = () => {
//     const currentPath = window.location.pathname;

//     if(currentPath.includes('where-to-buy.html')){
//         loadHowManyDropdown();
//     }
// }
// addHowManyDropdown();

const purchaseSubmit = () => {
    const purchasePageForm = document.querySelector('#purchase-page-form');
    const currentPath = window.location.pathname;

    if(currentPath.includes('where-to-buy.html')){

        purchasePageForm.addEventListener('submit', () => {
        const pickupDelivery = document.querySelector('#pickup-delivery');
        const selectValue = pickupDelivery.value;


        sessionStorage.setItem('orderType', selectValue);

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


const purchasePageForm = () => {
    const currentPath = window.location.pathname;

    if(currentPath.includes('where-to-buy.html')){
        checkPurchaseMethod();
    }
}

purchasePageForm();




const handleLandingPageForm = () => {
    const currentPath = window.location.pathname;
    const landingForm = document.querySelector('#landing-contact-form');

    if(currentPath.includes('index.html')){
        landingForm.addEventListener('submit', async function(event){
            event.preventDefault();

            const formData = new FormData(event.target);
            const data = Object.fromEntries(formData.entries());

            try {
                const response = await fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    headers: {
                        'content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                });

                if(response.ok){
                    landingForm.reset();
                    console.log('Form submitted successfully');
                } else{
                    const result = await response.json();
                    console.error('Form submission failed', result.message, result)
                }
            } catch(error){
                console.error('Error during form submission:', error);
            }
        });


        const modal = document.querySelector('#landing-modal')
        const closeModal = document.querySelector('.close-button');


        const formElements = landingForm.querySelectorAll('input, textarea');

        function isFormEmpty(){
            for(let i = 0; i < formElements.length; i++){
            const element = formElements[i];

            if(element.type === 'submit' || element.type === 'hidden' || element.className === 'not-required')  {
                continue
            } 

            if(element.value.trim() === ''){
                return true;
            }
        }

        modal.showModal();

        }

    landingForm.addEventListener('submit', () => {

        isFormEmpty();

    closeModal.addEventListener('click', () => {
        modal.close();
    })
    })
    }
}


handleLandingPageForm();






const handleContactPageForm = () => {
    const currentPath = window.location.pathname;

    if(currentPath.includes('contact.html')){
        document.querySelector('#contact-page-form').addEventListener('submit', async function(event){
        event.preventDefault();

        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if(response.ok) {
                contactForm.reset();
                console.log('Form submitted successfully!');
            } else {
                const result = await response.json();
                console.error('Form submission failed:', result.message, result)
            }
        } catch(error) {
            console.error('Error during form submission:', error);
        }
    });


        const contactForm = document.querySelector('#contact-page-form');

        const modal = document.querySelector('#modal')
        const closeModal = document.querySelector('.close-button');


        const formElements = contactForm.querySelectorAll('input, textarea');

        function isFormEmpty(){
            for(let i = 0; i < formElements.length; i++){
            const element = formElements[i];

            if(element.type === 'submit' || element.type === 'hidden' || element.className === 'not-required')  {
                continue
            } 

            if(element.value.trim() === ''){
                return true;
            }
        }

        modal.showModal();

        // contactForm.addEventListener('submit', function(event){
        //     contactForm.reset();
        // })
    }

    contactForm.addEventListener('submit', () => {

        isFormEmpty();

    closeModal.addEventListener('click', () => {
        modal.close();
    })
    })


    }
}

handleContactPageForm();





function preventScroll(){
    const openMenuButton = document.querySelector('#header-menu-icon')
    const closeMenuButton = document.querySelector('#header-exit-icon')

    openMenuButton.addEventListener('click', () => {
        document.documentElement.classList.add('on-scroll');
        document.body.classList.add('no-scroll')
    });

    closeMenuButton.addEventListener('click', () => {
        document.documentElement.classList.remove('no-scroll')
        document.body.classList.remove('no-scroll')
    })

}

preventScroll();





