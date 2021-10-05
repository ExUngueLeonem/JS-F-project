document.addEventListener('DOMContentLoaded', () => {

const tabs = document.querySelectorAll('.tabheader__item'),
      tabcontent = document.querySelectorAll('.tabcontent'),
      tabsParent = document.querySelector('.tabheader__items');

    // console.log(tabcontent[0]);
    //  console.log(tabcontent[1]);
    //  console.log(tabcontent[2]);
    //  console.log(tabcontent[3]);



function hideTabContent(event) {
    //console.log('hideTabContent');
    //tabcontent.forEach( elem => {elem.hidden = true;} );
    tabcontent.forEach( elem => {
        elem.classList.add('hide');
        elem.classList.remove('show', 'fade');
    });

    tabs.forEach( elem => {
        elem.classList.remove('tabheader__item_active');
    });

}

function showTabContent(i = 0) {
    //tabcontent[i].hidden = false;
    //console.log(tabcontent[i]);
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
});

});