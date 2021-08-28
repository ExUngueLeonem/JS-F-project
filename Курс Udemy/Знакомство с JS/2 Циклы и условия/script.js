'use strict';

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

let personalMovieDb = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

personalMovieDb.count = numberOfFilms;
let watchedFilms = personalMovieDb.count;

(watchedFilms < 10) ? console.log('Просмотрено довольно мало фильмов') :
(watchedFilms >= 10 && watchedFilms < 30) ? console.log('Вы классический зритель') :
(watchedFilms >= 30 && watchedFilms < 50) ? console.log('Вы смотрите очень много фильмов') :
(watchedFilms > 50) ? console.log('Вы киноман') : console.log( 'Сложно было ввести нормально?' );

console.log(watchedFilms);

for (let i = 0; i < numberOfFilms; i++) {

    let film = prompt('Один из последних просмотренных фильмов', '');
    let ladder = prompt('На сколько оцените его?', '');

 /*    while (film == '' || film == null || film.length > 50) {
        film = prompt('Один из последних просмотренных фильмов', '');
    } */

    if (film != null && ladder != null && 
        film != '' && ladder != '' && film.length < 50) {
            personalMovieDb.movies[film] = ladder;
        } else { 
            console.log('error');
            i--;
        }


}

console.log(personalMovieDb);
console.log(personalMovieDb.movies);

