export const loadChangeHeaderBorder = () => {
    const header = document.querySelector('#header');

    const currentPath = window.location.pathname;

    if (currentPath.includes('how-to-play.html')) {
        header.classList.add('header-border-orange');
    }
}