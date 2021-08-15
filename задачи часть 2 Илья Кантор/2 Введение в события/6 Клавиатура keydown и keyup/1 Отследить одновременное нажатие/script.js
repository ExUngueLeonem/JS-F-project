
/*
document.addEventListener('keydown', keySpy)
document.addEventListener('keyup', keySpy)

let q
let w

function keySpy(event) {
        if (event.code == 'KeyQ' && event.type == 'keydown') 
        { 
            q = true 
            console.log('нажатие q ', q);
        } else if (event.code == 'KeyQ' && event.type == 'keyup') {
            q = false
            console.log('отпуск q ', q);
        }


        if (event.code == 'KeyW' && event.type == 'keydown') 
        { 
            w = true 
            console.log('нажатие w ', w);
        } else if (event.code == 'KeyW' && event.type == 'keyup') {
            w = false
            console.log('отпуск w ', w);
        }

        if(q && w) console.log('кващямба вы нажяли QW');

}

 */

document.addEventListener('keydown', keySpyAdd)
document.addEventListener('keyup', keySpyDel)

let MyHotKeyChecker = function() {hotKeyChecker('KeyQ', 'KeyW')}

let pressed = new Set();

function keySpyAdd(event) {
    pressed.add(event.code);

    MyHotKeyChecker()
}

function keySpyDel(event){
    pressed.delete(event.code);
}

function hotKeyChecker(key1, key2) {
    if (pressed.has(`${key1}`) && pressed.has(`${key2}`)) { 
    console.log('йоба!!! это ' + key1 + ' и ' + key2);
    }
}