
function checkUl() {

    for (let ul of document.querySelectorAll('ul')) {
        if (ul.parentElement == document.body) continue
        let count = ul.querySelectorAll('li').length; 
        let firstLi = ul.before('['+ count + ']')
    }
}

checkUl()

