let ball = document.getElementById('ball');
let field = document.getElementById('field');
//field.style.position = 'relative';
//console.log(ball);

ball.style.cssText = `
    position: absolute;
    display: block;
    width: 40px;
    height: 40px;
    transition: left .4s linear, top .4s linear;
    transform: translate3d(-50%, -50%, 0);
`;
//поиграть со значениями позиционирования
ball.style.left = field.offsetLeft + field.clientLeft + ball.offsetWidth/2 + 'px';
ball.style.top = field.offsetTop + field.clientTop + ball.offsetWidth/2 + 'px';

function getPos(event){
    if (event.target == field) {
        let x = event.clientX; // минус позиция угла поля
        let y = event.clientY; // минус позиция угла поля
        
        console.log(x, y);
        let stopTop = field.offsetTop + field.clientTop + ball.offsetHeight/2;
        let stopRight = field.offsetLeft + field.offsetWidth - field.clientLeft - ball.offsetWidth/2; 
        let stopBot = field.offsetTop + field.offsetHeight - field.clientTop - ball.offsetHeight/2;
        let stopLeft = field.offsetLeft + field.clientLeft + ball.offsetWidth/2;
 
        if (y < stopTop) { ball.style.top = stopTop + 'px'
        } else if (y > stopBot) { ball.style.top = stopBot + 'px'
        } else { ball.style.top = y + 'px' };


        if (x < stopLeft) { ball.style.left = stopLeft + 'px'
        } else if (x > stopRight) { ball.style.left = stopRight + 'px' 
        } else { ball.style.left = x + 'px' };
 
        

        //console.log(stopTop);
    }
 
};

field.addEventListener('click', getPos)
let fieldProp = field.getBoundingClientRect()

//console.log(ball.offsetWidth,ball.offsetHeight );


// сделать transition transform3d для мяча, чтобы отцентрировать его 0
// присвоить коордиаты getPos() мячу
// сделать плавную анимацию перехода в css 