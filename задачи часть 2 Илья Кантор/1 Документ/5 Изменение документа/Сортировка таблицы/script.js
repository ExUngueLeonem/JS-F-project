console.log(document.querySelectorAll('tr > td:first-child'));
let elements = document.querySelectorAll('tr > td:first-child');
let dataArr = [];
for (let elem of elements) {
    console.log(elem.innerHTML);
    dataArr.push(elem.innerHTML)
}
console.log(dataArr);
dataArr.sort()
console.log(dataArr);


for (let dataElem of dataArr) {
console.log(dataElem);

    for (let elem of elements) {
        if (dataElem == elem.innerHTML) {
            document.getElementById('table').append(elem.parentElement)
        }
        
    }
    

}
