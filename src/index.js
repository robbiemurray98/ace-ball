import "./styles.css";
import { mobileMenu } from "./mobile-menu.js";
import { loadMobileSidebar } from "./mobileSidebar.js";
import { checkPurchaseMethod } from "./purchase-form.js";



loadMobileSidebar();
mobileMenu();



const changeHeaderBorder = () => {
    const header = document.querySelector('#header');
    const body = document.body;

    const currentPath = window.location.pathname;

    if(currentPath.includes('contact.html')){
        header.classList.add('border-bottom-orange')
    } else if(currentPath.includes('where-to-buy.html')) {
        // header.classList.add('where-to-buy-header-mobile')
        // desktopHeader.classList.add('where-to-buy-header')
        body.classList.add('background-black')
    }
}
changeHeaderBorder();

const purchasePageStyle = () => {
    const currentPath = window.location.pathname;

    if(currentPath.includes('where-to-buy.html')){
        const footer = document.querySelector('#footer');

        footer.classList.add('purchase-footer')
    }
}
purchasePageStyle()



const changeFooterColor = () => {
    const footer = document.querySelector('#footer');

    const currentPath = window.location.pathname;

    if(currentPath.includes('how-to-play.html') || currentPath.includes('where-to-buy.html') || currentPath.includes('contact.html') || currentPath.includes('about.html')){
        footer.classList.add('background-blue');
    }
}
changeFooterColor();

// const changeFooterTextColor = () => {
//     const footer = document.querySelector('#footer');

//     const currentPath = window.location.pathname;

//     if(currentPath.includes('where-to-buy.html')){
//         footer.classList.add('text-white');
//     }
// }
// changeFooterTextColor();


const changeFooterBorder = () => {
    const footer = document.querySelector('#footer');

    const currentPath = window.location.pathname;

    if(currentPath.includes('contact.html') || currentPath.includes('about.html')){
        footer.classList.add('footer-border-top');
        footer.classList.add('footer-add-margin');
    } else if(currentPath.includes('how-to-play.html')){
        footer.classList.add('purchase-footer-border-small')
    }
}
changeFooterBorder();

const changeFooterInstaIcon = () => {
    const instaIcon = document.querySelector('#insta-icon');

    const currentPath = window.location.pathname;

    if(currentPath.includes('how-to-play.html')){
        instaIcon.classList.add('background-white')
    } else {    
        instaIcon.classList.add('background-black')

    }


    // if(currentPath.includes('where-to-buy.html')){
    //     instaIcon.classList.add('background-white')
    // }
}
changeFooterInstaIcon();


const changeFooterFont = () => {
    const footer = document.querySelector('#footer')
    const currentPath = window.location.pathname;

    if(currentPath.includes('how-to-play.html')) {
        footer.classList.add('color-white')
    }
}
changeFooterFont()


