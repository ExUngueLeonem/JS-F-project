console.log('hello asshole');

let url = 'https://jsonplaceholder.typicode.com/posts/',
    data = {username: 'example'};
/* 
fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((response) => {
        //console.log(response.json());
        return response.json();
    })
    .then((myjson) => console.log(myjson)); 
*/

fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type':'application/json'
        }
    })
    .then((response) => response.json())
    .then((myJson) => console.log('Success', myJson))
    .catch(error => console.error('Error', error));