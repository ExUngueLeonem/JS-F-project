let field = document.getElementById('field');

let fieldParam = field.getBoundingClientRect();
console.log(fieldParam);
let x1 = fieldParam.x;
let y1 = Math.floor(fieldParam.y);
console.log(`1 (${x1};${y1})`);
let x3 = x1 + field.clientLeft;
let y3 = Math.floor(y1 + field.clientTop);
console.log(`3 (${x3};${y3})`);
let x2 = x1 + field.offsetWidth
let y2 = Math.floor(y1 + field.offsetHeight);
console.log(`2 (${x2};${y2})`);
let x4 = x2 - field.clientLeft;
let y4 = Math.floor(y2 - field.clientTop);
console.log(`4 (${x4};${y4})`);

