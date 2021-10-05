'use strict';
/* 
function showThis(a, b) {
    //console.log(this);

    return function sum() {
        //console.log(this);
        return a + b;
    }
    //console.log(sum());
}

//showThis(4, 5); 
let a = showThis(4,5);
  console.log(a());

 */
/* 
const obj = {
    a: 20,
    b: 15,
    sum: function() {
        console.log(this);
        function shout() {
            console.log(this);
            
        }
        shout();
    }
};

obj.sum();
 */
/* 
function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log('Hello! ' + this.name);
    }
}

let ivan = new User('Ivan', 23);
 */
/* 
function sayName(surname) {
    console.log(this);
    console.log(this.name + surname);
}

const user = {
    name: 'John'
};

sayName.call(user, 'Smith');
sayName.apply(user, ['Smith']);

//bind создает НОВУЮ функцию и намертво привязывает к ней контекст

function count(num) {
    return this * num;
}


// let const bar = foo.bind(this);
const double = count.bind(2); // this == 2
console.log(double(6));
console.log(double(9));
 */


//========================================================================
//========================================================================

// 1) обычная ФУНКЦИЯ: в обычном режиме         this == window.
                    // в режиме use strict      this == underfined
    // контекст вызова функции зависит от того, 
    // где функция вызвана, а НЕ где объявлена

// 2) МЕТОД объекта:                            this == объекту, 
    // в котором вызван метод
    // если в методе вложенная функция, то
    // this, как в пункте 1)

// 3) для КОНСТРУКТОРОВ и КЛАССОВ:              this == вновь созданный объект

// 4) Ручная привязка this: call, apply, bind

//========================================================================
//========================================================================


/* 
const btn = document.querySelector('button');

btn.addEventListener('click', function() {
    console.log(this);
});
// в таком случае this == event.target

btn.addEventListener('click', function() {
    console.log(this);
});
//стрелочная функция ()=>{} берет контекст от своего родителя
 */

/* ======== Стрелочные функции && контекст ========
const obj = {
    num: 5,
    sayNumber: function() {
        const say = () => {         // в обычной функции был бы Undefined или Window
            console.log(this);
        };
        say();
    }
};

obj.sayNumber();


const double = a => a * 2;
console.log(double(8));  */

//=========== Обработчики событий && стрелочные функции =============
/* 
const btn = document.querySelector('button');   

btn.addEventListener('click', () => {   //контекст вызова потерялся this == Window || Undefined
    console.log(this);
}); 
*/

/* 
const obj = {
    num: 5,
    mom: {
        yo: 'это мом',
        sayNumber: () => {     
            console.log(this, 'это стрелка');
        },
        sayNumber2: function() {     
            console.log(this);
        }
    }
};

obj.mom.sayNumber();
obj.mom.sayNumber2(); 
*/