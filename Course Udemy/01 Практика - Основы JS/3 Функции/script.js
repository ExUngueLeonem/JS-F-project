/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDb = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

personalMovieDb.count = numberOfFilms;

function detectPersonaLevel() {
    let watchedFilms = personalMovieDb.count;

    (watchedFilms < 10) ? console.log('Просмотрено довольно мало фильмов') :
    (watchedFilms >= 10 && watchedFilms < 30) ? console.log('Вы классический зритель') :
    (watchedFilms >= 30 && watchedFilms < 50) ? console.log('Вы смотрите очень много фильмов') :
    (watchedFilms > 50) ? console.log('Вы киноман') : console.log( 'Сложно было ввести нормально?' );
}

detectPersonaLevel();

function rememberMyFilms() {
    
    for (let i = 0; i < numberOfFilms; i++) {
        let film = prompt('Один из последних просмотренных фильмов', '');
        let ladder = prompt('На сколько оцените его?', '');
        
        if (film != null && ladder != null && 
            film != '' && ladder != '' && film.length < 50) {
                personalMovieDb.movies[film] = ladder;
        } else { 
                console.log('error');
                i--;
        }     
    }
        
}

rememberMyFilms();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDb);
    }
}

showMyDB(personalMovieDb.private);

function writeYourGenres() {
    let genre

    for (let i = 0; i < 3; i++)  {
        genre = prompt(`Вашлюбимый жанр кино под номером ${i+1}?`, '')
        personalMovieDb.genres.push(genre)
    }
}

writeYourGenres();


console.log(personalMovieDb);

