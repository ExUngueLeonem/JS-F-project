import calc from './modules/calc';
import cards from './modules/cards';
import forms from './modules/forms';
import modal from './modules/modal';
import slider from './modules/slider';
import tabs from './modules/tabs';
import timer from './modules/timer';
import {openModal} from './modules/modal';

document.addEventListener('DOMContentLoaded', () => {

    const timerModalId = setTimeout( () => openModal('.modal', timerModalId), 15000);

    calc();
    cards();
    forms('form', timerModalId);
    modal('[data-modal]', '.modal', timerModalId);
    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    timer('.timer', '2021-12-06');
    slider({
        container: '.offer__slider', 
        nextArrow: '.offer__slider-next', 
        prevArrow: '.offer__slider-prev', 
        slide: '.offer__slide', 
        totalCounter: '#total', 
        currentCounter: '#current', 
        wrapper: '.offer__slider-wrapper', 
        field: '.offer__slider-inner'
    });
});