const addFooterBorder = () => {
    const footer = document.querySelector('#footer');

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

// const purchaseSubmit = () => {
//     const purchasePageForm = document.querySelector('#purchase-page-form');
//     const currentPath = window.location.pathname;

//     if(currentPath.includes('where-to-buy.html')){

//         purchasePageForm.addEventListener('submit', () => {
//         const pickupDelivery = document.querySelector('#pickup-delivery');
//         const selectValue = pickupDelivery.value;


//         sessionStorage.setItem('orderType', selectValue);

//     })
//     }

// }
// purchaseSubmit();

// const redirectSubmit = () => {
//     const purchasePageForm = document.querySelector('#purchase-page-form')

//     purchasePageForm.addEventListener('submit', (e) => {
//         if(purchasePageForm.validity.valid){
//             e.preventDefault();
//             window.location.href = 'https://robbiemurray98.github.io/ace-ball/thank-you-page.html';
//         }
//     })
// }
// redirectSubmit()

// const confirmOrderType = () => {
//     const delivery = document.querySelector('#delivery');
//     const pickup = document.querySelector('#pickup');

//     const currentPath = window.location.pathname;

//     if(currentPath.includes('thank-you-page.html')){
//         const orderType = sessionStorage.getItem('orderType');
//         if(orderType === 'delivery'){
//             pickup.classList.add('hidden');
//         }else if(orderType === 'pickup'){
//             delivery.classList.add('hidden');
//         }
//     }
// }
// confirmOrderType();

// const changeBackgroundBlue = () => {
//     const container = document.querySelector('#container');

//     const currentPath = window.location.pathname;

//     document.addEventListener('DOMContentLoaded', () => {
//         if(currentPath.includes('thank-you-page.html')){
//             container.classList.add('background-blue');
//         }
//     })



// }
// changeBackgroundBlue();

const bodyBgBlack = () => {
    const currentPath = document.location.pathname;

    if(currentPath.includes('index.html') || currentPath.includes('how-to-play.html') || currentPath.includes('contact.html') || currentPath.includes('about.html')){
        document.body.classList.add('background-black');
    }
}
bodyBgBlack();

// const purchasePageForm = () => {
//     const currentPath = window.location.pathname;

//     if(currentPath.includes('where-to-buy.html')){
//         checkPurchaseMethod();
//     }
// }

// purchasePageForm();




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


// STRIPE CHECKOUT

const stripe = Stripe('pk_live_51UEH7uF1qnrB31fNR9s300RD3YPkd76Wr0YymHp3ilSsqGphdDpB2BKilyHH52V7PIKjXpRPjhqawB9GG7bmsJ8G00WmvWb7Q8');
const modal = document.querySelector('#checkout-modal')
const closeBtn = document.querySelector('#close-modal-btn')
let checkOutInstance = null;

document.querySelectorAll('.buy-btn').forEach((button) => {
    button.addEventListener('click', async() => {
        const priceId = button.dataset.priceId;
        button.disabled = true;

        try{
            if(checkOutInstance){
                checkOutInstance.destroy();
                checkOutInstance = null;
            }

            modal.showModal()

            const response = await fetch('/.netlify/functions/create-checkout-session', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({priceId})
            })

            const {clientSecret} = await response.json()

            checkOutInstance = await stripe.initEmbeddedCheckout({clientSecret})
            checkOutInstance.mount('#checkout')
        } catch (err){
            console.error('Checkout failed:', err);
            modal.close();
        } finally {
            button.disabled = false;
        }
    })
})

closeBtn.addEventListener('click', () => {
    if(checkOutInstance){
        checkOutInstance.destroy();
        checkOutInstance = null;
    }

    modal.close();
})




// function checkForDuplicate(arr){
//     // loop through an array 
//     // check first array index to see if it matches another
//     // move onto the next 
//     // if an index is equal to another return that index
//     // otherwise return 'no duplicates'

// for(let i = 0; i < arr.length; i++){
//     arr.forEach((element, index) => {
//         if(arr[i] === element && i != index){
//             console.log(arr[i]) 
//             return
//         } 
//     })

//     console.log('no duplicates')
//     return
// }

// }

// const priceList = [
//     'price_1UIyNCF1qnrB31fNINsey3PL',
//     'price_1UIyNAF1qnrB31fNXkhp4FPl',
//     'price_1UIyN8F1qnrB31fNqrPtTjD0',
//     'price_1UIyN5F1qnrB31fNSdOMzBeH',
//     'price_1UIyMzF1qnrB31fNuEY814ho',
//     'price_1UIyNHF1qnrB31fNwSk0Wx2N',
//     'price_1ULBOrF1qnrB31fN5iZC8Ds2',
//     'price_1ULBRZF1qnrB31fNPLPIFvsk',
//     'price_1ULBX5F1qnrB31fNDM7pMBNp',
//     'price_1ULBZ9F1qnrB31fN0usRRicI'
// ]



