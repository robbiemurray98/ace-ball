
export const mobileMenu = function(){
    const mobileMenuButton = document.querySelector('#mobile-menu-button');
    const mobileMenuCloseButton = document.querySelector('#mobile-menu-exit-button');

    function toggleMenu(){
        const menu = document.querySelector('#mobile-side-bar');
        menu.classList.toggle('active');
        mobileMenuButton.classList.toggle('hidden');
        mobileMenuCloseButton.classList.remove('hidden')
    }

    function closeMenu(){
        const menu = document.querySelector('#mobile-side-bar');
        menu.classList.remove('active')
        mobileMenuCloseButton.classList.toggle('hidden');
        mobileMenuButton.classList.remove('hidden');
    }

    mobileMenuButton.addEventListener('click' , () => {
        toggleMenu();
    })

    mobileMenuCloseButton.addEventListener('click', () => {
        closeMenu();
    })
}