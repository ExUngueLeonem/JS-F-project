document.addEventListener('click', hideUl)

function hideUl(event) {
    //document.getElementById('rightArrow')
    let sweet__title = document.getElementById('sweet__title')
    if (event.target == sweet__title){

        document.getElementById('sweet__ul').classList.toggle('hide');
        document.getElementById('sweet__title').classList.toggle('off')
        //#sweet__title.off
    }
}