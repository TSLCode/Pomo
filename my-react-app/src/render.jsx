
const renderComponents = () => {
    const headerClose = document.getElementById('header-toggle');
    const header = document.querySelector('header');

    if (!headerClose) {
        console.error('header toggle button (#header-toggle) not found');
        return;
    }
    if (!header) {
        console.error('header element not found');
        return;
    }

    headerClose.addEventListener('click', () => {
        if (header.classList.contains('hidden')) {
            header.classList.remove('hidden');
            header.classList.add('visible');
            headerClose.textContent = '^';
        } else if (header.classList.contains('visible')) {
            header.classList.remove('visible');
            header.classList.add('hidden');
            headerClose.textContent = 'v';
        } else {
            // fallback: make it hidden
            header.classList.add('hidden');
            headerClose.textContent = 'v';
        }
    });
    console.log('elements rendered and event listeners added');
}

document.addEventListener('DOMContentLoaded', () => {
    renderComponents();
})