//     checkForDuplicate(priceList)

// console.log('test')




// create dropdown color option for horizontal/vertical styles

// click style button
// both buttons disappear revealing a title (horizontal/vertical), a dropdown and a cancel button
// once the selection is made a buy button appears which opens stripe modal

// const osuHorBlack = document.createElement('button');
// // osuHorBlack.setAttribute('data-price-id', '')
// const osuHorWhite = document.createElement('button');
// const osuVerBlack = document.createElement('button');
// const osuVerWhite = document.createElement('button');

// const brownsHorBlack = document.createElement('button');
// const brownsHorWhite = document.createElement('button')
// const brownsVerBlack = document.createElement('button')
// const brownsVerWhite = document.createElement('button')






const osuSelectStyleFunction = () => {
    const osuHorBtn = document.querySelector('#osu-hor-btn');
    const osuVerBtn = document.querySelector('#osu-ver-btn');
    const osuContainer = document.querySelector('#osu-select-cont')
    // const osuBackButton = document.querySelector('#osu-back-btn')

    // const osuHorSelect = document.createElement('select');
    // osuHorSelect.id = 'osu-hor-select'
    // const osuVerSelect = document.createElement('select');
    // osuVerSelect.id = 'osu-ver-select'


    const osuHorBlackBtn = document.querySelector('#osu-h-b');
    const osuHorWhiteBtn = document.querySelector('#osu-h-w')

        const horTitle = document.createElement('h5');
        horTitle.textContent = 'Horizontal Style'
        horTitle.style.color = 'white'
        horTitle.style.fontSize = '20px'
        horTitle.style.fontWeight = '600'
        horTitle.classList.add('hidden')

        
        const osuHorSelect = document.createElement('select');
        osuHorSelect.id = 'osu-hor-select'
        osuHorSelect.classList.add('hidden')


        const osuHorBlack = document.createElement('option')
        osuHorBlack.value = 'black'
        osuHorBlack.textContent = 'Black Logo';
        const osuHorWhite = document.createElement('option')
        osuHorWhite.value = 'white'
        osuHorWhite.textContent = 'White Logo'
        const osuHorDefault = document.createElement('option')
        osuHorDefault.textContent = '--Please choose an option--'

        const osuBackBtnCont = document.createElement('div')
        osuBackBtnCont.id = 'osu-back-btn-container'
        

        const osuBackBtn = document.createElement('button')
        osuBackBtn.textContent = '<--'
        osuBackBtn.id = 'osu-back-btn'
        osuBackBtn.classList.add('hidden')

        osuHorSelect.appendChild(osuHorDefault)
        osuHorSelect.appendChild(osuHorBlack)
        osuHorSelect.appendChild(osuHorWhite)
        osuContainer.prepend(osuHorSelect)
        osuContainer.prepend(horTitle)
        
        osuBackBtnCont.appendChild(osuBackBtn)
        osuContainer.appendChild(osuBackBtnCont)


    osuHorBtn.addEventListener('click', () => {




        osuContainer.classList.add('selected-cont')

        horTitle.classList.remove('hidden')
        osuHorSelect.classList.remove('hidden')
        osuHorSelect.selectedIndex = 0

        osuBackBtn.classList.remove('hidden')




        osuHorBtn.classList.add('hidden')
        osuVerBtn.classList.add('hidden')

        // osuBackButton.classList.remove('hidden')








    osuHorSelect.addEventListener('change', (event) => {
            
            const selectedValue = event.target.value;
            console.log(selectedValue)
            if(selectedValue === 'black'){
                osuHorWhiteBtn.classList.add('hidden')
                osuHorBlackBtn.classList.remove('hidden')
            } else if(selectedValue === 'white'){
                osuHorBlackBtn.classList.add('hidden')
                osuHorWhiteBtn.classList.remove('hidden')
            } else if(selectedValue === '--Please choose an option--'){
                osuHorWhiteBtn.classList.add('hidden')
                osuHorBlackBtn.classList.add('hidden')
            }

        })

    const osuSelectBtnArr = [osuHorBlackBtn, osuHorWhiteBtn, osuHorSelect, osuBackBtn]


    osuBackBtn.addEventListener('click', () => {
        osuContainer.classList.remove('selected-cont')
        horTitle.classList.add('hidden')
        osuBackBtn.classList.add('hidden')
        osuSelectBtnArr.forEach(element => element.classList.add('hidden'))

        osuHorBtn.classList.remove('hidden')
        osuVerBtn.classList.remove('hidden')





    })



    })



        const osuVerBlackBtn = document.querySelector('#osu-v-b')
        const osuVerWhiteBtn = document.querySelector('#osu-v-w')
        const osuVerSelect = document.createElement('select');
        osuVerSelect.id = 'osu-ver-select'
        osuVerSelect.classList.add('hidden')

        const verTitle = document.createElement('h5');
        verTitle.textContent = 'Vertical Style'
        verTitle.style.color = 'white'
        verTitle.style.fontSize = '20px'
        verTitle.style.fontWeight = '600'
        verTitle.classList.add('hidden')

        // osuBackBtn.classList.remove('hidden')


        const osuVerBlack = document.createElement('option')
        osuVerBlack.value = 'black'
        osuVerBlack.textContent = 'Black Logo';
        const osuVerWhite = document.createElement('option')
        osuVerWhite.value = 'white'
        osuVerWhite.textContent = 'White Logo'
        const osuVerDefault = document.createElement('option')
        osuVerDefault.textContent = '--Please choose an option--'

        osuVerSelect.appendChild(osuVerDefault)
        osuVerSelect.appendChild(osuVerBlack)
        osuVerSelect.appendChild(osuVerWhite)
        osuContainer.prepend(osuVerSelect)
        osuContainer.prepend(verTitle)


    osuVerBtn.addEventListener('click', () => {

        osuContainer.classList.add('selected-cont')

        verTitle.classList.remove('hidden')
        osuVerSelect.classList.remove('hidden')
        osuBackBtn.classList.remove('hidden')


        osuHorBtn.classList.add('hidden')
        osuVerBtn.classList.add('hidden')

        osuVerSelect.selectedIndex = 0



        osuVerSelect.addEventListener('change', (event) => {
            const selectedValue = event.target.value;
            console.log(selectedValue)
            if(selectedValue === 'black'){
                osuVerWhiteBtn.classList.add('hidden')
                osuVerBlackBtn.classList.remove('hidden')
            } else if(selectedValue === 'white'){
                osuVerBlackBtn.classList.add('hidden')
                osuVerWhiteBtn.classList.remove('hidden')
            } else if(selectedValue === '--Please choose an option--'){
                osuVerBlackBtn.classList.add('hidden')
                osuVerWhiteBtn.classList.add('hidden')
            }
        })

        const osuSelectBtnVerArr = [osuVerBlackBtn, osuVerWhiteBtn, osuVerSelect]

        osuBackBtn.addEventListener('click', () => {
            osuContainer.classList.remove('selected-cont')
            verTitle.classList.add('hidden')
            osuBackBtn.classList.add('hidden')
            osuSelectBtnVerArr.forEach(element => element.classList.add('hidden'))

            osuHorBtn.classList.remove('hidden')
            osuVerBtn.classList.remove('hidden')
        // osuSelectBtnVerArr.forEach(element => console.log(element))




    })
    })
}

