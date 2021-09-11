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
            constructor(src, alt, title, descr, price, parentSelector, ...classes) {
                this.src = src;
                this.alt = alt;
                this.title = title;
                this.descr = descr;
                this.price = price;
                //this.currency = currency;
                this.parent = document.querySelector(parentSelector);
                this.classes = classes;
                this.transfer = 27;
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
                        <img src="${this.src}" alt="${this.alt}">
                        <h3 class="menu__item-subtitle">${this.title}</h3>
                        <div class="menu__item-descr">${this.descr}</div>
                        <div class="menu__item-divider"></div>
                        <div class="menu__item-price">
                            <div class="menu__item-cost">Цена:</div>
                            <div class="menu__item-total"><span>${this.price}</span>'грн/день'</div>
                        </div>
                `;
        
                //console.log(menuContainer);
                this.parent.append(menuItemDiv);
            }

            changeToUAH(){
                this.price = this.price * this.transfer;
            }

            
        } // -------- class MenuItem


        const getResource = async (url) => {
            const res = await fetch(url);

            if(!res.ok) {
                throw new Error(`Could not fetch ${url}, status: ${res.status}`);
            }

            return await res.json();
        };

        getResource('http://localhost:3000/menu')
            .then(data => {
                data.forEach( ({img, altimg, title, descr, price}) => {
                    new MenuItem(img, altimg, title, descr, price, '.menu__field .container').render();
                });
            });

    // -------- menu item
    
    // Forms отправка данных на сервер

        const forms = document.querySelectorAll('form');

        const message = {
            loading: 'img/form/spinner.svg',
            success: 'Спасибо, скоро мы с вами свяжемся',
            failure: 'Упс... Что-то пошло не так ;(('
        };

        forms.forEach(item => {
            bindPostData(item);
        });


        const postData = async (url, data) => {
            const res = await fetch(url, {
                method: "POST",
                headers: {
                    'Content-type': 'application/json',
                }, 
                body: data
            });

            return await res.json();
        };


        function bindPostData(form) {                                             //функция - запостить дату из формы
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
                
                const json =  JSON.stringify(Object.fromEntries(formData.entries()));

                postData('http://localhost:3000/requests', json)
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
    

        // =============== SLIDER + dots

        const slides = document.querySelectorAll('.offer__slide'),
              prev = document.querySelector('.offer__slider-prev'),
              next = document.querySelector('.offer__slider-next'),
              total = document.querySelector('#total'),
              current = document.querySelector('#current'),
              slidesWrapper = document.querySelector('.offer__slider-wrapper'),
              slidesField = document.querySelector('.offer__slider-inner'),
              width = window.getComputedStyle(slidesWrapper).width;

              prev.style.userSelect = 'none';
              next.style.userSelect = 'none';


        let slideIndex = 1;
        let offset = 0;

            const offerSlider = document.querySelector('.offer__slider');

            offerSlider.style.position = 'relative';

            let carouselIndicators = document.createElement('div') ;
            carouselIndicators.classList.add('carousel-indicators');
            offerSlider.append(carouselIndicators);

            
            slides.forEach((elem, i) => {
                let slideDot = document.createElement('div');
                //slideDot.id = i + 1;
                slideDot.dataset.dotNum = i + 1;

                slideDot.classList.add('dot');
                slideDot.style.userSelect = 'none';
                carouselIndicators.append(slideDot);
            });

            const allSlideDots = offerSlider.querySelectorAll('.dot');
            //highlightOneDot(1);


        function slidesTotalCount() {
            if (slides.length <= 9 ) {
                total.innerText = '0' + slides.length;
            } else {
                total.innerText = slides.length;
            }
        }

        slidesTotalCount();

        slidesField.style.width = 100 * slides.length + '%';
        slidesField.style.display = 'flex';
        slidesField.style.transition = '0.5s all';
        slidesWrapper.style.overflow = 'hidden';

        slides.forEach( (slide) => {
            slide.style.width = width;
        });

        next.addEventListener('click', () => {
            if (offset >= Math.ceil(Number.parseFloat(width)) * (slides.length - 1)) {
                offset = 0;
            } else {
                offset += Math.ceil(Number.parseFloat(width));
            }

            slidesField.style.transform = `translateX(-${offset}px)`;
            //highlightOneDot(slideIndex);
            nextSlide();
        });

        prev.addEventListener('click', () => {
            if (offset <= 0) {
                
                offset = Math.ceil(Number.parseFloat(width)) * (slides.length - 1);
            } else {
                offset -= Math.ceil(Number.parseFloat(width));
            }

            slidesField.style.transform = `translateX(-${offset}px)`;
            //highlightOneDot(slideIndex);
            prevSlide();
        });


        function renderSlideIndex(slideIndex) {
            if (slideIndex < 10) { 
                current.innerText = '0' + (slideIndex);
            } else {
                current.innerText = (slideIndex);
            }
            highlightOneDot(slideIndex);
        }

        renderSlideIndex(slideIndex);

        function nextSlide() {
            slideIndex++;
            if (slideIndex > slides.length) slideIndex = 1;
            renderSlideIndex(slideIndex);
        }

        function prevSlide() {
            slideIndex--;
            if (slideIndex <= 0) slideIndex = slides.length;
            renderSlideIndex(slideIndex);
        }

        // =============== end SLIDER
        // =============== SLIDER POINTS



        document.addEventListener('click', pickUpDot);

        function pickUpDot(event) {
            if (!event.target.classList.contains('dot')) return

            highlightOneDot(event.target.dataset.dotNum);
            
            console.log(event.target.dataset.dotNum);
            let delta = Math.ceil(Number.parseFloat(width)) * (event.target.dataset.dotNum - 1);
            slidesField.style.transform = `translateX(-${delta}px)`;

            renderSlideIndex(event.target.dataset.dotNum);
        }

        function highlightOneDot(id) {
            allSlideDots.forEach((elem) => {elem.style.opacity = '';});
            allSlideDots[id-1].style.opacity = 1;
        }







// =============== end SLIDER POINTS


});