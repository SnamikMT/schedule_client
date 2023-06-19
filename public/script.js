const buttonElem = document.querySelector('.btn_main');
const buttonElem2 = document.querySelector('.callback');
const modalElem = document.querySelector('.modal');

modalElem.style.cssText = `
    display: flex;
    visibility: hidden;
    opacity: 0;
    transition: opacity 300ms ease-in-out;
`;

const closeModal = event => {
    const target = event.target;

    if (target === modalElem || target.closest('.btn_close')){
        
        modalElem.style.opacity = 0;

        setTimeout(() => {
        modalElem.style.visibility = 'hidden';
        }, 300)

        window.location.reload();
    }
}

const openModal =  () => {
    modalElem.style.visibility = 'visible';
    modalElem.style.opacity = 1;
}

buttonElem.addEventListener('click', openModal);
buttonElem2.addEventListener('click', openModal);
modalElem.addEventListener('click', closeModal);