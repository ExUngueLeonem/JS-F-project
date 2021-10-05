/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';

const personalMovieDb = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,

    start: function () {
        this.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

        while (this.count == '' || this.count == null || isNaN(this.count)) {
            this.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },

    detectPersonaLevel: function () {
        (this.count < 10) ? console.log('Просмотрено довольно мало фильмов'):
            (this.count >= 10 && this.count < 30) ? console.log('Вы классический зритель') :
            (this.count >= 30 && this.count < 50) ? console.log('Вы смотрите очень много фильмов') :
            (this.count >= 50) ? console.log('Вы киноман') : console.log('Сложно было ввести нормально?');
    },

    rememberMyFilms: function () {

        for (let i = 0; i < this.count; i++) {
            let film = prompt('Один из последних просмотренных фильмов', '');
            let ladder = prompt('На сколько оцените его?', '');

            if (film != null && ladder != null &&
                film != '' && ladder != '' && film.length < 50) {
                this.movies[film] = ladder;
            } else {
                console.log('error');
                i--;
            }
        }
    },

    showMyDB: function () {
        if (!this.private) {
            console.log(this);
        }
    },

    writeYourGenres: function () {
        let genre;

            genre = prompt(`Ваши любимые жанры кинофильмов (через запятую)`, '');

            if (genre != '' && genre != null) {
                this.genres = genre.split(', ');
            } else {
                console.log('введите нормально');
            }
        
        this.genres.forEach( function(genre, i) {
            console.log(`Любимый жанр номер ${i + 1 } это ${genre}`);
            
        });


    },

    toggleVisibleMyDB: function() {

        switch (this.private) {
            case true:
                this.private = false;
                break;
            default:
                this.private = true;
                break;
        }

    }

};

//personalMovieDb.start();
//personalMovieDb.detectPersonaLevel();
//personalMovieDb.rememberMyFilms();
personalMovieDb.writeYourGenres();
//personalMovieDb.toggleVisibleMyDB();
personalMovieDb.showMyDB();
