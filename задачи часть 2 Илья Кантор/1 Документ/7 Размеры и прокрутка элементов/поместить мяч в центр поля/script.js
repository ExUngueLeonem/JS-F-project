/* CSS решение */
/*  
let ball = document.getElementById('ball');
ball.style.top = '50%';
ball.style.left = '50%';
ball.style.transform = 'translate3d(-50%, -50%, 0)'

console.log(ball.style.cssText);
  */


/* JS решение */

let ball = document.getElementById('ball');
let field = document.getElementById('field')

ball.style.display = 'block'
ball.style.width = '40px'
ball.style.height = '40px'




//console.log(field.scrollHeight);
let posX = field.clientWidth/2  - ball.offsetWidth/2
let posY = field.clientHeight/2  - ball.offsetHeight/2
ball.style.left = posX + 'px';
ball.style.top = posY + 'px';

console.log( ball.offsetWidth );
console.log( ball.offsetHeight );

console.log(field.offsetWidth);
console.log(field.offsetHeight);

//console.log(ball.offsetLeft);

console.log(posX, posY);
console.log(ball.style.cssText);


