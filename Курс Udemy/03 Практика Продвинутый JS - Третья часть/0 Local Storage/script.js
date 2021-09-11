'use strict';
/* 
localStorage.setItem('number 2', 8768);
localStorage.setItem('numbe345r 2', 836567);
localStorage.setItem('num345ber 2', 833);
localStorage.setItem('345345number 2', 'кокождамбо');

//localStorage.removeItem('number 2');
//localStorage.clear();

console.log( localStorage);
 */

const ans = prompt('Введите текст', '');

const reg = /mob/;

console.log(ans.match(reg));