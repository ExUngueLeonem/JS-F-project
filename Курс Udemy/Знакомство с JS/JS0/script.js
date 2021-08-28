let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

let personalMovieDb = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

personalMovieDb.count = numberOfFilms;

for (let i = 0; i < numberOfFilms; i++) {
    let film = prompt('Один из последних просмотренных фильмов', '');
    personalMovieDb.movies[film] = prompt('На сколько оцените его?', '');
}
