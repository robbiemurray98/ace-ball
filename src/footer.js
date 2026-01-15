import instaIcon from './images/instagram.svg'
export const loadFooter = () => {
    const container = document.querySelector('#container');

    const footer = document.createElement('footer');

    const copyrightP = document.createElement('p');

    const instaLink = document.createElement('a');
    instaLink.href = 'https://www.instagram.com/aceballcustoms/';
    instaLink.target = '_blank';
    instaLink.rel = 'noopener noreferrer';

    const instaIconDiv = document.createElement('div');
    instaIconDiv.id = 'insta-icon';
    instaIconDiv.style.webkitMaskImage = `url(${instaIcon})`;
    instaIconDiv.style.maskImage = `url(${instaIcon})`;
    instaLink.appendChild(instaIconDiv);

    footer.appendChild(copyrightP);
    footer.appendChild(instaLink);

    container.insertAdjacentElement('beforeend', footer)
}