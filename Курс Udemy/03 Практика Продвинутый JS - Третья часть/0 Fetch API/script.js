fetch('https://jsonplaceholder.typicode.com/todos/1') //возвращает промис
    .then(response => response.json())                //промис----ответ - JSON -------- response.json() ----> JSON
    .then(json => console.log(json));