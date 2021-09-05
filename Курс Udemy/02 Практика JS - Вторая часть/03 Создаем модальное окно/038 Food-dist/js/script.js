document.addEventListener('DOMContentLoaded', () => {

    // Tabs
const tabs = document.querySelectorAll('.tabheader__item'),
      tabcontent = document.querySelectorAll('.tabcontent'),
      tabsParent = document.querySelector('.tabheader__items');




function hideTabContent(event) {
    tabcontent.forEach( elem => {
        elem.classList.add('hide');
        elem.classList.remove('show', 'fade');
    });

    tabs.forEach( elem => {
        elem.classList.remove('tabheader__item_active');
    });

}

function showTabContent(i = 0) {
    tabcontent[i].classList.add('show', 'fade');
    tabcontent[i].classList.remove('hide');
    tabs[i].classList.add('tabheader__item_active');
    console.log('showTabContent');
}

hideTabContent();
showTabContent();

tabsParent.addEventListener('click', (event) => {
    const target = event.target;
    if (target && target.classList.contains('tabheader__item')){
        //console.log(target);
        tabs.forEach((elem, i) => {
            if (target == elem) {
                hideTabContent();
                showTabContent(i);
            }
        });
    }
}); // end Tabs

// Timer
    const deadLine = '2021-09-06';

    function getTimeRemaining(endTime) {
        const t = Date.parse(endTime) - Date.parse(new Date()),
              days = Math.floor(t / (1000 * 60 * 60 * 24)),
              hours = Math.floor(( t / (1000 * 60 * 60) % 24)),
              minutes = Math.floor((t / 1000 / 60 ) % 60 ),
              seconds = Math.floor( t / 1000 % 60);
        
        return {
            'total': t,
            'days': days, 
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function setClock(selector, endTime) {
        const timer = document.querySelector(selector),
                days = timer.querySelector('#days'),
                hours = timer.querySelector('#hours'),
                minutes = timer.querySelector('#minutes'),
                seconds = timer.querySelector('#seconds'),
                timeInterval = setInterval(updateClock, 1000);

                updateClock();

        function getZero(num) {
            if (num >= 0 && num < 10) {
                return `0${num}`;
            } else {
                return num;
            }
            
        }

        function updateClock() {
            const t = getTimeRemaining(endTime);

            days.textContent = getZero(t.days);
            hours.textContent = getZero(t.hours);
            minutes.textContent = getZero(t.minutes);
            seconds.textContent = getZero(t.seconds);

            if (t.total <= 0 ) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock('.timer', deadLine);

    // end Timer

    // Modal window
 /* 
    document.addEventListener('click', showModalWindow);



    function showModalWindow(event) {
        event.preventDefault();
        
        if (event.target && event.target.dataset.modal == '') {
            // console.log(event.target);
            document.querySelector('div.modal').style.display = 'block';
            document.body.style.overflow = 'hidden';
            

        }
        
    }

    document.addEventListener('click', closeModalWindow);

    function closeModalWindow(event) {
        if (event.target && event.target.classList.contains('modal__close')) {
            document.querySelector('div.modal').style.display = '';
            document.body.style.overflow = '';
            
        }
    }
 
 */
    // end of Modal window

    // modal Udemy

    const modalTrigger = document.querySelector('[data-modal]'),
          modal = document.querySelector('.modal'),
          modalCloseBtn = document.querySelector('[data-close]');

          modalTrigger.addEventListener('click', () => {
              modal.classList.add('show');
              modal.classList.remove('hide');
              document.body.style.overflow = 'hidden';

          });

          function closeModal() {
            modal.classList.add('hide');
            modal.classList.remove('show');
            document.body.style.overflow = '';
          }

          modalCloseBtn.addEventListener('click', closeModal);

        modal.addEventListener('click', (event) => {
            if (event.target === modal) {
                closeModal();
            }
        });

        document.addEventListener('keydown', (event) => {
            if (event.code === 'Escape' && modal.classList.contains('show')){
                closeModal();            
            }
        });
    // end modal Udemy
 
});