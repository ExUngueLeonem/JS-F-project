function slider() {
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

    let carouselIndicators = document.createElement('div');
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
        if (slides.length <= 9) {
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

    slides.forEach((slide) => {
        slide.style.width = width;
    });

    function widthBeautify(width) {
        return Math.ceil(Number.parseFloat(width));
    }

    next.addEventListener('click', () => {
        if (offset >= widthBeautify(width) * (slides.length - 1)) {
            offset = 0;
        } else {
            offset += widthBeautify(width);
        }

        slidesField.style.transform = `translateX(-${offset}px)`;
        //highlightOneDot(slideIndex);
        nextSlide();
    });



    prev.addEventListener('click', () => {
        if (offset <= 0) {

            offset = widthBeautify(width) * (slides.length - 1);
        } else {
            offset -= widthBeautify(width);
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
        allSlideDots.forEach((elem) => {
            elem.style.opacity = '';
        });
        allSlideDots[id - 1].style.opacity = 1;
    }

    // =============== end SLIDER POINTS
}

module.exports = slider;