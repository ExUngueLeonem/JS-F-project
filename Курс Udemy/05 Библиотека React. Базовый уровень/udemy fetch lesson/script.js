console.log('hello asshole');

    
/* //========== GET 
fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((response) => {
        //console.log(response.json());
        return response.json();
    })
    .then((myjson) => console.log(myjson)); 
*/



/* 
//========== POST 
let url = 'https://jsonplaceholder.typicode.com/posts/',
    data = {username: 'example'};

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
*/

const getResource = async (url) => {
    const res = await fetch(url), 
          some = await res.json();

    return some;
}


getResource('https://jsonplaceholder.typicode.com/todos/10000')
    .then((res) => console.log('Success', res))
    .catch(error => console.error('Error', error)); 
