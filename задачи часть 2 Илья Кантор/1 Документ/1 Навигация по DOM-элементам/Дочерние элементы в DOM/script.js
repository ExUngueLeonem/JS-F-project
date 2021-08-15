/* console.log("Hello World");
console.log(document.body.children[0]); 
console.log(document.body.firstElementChild);
//console.log(document.body.firstChild);//текстовый узел. т к после дива идет пробел
 */

function FindDiv() {
    for (let node of document.body.children) {
        //if ( toString(node) == "<div>Пользователи:</div>") 
        console.log(node);
    };
};
/* 
console.log(document.body.children[1]);
console.log(document.body.lastElementChild);

console.log(document.body.children[1].lastElementChild);
console.log(document.body.lastElementChild.lastElementChild);
 */

//FindDiv()

console.log(document.body.children);