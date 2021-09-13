function calc() {
    // ===============  CALCULATOR
    const result = document.querySelector('.calculating__result span');

    let sex, height, weight, age, ratio;

    let inputsCalc = document.querySelectorAll('input.calculating__choose-item');

    inputsCalc.forEach(elem => {
        elem.value = '';
        if (localStorage.getItem(elem.id)) {
            elem.value = localStorage.getItem(elem.id);
            console.log(elem.id);
        }
    });

    height = localStorage.getItem('height');
    weight = localStorage.getItem('weight');
    age = localStorage.getItem('age');

    if (localStorage.getItem('sex')) {
        sex = localStorage.getItem('sex');

    } else {
        sex = 'female';
        sex = localStorage.setItem('sex', sex);
    }


    if (localStorage.getItem('ratio')) {
        ratio = localStorage.getItem('ratio');
    } else {
        ratio = 1.375;
        ratio = localStorage.setItem('ratio', ratio);
    }

    function initLocalSettings(selector, activeClass) {
        const elements = document.querySelectorAll(selector);

        elements.forEach(elem => {
            elem.classList.remove(activeClass);

            if (elem.getAttribute('id') === localStorage.getItem('sex')) {
                elem.classList.add(activeClass);
            }

            if (elem.getAttribute('data-ratio') === localStorage.getItem('ratio')) {
                elem.classList.add(activeClass);
            }

        });
    }

    initLocalSettings('#gender div', 'calculating__choose-item_active');
    initLocalSettings('.calculating__choose_big div', 'calculating__choose-item_active');


    function calcTotal() {
        if (!sex || !height || !weight || !age || !ratio) {
            result.textContent = '---- ';
            return
        }

        if (sex === 'female') {
            result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio);
        } else {
            result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio);
        }
    }

    calcTotal();

    function getStaticInformation(selector, activeClass) {
        const elements = document.querySelectorAll(`${selector}`);

        elements.forEach(elem => {
            elem.addEventListener('click', (event) => {
                if (event.target.getAttribute('data-ratio')) {
                    ratio = +event.target.getAttribute('data-ratio');
                    localStorage.setItem('ratio', ratio);
                } else {
                    sex = event.target.getAttribute('id');
                    localStorage.setItem('sex', sex);
                }

                console.log(ratio, sex);

                elements.forEach(elem => {
                    elem.classList.remove(`${activeClass}`);
                });

                event.target.classList.add(`${activeClass}`);

                calcTotal();
            });
        });
    }

    getStaticInformation('#gender div', 'calculating__choose-item_active');
    getStaticInformation('.calculating__choose_big div', 'calculating__choose-item_active');

    function getDinamicInformation(selector) {
        const input = document.querySelector(selector);

        input.addEventListener('input', () => {

            console.log(sex, height, weight, age, ratio);

            if (input.value.match(/\D/g)) {
                input.style.border = '1px solid red';
            } else {
                input.style.border = '';
            }

            switch (input.getAttribute('id')) {
                case 'height':
                    height = +input.value;
                    localStorage.setItem('height', height)
                    break;
                case 'weight':
                    weight = +input.value;
                    localStorage.setItem('weight', weight)
                    break;
                case 'age':
                    age = +input.value;
                    localStorage.setItem('age', age)
                    break;
            }

            calcTotal(); //возможно неправильно 
        });
    }

    getDinamicInformation('#height');
    getDinamicInformation('#weight');
    getDinamicInformation('#age');

    console.log(sex, height, weight, age, ratio);
    console.log(localStorage.getItem('height'));

    calcTotal();

    // =============== end CALCULATOR
}

export default calc;