'use strict';

//                                              =========== filter

/* 
const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];

let filterNames = names.filter( (elem) => {
    return elem.length < 6;
});

console.log(filterNames);
 */

// =========== end filter
//                                              ===========  Map
/* 
const answers = ['IvAn', 'AnnA', 'Kseni34a', 'Hello'];

const result = answers.map( (elem) => {
    return elem.toLowerCase();
});
// answers = answers.map( elem => elem.toLowerCase());

console.log(result);
 */

// =========== end Map
//                                             ===========  every/some
// SOME-- хотя бы один из элементов соответствует условию вернет -- TRUE
/* 
const arr = [4, 'qwq', 'Anastasia'];

const someArr = arr.some( (elem) => {
    return typeof(elem) === 'number';
});

console.log(someArr);

// EVERY -- если ВСЕ элементы соответствуют условию вернет -- TRUE

const everyArr = arr.every( (elem) => {
    return typeof(elem) === 'number';
});

console.log(everyArr);
 */
// ===========  end every/some

//                                             ===========  reduce
/* 
const arr = [4, 5, 1, 3, 2, 6];

const result = arr.reduce( (sum, current) => {
    return sum + current;
});

console.log(result);
 */
/* 
const arr = ['apple', 'water melon', 'plum'];

const result = arr.reduce( (sum, current) => {
    return `${sum}, ${current}`;
}, 'начальное значение');

console.log(result);
 */

// ===========  end reduce

const obj = {
    ivan: 'person',
    ann: 'person',
    dog: 'animal',
    cat: 'animal'
};

const newArr = Object.entries(obj)
.filter(elem => elem[1] === 'person')
.map(elem =>   elem[0]);

console.log(newArr);