document.addEventListener('mousedown', heroSoccer);

function heroSoccer(event){
    if (!event.target.classList.contains('draggable')) return

    let hero = event.target;
    
    let shiftX = event.clientX - hero.getBoundingClientRect().x;
    let shiftY = event.clientY - hero.getBoundingClientRect().y;
    
    hero.style.position = 'fixed';
    
    let maxX = document.documentElement.clientWidth - hero.clientWidth;
    let maxY = document.documentElement.clientHeight - hero.clientHeight;

    hero.style.zIndex = 1000;

    //вывести сюда переменную проверки размера окна

console.log(event.clientX);

    moveAt(event);

    function moveAt(event) {
    
        

        hero.style.left = event.pageX - shiftX -  document.documentElement.scrollLeft + 'px'; // поправить 
        hero.style.top = event.pageY - shiftY - document.documentElement.scrollTop + 'px';
/* 
        if ( hero.getBoundingClientRect().y < 0  )  hero.style.top = 0 +'px';
        if ( hero.getBoundingClientRect().x < 0 )  hero.style.left = 0 +'px';
        if ( hero.getBoundingClientRect().y > maxY)  hero.style.top = maxY +'px';
        if ( hero.getBoundingClientRect().x > maxX )  hero.style.left = maxX + 'px';
 */

        checkRulesPos()
        console.log(event.pageX);

    }


    function checkRulesPos() {

        if ( hero.getBoundingClientRect().y < 0  )  hero.style.top = 0 +'px';
        if ( hero.getBoundingClientRect().x < 0 )  hero.style.left = 0 +'px';
        if ( hero.getBoundingClientRect().y > maxY)  hero.style.top = maxY +'px';
        if ( hero.getBoundingClientRect().x > maxX )  hero.style.left = maxX + 'px';

    }


    document.addEventListener('mousemove', moveTheItem)

    function moveTheItem(event) {
        moveAt(event)
    }


    document.addEventListener('mouseup', stopMoving)

    function stopMoving(event) {
        hero.style.position = 'absolute';
        
        hero.style.left = event.pageX - shiftX  + 'px'; // поправить 
        hero.style.top = event.pageY - shiftY +'px';

        //checkRulesPos()
 
        if ( hero.getBoundingClientRect().y < 0  )  hero.style.top = 0 + document.documentElement.scrollTop + 'px';
        if ( hero.getBoundingClientRect().x < 0 )  hero.style.left = 0 + document.documentElement.scrollLeft + 'px';
        if ( hero.getBoundingClientRect().y > maxY)  hero.style.top = maxY + document.documentElement.scrollTop + 'px';
        if ( hero.getBoundingClientRect().x > maxX )  hero.style.left = maxX + 'px';

        document.removeEventListener('mousemove', moveTheItem)
        document.removeEventListener('mouseup', stopMoving)

    }



    /* 
    event.target.ondragstart = function() {
        console.log('ondragstart dropped');
        return false
    }
   
         */


    event.preventDefault();
}



/* 
выход за пределы полей справа и снизу
бага при крокрутке колеса


организовать прокрутку мышью
*/

