
let data = {
    "Рыбы": {
      "форель": {},
      "лосось": {}
    },
  
    "Деревья": {
      "Огромные": {
        "секвойя": {},
        "дуб": {}
      },
      "Цветковые": {
        "яблоня": {},
        "хуяблоня": {},
        "монголия": {},
        "магнолия": {}
      }
      
    },
    //"Плохой ключ": 0
  };


/* 
let mainUl = document.createElement('ul')
document.body.append(mainUl)

function checkData(data) {

    for (let item in data) {
        console.log(data[item]);
        let li = document.createElement('li')
        li.innerHTML = item
        mainUl.append(li)
        checkData(data[item])
        //checkData(item)
    }
    
}

checkData(data)

 */
/* 
 
//console.log(data['Деревья']['Огромные']['Дуб']);
console.log(typeof data['Рыбы']['форель']['']);

*/



function createTree(container, obj) {
    container.append(createTreeDom(obj));
  }

/* let container = document.getElementById('container');
container.append(createTreeDom(obj));
 */

function createTreeDom(obj) {

    if (!Object.keys(obj).length) return

    let ul = document.createElement('ul')
    
    
    for (let key in obj){

        let li = document.createElement('li')
        li.innerHTML = key
        
        let childrenUl = createTreeDom(obj[key]);
        if (childrenUl) {
          li.append(childrenUl);
        }
        
        ul.append(li);
    }
    return ul   
}

let container = document.getElementById('container');
createTree(container, data);


//innerHTML = <li>+'data2'+</li>


/*
        let childrenUl = createTreeDom(obj[key]);
        if (childrenUl) {
        li.append(childrenUl);
        } */