osuSelectStyleFunction()




const brownsSelectStyleFunction = () => {
    const brownsHorBtn = document.querySelector('#browns-hor-btn');
    const brownsVerBtn = document.querySelector('#browns-ver-btn');
    const brownsContainer = document.querySelector('#browns-select-cont')

    const horTitle = document.createElement('h5');
    horTitle.textContent = 'Horizontal Style'
    horTitle.style.color = 'white'
    horTitle.style.fontSize = '20px'
    horTitle.style.fontWeight = '600'
    horTitle.classList.add('hidden')

    const brownsHorSelect = document.createElement('select');
    brownsHorSelect.id = 'browns-hor-select'
    brownsHorSelect.classList.add('hidden')

    const brownsHorBlack = document.createElement('option')
    brownsHorBlack.value = 'black'
    brownsHorBlack.textContent = 'Black Logo';
    const brownsHorWhite = document.createElement('option')
    brownsHorWhite.value = 'white'
    brownsHorWhite.textContent = 'White Logo'
    const brownsHorDefault = document.createElement('option')
    brownsHorDefault.textContent = '--Please choose an option--'


    const brownsBackBtnCont = document.createElement('div')
    brownsBackBtnCont.id = 'osu-back-btn-container'
        

    const brownsBackBtn = document.createElement('button')
    brownsBackBtn.textContent = '<--'
    brownsBackBtn.id = 'osu-back-btn'
    brownsBackBtn.classList.add('hidden')

    brownsHorSelect.appendChild(brownsHorDefault)
    brownsHorSelect.appendChild(brownsHorBlack)
    brownsHorSelect.appendChild(brownsHorWhite)
    brownsContainer.prepend(brownsHorSelect)
    brownsContainer.prepend(horTitle)

    brownsBackBtnCont.appendChild(brownsBackBtn)
    brownsContainer.appendChild(brownsBackBtnCont)

    const brownsHorBlackBtn = document.querySelector('#browns-h-b');
    const brownsHorWhiteBtn = document.querySelector('#browns-h-w')

    brownsHorBtn.addEventListener('click', () => {

        brownsContainer.classList.add('selected-cont')
        horTitle.classList.remove('hidden')
        brownsHorSelect.classList.remove('hidden')
        brownsHorSelect.selectedIndex = 0

        brownsBackBtn.classList.remove('hidden')


        brownsHorBtn.classList.add('hidden')
        brownsVerBtn.classList.add('hidden')




        brownsHorSelect.addEventListener('change', (event) => {
            
            const selectedValue = event.target.value;
            console.log(selectedValue)
            if(selectedValue === 'black'){
                brownsHorWhiteBtn.classList.add('hidden')
                brownsHorBlackBtn.classList.remove('hidden')
            } else if(selectedValue === 'white'){
                brownsHorBlackBtn.classList.add('hidden')
                brownsHorWhiteBtn.classList.remove('hidden')
            } else if(selectedValue === '--Please choose an option--'){
                brownsHorBlackBtn.classList.add('hidden')
                brownsHorWhiteBtn.classList.add('hidden')
            }

        })

    const osuSelectBtnArr = [brownsHorBlackBtn, brownsHorWhiteBtn, brownsHorSelect, brownsBackBtn]


    brownsBackBtn.addEventListener('click', () => {
        brownsContainer.classList.remove('selected-cont')
        horTitle.classList.add('hidden')
        brownsBackBtn.classList.add('hidden')
        osuSelectBtnArr.forEach(element => element.classList.add('hidden'))

        brownsHorBtn.classList.remove('hidden')
        brownsVerBtn.classList.remove('hidden')





    })

      

    })

  const brownsVerSelect = document.createElement('select');
  brownsVerSelect.id = 'browns-ver-select'
  brownsVerSelect.classList.add('hidden')

        const verTitle = document.createElement('h5');
        verTitle.textContent = 'Vertical Style'
        verTitle.style.color = 'white'
        verTitle.style.fontSize = '20px'
        verTitle.style.fontWeight = '600'
        verTitle.classList.add('hidden')

        const brownsVerBlack = document.createElement('option')
        brownsVerBlack.value = 'black'
        brownsVerBlack.textContent = 'Black Logo';
        const brownsVerWhite = document.createElement('option')
        brownsVerWhite.value = 'white'
        brownsVerWhite.textContent = 'White Logo'
        const brownsVerDefault = document.createElement('option')
        brownsVerDefault.textContent = '--Please choose an option--'

        brownsVerSelect.appendChild(brownsVerDefault)
        brownsVerSelect.appendChild(brownsVerBlack)
        brownsVerSelect.appendChild(brownsVerWhite)
        brownsContainer.prepend(brownsVerSelect)
        brownsContainer.prepend(verTitle)

        const brownsVerBlackBtn = document.querySelector('#browns-v-b')
        const brownsVerWhiteBtn = document.querySelector('#browns-v-w')

        brownsVerBtn.addEventListener('click', () => {
            brownsContainer.classList.add('selected-cont')

            verTitle.classList.remove('hidden')
            brownsVerSelect.classList.remove('hidden')
            brownsBackBtn.classList.remove('hidden')


            brownsHorBtn.classList.add('hidden')
            brownsVerBtn.classList.add('hidden')

            brownsVerSelect.selectedIndex = 0



            brownsVerSelect.addEventListener('change', (event) => {
                const selectedValue = event.target.value;
                console.log(selectedValue)
                if(selectedValue === 'black'){
                    brownsVerWhiteBtn.classList.add('hidden')
                    brownsVerBlackBtn.classList.remove('hidden')
                } else if(selectedValue === 'white'){
                    brownsVerBlackBtn.classList.add('hidden')
                    brownsVerWhiteBtn.classList.remove('hidden')
                } else if(selectedValue === '--Please choose an option--'){
                    brownsVerBlackBtn.classList.add('hidden')
                    brownsVerWhiteBtn.classList.add('hidden')
                }
            })


        const osuSelectBtnVerArr = [brownsVerBlackBtn, brownsVerWhiteBtn, brownsVerSelect]

        brownsBackBtn.addEventListener('click', () => {
            brownsContainer.classList.remove('selected-cont')
            verTitle.classList.add('hidden')
            brownsBackBtn.classList.add('hidden')
            osuSelectBtnVerArr.forEach(element => element.classList.add('hidden'))

            brownsHorBtn.classList.remove('hidden')
            brownsVerBtn.classList.remove('hidden')
        // osuSelectBtnVerArr.forEach(element => console.log(element))




    })


        })

}

