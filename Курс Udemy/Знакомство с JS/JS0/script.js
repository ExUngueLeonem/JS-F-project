const obj = {
    name: 'John',
    age: 25,
    isMarried: true
};

let arr = ['apple', {name: 'John Konstantine', foo: () => { console.log('labadabudab dab'); return 5} }];
console.log(typeof(arr[1].foo()));
console.log(obj.name);

console.log( undefined || 2 || true);