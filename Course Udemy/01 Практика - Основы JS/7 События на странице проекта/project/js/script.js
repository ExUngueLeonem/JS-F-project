/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */


'use strict';

document.addEventListener('DOMContentLoaded', () => { 

    
    const movieDB = {
        movies: [
            "Логан", 
            "Лига справедливости",
            "Ла-ла лэнд",
            "Горячие хохлушки 7",
            "Скотт Пилигрим против всех",
            "Ялки 2"
        ]
    };
    
    //удаляем рекламу
    function removeADS() {
        document.querySelectorAll('.promo__adv img').forEach((elem) => elem.remove());
    }
    
    removeADS();
    
    //ставим ДРАМА к фильму
    function changeMainGenre(genreText) {
        document.querySelector('.promo__genre').textContent = genreText;
    }
    
    changeMainGenre('драма');
    
    //меняем бэкграунд основной картинки
    function changeMainBg(url) {
        let promoBg = document.querySelector('.promo__bg');
        promoBg.style.backgroundImage = `url(${url})`;
    }
    
    changeMainBg("img/bg.jpg");
    
    //меняем фильм Лист по объекту
    function changeFilmList(dbObject) {
        let filmList = document.querySelector('.promo__interactive-list');
        filmList.innerHTML = '';
        dbObject.movies.sort();
        
        dbObject.movies.forEach( (film, i) => {
            
            if (film.length > 21) {
                film = film.substring(0, 18) + '...';
            }
            
            //console.log(film.length);
            filmList.innerHTML += `
            <li class="promo__interactive-item">${i + 1}) ${film}
            <div class="delete"></div>
            </li>
            `; 
        });
    }

    changeFilmList(movieDB);


    document.addEventListener('click', addFilmInDB);

    let form = document.querySelector('form.add');
    let formSubmitBtn = form.querySelector('button');
    let formCheckbox = form[1];
    let formFilmName = form[0];
    //console.log(formSubmitBtn);

    function addFilmInDB(event) {
        
        if (event.target != formSubmitBtn) return
        
        event.preventDefault();
        //console.log(form[0].value, form[1].checked);
        
        if (formFilmName.value) {
            movieDB.movies.push(formFilmName.value);
            
            changeFilmList(movieDB);
            formFilmName.value = '';
        }
        
        if (formCheckbox.checked) console.log("Добавляем любимый фильм");
        
    }

    document.addEventListener('click', removeFilmItem);

    function removeFilmItem(event) {
        if (!event.target.classList.contains('delete')) return

        let filmList = document.querySelector('.promo__interactive-list');
        let filmItems = filmList.querySelectorAll('.promo__interactive-item');
        

        filmItems.forEach((elem, i) => {
           if(elem == event.target.parentElement) {
            movieDB.movies.splice(i, 1);
           }
        });
       
        event.target.parentElement.remove();
        changeFilmList(movieDB);

        
        console.log(movieDB.movies);    
    }



});//DOMContentLoaded