brownsSelectStyleFunction()


// add back or x button that removes dropdown and buy now btn and original buttons reappear
// add title that appears so user knows which option they selected horizontal or vertical style


// create nfl teams select
const nflTeams = ['Arizona Cardinals', 
    'Atlanta Falcons', 'Carolina Panthers', 
    'Chicago Bears', 'Dallas Cowboys', 
    'Detroit Lions', 'Green Bay Packers', 
    'Los Angeles Rams', 'Minnesota Vikings', 
    'New Orleans Saints', 'New York Giants', 
    'Philadelphia Eagles', 'San Francisco 49ers',  
    'Seattle Seahawks', 'Tampa Bay Buccaneers',
    'Washington Commanders', 'Baltimore Ravens',
    'Buffalo Bills', 'Cincinnati Bengals',
    'Cleveland Browns', 'Denver Broncos',
    'Houston Texans', 'Indianapolis Colts',
    'Jacksonville Jaguars', 'Kansas City Chiefs',
    'Las Vegas Raiders', 'Lost Angeles Chargers',
    'Miami Dolphins', 'New England Patriots', 
    "New York Jets", 'Pittsburgh Steelers',
    'Tennessee Titans'

]

const customSelectContainer = document.querySelector('#custom-select-cont')

const customSelect = document.createElement('select')



for(let i = 0; i < nflTeams.length; i++){
    // const option = nflTeams[i]
    const option = document.createElement('option')
    option.textContent = nflTeams[i]
    customSelect.appendChild(option)

}


customSelectContainer.appendChild(customSelect)