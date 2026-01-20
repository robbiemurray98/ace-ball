import instaIcon from './images/instagram.svg'
export const loadFooter = () => {
    const container = document.querySelector('#container');

    const footer = document.createElement('footer');
    footer.id = 'footer';

    const contactDiv = document.createElement('div');
    contactDiv.id = 'contact-div'

    const contactHeaderThree = document.createElement('h3');
    contactHeaderThree.textContent = 'Contact';

    const contactP = document.createElement('p');
    contactP.textContent = 'aaron@aceball.com';

    contactDiv.appendChild(contactHeaderThree);
    contactDiv.appendChild(contactP);
    footer.appendChild(contactDiv);


    const copyrightP = document.createElement('p');
    copyrightP.id = 'copyright-p';
    copyrightP.textContent = '© 2026 Ace Ball. All Rights Reserved. Patent Pending.'

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