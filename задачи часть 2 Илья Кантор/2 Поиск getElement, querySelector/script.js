/* console.log(document.getElementById("age-table"));
let ageTable = document.getElementById("age-table")

console.log(ageTable.querySelectorAll('label')); 

console.log(ageTable.getElementsByTagName('label')); 
console.log(document.getElementsByName('age'));
 //console.log(ageTable.querySelectorAll('age'));
 
console.log(document.getElementsByName('search-person')); 
 */

/* 
let form = document.getElementsByName('search-person')
console.log(form);
 
form.getElement

let ageList = document.getElementById('age-list');
ageList.querySelector('input');
console.log(ageList.querySelector('input'));

console.log(document.querySelectorAll('form > input'));  */


console.log( document.querySelector('#age-table') );

let table = document.querySelector('#age-table');
console.log( table.querySelectorAll('label') );

console.log( table.querySelector('td') );
console.log(document.querySelector('form[name=search]'));
console.log(document.querySelector('form[name=search] input'));
console.log(document.querySelector('form[name=search] > input[type=submit]'));
