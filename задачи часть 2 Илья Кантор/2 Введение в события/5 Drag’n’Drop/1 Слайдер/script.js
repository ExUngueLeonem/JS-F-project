document.addEventListener('click', cancelA);

function cancelA(event){
    if (event.target.nodeName == 'HTML') return

    //надо использовать let target = event.target.closest('a');

    if ((event.target.tagName == 'A') || event.target.parentElement.tagName == 'A') {
        let link = event.target;


        if (event.target.tagName != 'A') link = event.target.parentElement;
        
        let confirmQ = confirm(`вы хотите перейти по ссылке ${link} ?` );

        if (confirmQ == false) event.preventDefault()
    }

}