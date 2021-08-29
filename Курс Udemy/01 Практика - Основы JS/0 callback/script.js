'use strict';

function learnJS(lang, callback) {
    console.log('обучение');
    
    setTimeout(callback, 1000);
    //callback()
    
}

learnJS('JS', function() {
    console.log('я анонимная функция из коллбека');
})