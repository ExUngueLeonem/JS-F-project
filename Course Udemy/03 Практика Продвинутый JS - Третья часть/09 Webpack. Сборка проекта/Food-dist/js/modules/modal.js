function modal() {
    // modal Udemy

    const modalTrigger = document.querySelectorAll('[data-modal]'),
          modal = document.querySelector('.modal');
    //modalCloseBtn = document.querySelector('[data-close]');

    //console.log(modalTrigger);

    modalTrigger.forEach(elem => elem.addEventListener('click', openModal));

    function openModal() {
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';

    }

    function closeModal() {
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = '';
        clearInterval(timerModalId);
    }

    //modalCloseBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', (event) => {
        if (event.target === modal || event.target.hasAttribute('data-close')) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.code === 'Escape' && modal.classList.contains('show')) {
            closeModal();
        }
    });

    let timerModalId = setTimeout(openModal, 15000);

    document.addEventListener('scroll', openModalOnScroll);

    function openModalOnScroll(event) {

        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
            openModal();
            document.removeEventListener('scroll', openModalOnScroll);
        }
    }
    //  -------- modal Udemy

}

module.exports = modal;