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
    
}

hideTabContent();
showTabContent();

tabsParent.addEventListener('click', (event) => {
    const target = event.target;
    if (target && target.classList.contains('tabheader__item')){
        
        tabs.forEach((elem, i) => {
            if (target == elem) {
                hideTabContent();
                showTabContent(i);
            }
        });
    }
}); // -------- end Tabs

// Timer
    const deadLine = '2021-12-06';

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

    // -------- end Timer


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
            if (event.code === 'Escape' && modal.classList.contains('show')){
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
 

    // menu item используем классы для Карточек

        class MenuItem {
            constructor(imageSrc, imageAlt, itemSubtitle, itemDescr, itemTotal, currency, parentSelector, ...classes) {
                this.imageSrc = imageSrc;
                this.imageAlt = imageAlt;
                this.itemSubtitle = itemSubtitle;
                this.itemDescr = itemDescr;
                this.itemTotal = itemTotal;
                this.currency = currency;
                this.transfer = 27;
                this.classes = classes;
                this.parent = document.querySelector(parentSelector);
                this.changeToUAH();
            }

            render() {
                let menuItemDiv = document.createElement('div');

                if (this.classes.length === 0) {
                    this.element = 'menu__item';
                    menuItemDiv.classList.add(this.element);
                } else {
                    this.classes.forEach(className => menuItemDiv.classList.add(className));
                }

                menuItemDiv.innerHTML = `
                        <img src="${this.imageSrc}" alt="${this.imageAlt}">
                        <h3 class="menu__item-subtitle">${this.itemSubtitle}</h3>
                        <div class="menu__item-descr">${this.itemDescr}</div>
                        <div class="menu__item-divider"></div>
                        <div class="menu__item-price">
                            <div class="menu__item-cost">Цена:</div>
                            <div class="menu__item-total"><span>${this.itemTotal}</span> ${this.currency}</div>
                        </div>
                `;
        
                //console.log(menuContainer);
                this.parent.append(menuItemDiv);
            }

            changeToUAH(){
                this.itemTotal = this.itemTotal * this.transfer;
            }

            
        } // -------- class MenuItem


        let menuItem1 = new MenuItem(
            'img/tabs/vegy.jpg',
            'vegy',
            'Меню "Фитнес"',
            'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
            10,
            'грн/день',
            '.menu__field .container',
            'menu__item'
            

        );

        menuItem1.render();

        let menuItem2 = new MenuItem(
            'img/tabs/elite.jpg',
            'elite',
            'Меню “Премиум”',
            'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
            12,
            'грн/день',
            '.menu__field .container',
            'menu__item'
        );

        menuItem2.render();

        let menuItem3 = new MenuItem(
            'img/tabs/post.jpg',
            'post',
            'Меню "Постное"',
            'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков. ',
            8,
            'грн/день',
            '.menu__field .container',
            'menu__item'

        );

        menuItem3.render();


    // -------- menu item
    
    // Forms отправка данных на сервер

        const forms = document.querySelectorAll('form');

        const message = {
            loading: 'img/form/spinner.svg',
            success: 'Спасибо, скоро мы с вами свяжемся',
            failure: 'Упс... Что-то пошло не так ;(('
        };

        forms.forEach(item => {
            postData(item);
        });

        function postData(form) {                                             //функция - запостить дату из формы
            form.addEventListener('submit', (event) => {                      // добавляем слушатель событий
                event.preventDefault();                                       // отменяем стандартное поведение(перезагрузку страницы)

                const statusMessage = document.createElement('img');          //создаем надпись Загрузка
                statusMessage.src = message.loading;
                statusMessage.style.cssText = `
                    display: block;
                    margin: 0 auto;
                `;
                form.insertAdjacentElement('afterend', statusMessage);
 
                const formData = new FormData(form);
                
                const object = {};
                formData.forEach(function(key, value) {
                    object[key] = value;
                });                

                fetch('server.php', {
                    method: "POST",
                    headers: {
                        'Content-type': 'application/json',
                    }, 
                    body: JSON.stringify(object)
                })
                .then( data => data.text())
                .then( data => {
                    console.log(data);
                    showThanksModal(message.success);
                    statusMessage.remove();
                })
                .catch( () => {
                    showThanksModal(message.failure);
                })
                .finally( () => {
                    form.reset();
                });
            });
        }        

        function showThanksModal(message) {
            const prevModalDialog = document.querySelector('.modal__dialog');

            prevModalDialog.classList.add('hide');
            openModal();

            const thanksModal = document.createElement('div');
            thanksModal.classList.add('modal__dialog');
            thanksModal.innerHTML = `
                <div class="modal__content">
                        <div data-close class="modal__close">&times;</div>
                        <div class="modal__title">${message}</div>
                </div>
            `;

            document.querySelector('.modal').append(thanksModal);

            setTimeout( () => {
                thanksModal.remove();
                prevModalDialog.classList.add('show');
                prevModalDialog.classList.remove('hide');
                closeModal();
            }, 4000);
        }
    
    
});