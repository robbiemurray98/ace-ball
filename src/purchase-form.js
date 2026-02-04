export const checkPurchaseMethod = () => {
    const pickupDelivery = document.querySelector('#pickup-delivery');

    pickupDelivery.addEventListener('change', (event) => {
        const value = event.target.value;


        const streetAddress = document.querySelector('#street-address-container');
        const cityState = document.querySelector('#city-state-container');
        const postalCode = document.querySelector('#postal-code-container')

        if(value === 'pickup'){
            streetAddress.classList.remove('flex');
            cityState.classList.remove('flex');
            postalCode.classList.remove('flex')

            streetAddress.classList.add('hidden')
            cityState.classList.add('hidden');
            postalCode.classList.add('hidden');

        } else if(value === 'delivery'){
            streetAddress.classList.remove('hidden');
            cityState.classList.remove('hidden');
            postalCode.classList.remove('hidden');
            
            streetAddress.classList.add('flex');
            cityState.classList.add('flex');
            postalCode.classList.add('flex');
    }
    })

}