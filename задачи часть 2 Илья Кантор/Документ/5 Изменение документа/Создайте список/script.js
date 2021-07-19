{
    let question = confirm('Создать список?')
    console.log(question);

    if (question) {
        let ul = document.createElement('ul')
        ul.innerHTML = '<strong>Список</strong>'
        document.body.append(ul)


        while (true) { 

            let message = prompt("что вы хотите добавить в список?", '')
            if ( message == null ||
                message == '' ||
                message == true ) { 
                    break 
            } else {

            let li = document.createElement('li')
            ul.append(li)
            li.innerHTML = message
            console.log(message);
            }
        }
            
        
    }
}