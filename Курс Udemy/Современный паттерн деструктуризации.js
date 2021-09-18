function connect({
    host = 'localhost',
    port = '3000',
    user = 'default'} = {}) {
console.log(`host - ${host}, port - ${port}, user - ${user}`);    
}

connect(); //можно передавать значения по умолчанию

//================================================================

const numbers = [[3, 5], [6, 2]];

const [[a, b], [c, d]] = numbers;
console.log(a, b, c, d);

//================================================================


const country = {
    name: 'United States',
    population: 1000024,
    gender: {
        male: ['15%', '40%'],
        female: ['16%', '29%']
    }
}

const {gender: {male: [maleUnder18, maleAdult], female: [femUnder18, femAdult]}} = country;

console.log(maleUnder18, maleAdult, femUnder18, femAdult);


//================================================================


const coords = {x, y};
console.log(coords);
