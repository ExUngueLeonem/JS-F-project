function openModal(modalSelector, timerModalId) {
    const modal = document.querySelector(modalSelector);

    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';
    
    console.log('timerModalId', timerModalId);
    if (timerModalId) {
        clearInterval(timerModalId);
    }
}

function closeModal(modalSelector) {
    const modal = document.querySelector(modalSelector);
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
}
//'[data-modal]'
function modal(triggerSelector, modalSelector, timerModalId) {
    // modal Udemy

    const modalTrigger = document.querySelectorAll(triggerSelector),
          modal = document.querySelector(modalSelector);
    //modalCloseBtn = document.querySelector('[data-close]');

    //console.log(modalTrigger);

    modalTrigger.forEach(elem => {
        elem.addEventListener('click', () => openModal(modalSelector, timerModalId));
    });


    //modalCloseBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', (event) => {
        if (event.target === modal || event.target.hasAttribute('data-close')) {
            closeModal(modalSelector);
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.code === 'Escape' && modal.classList.contains('show')) {
            closeModal(modalSelector);
        }
    });


    document.addEventListener('scroll',() => openModalOnScroll(modalSelector));

    function openModalOnScroll(modalSelector) {

        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
            openModal(modalSelector, timerModalId);
            document.removeEventListener('scroll', openModalOnScroll);
        }
    }
    //  -------- modal Udemy

}

export default modal;
export {closeModal};
export {openModal};