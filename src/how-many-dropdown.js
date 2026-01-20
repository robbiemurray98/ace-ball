export const loadHowManyDropdown = () => {
    const howManyContainer = document.querySelector('#how-many-container');

    const label = document.createElement('label')
    label.htmlFor = 'how-many';

    const select = document.createElement('select');
    select.id = 'how-many';
    select.name = 'how-many';

    for(let i = 1; i < 6; i++){
        const option = document.createElement('option');
        option.value = `${i}`;
        option.textContent = `${i}`;
        select.appendChild(option)
    }

    howManyContainer.appendChild(label);
    howManyContainer.appendChild(select);
}

