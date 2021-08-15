{
let div = document.createElement('div');
//let textNode = document.createTextNode('yo Bitch!');
div.className = "alert";
div.innerHTML = "<strong>Всем привет!</strong> Вы прочитали важное сообщение.";;

console.log(div);
document.body.append(div);
}
