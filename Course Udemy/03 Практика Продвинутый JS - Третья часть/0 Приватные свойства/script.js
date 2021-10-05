'use strict';

class User {
    constructor(name, age) {
        this._name = name;
        this.age = age;
    }

    #surname = 'Жан Батист Ламарк';

    get name() {
        //return `${this.name} ${this.surname}`;
        console.log('геттер');

        return `${this._name}`;
    }

    set name(name) {
        console.log('сеттер');
        this._name = name;
    }


}

let Ivan = new User('ivan', 58);

console.log(Ivan);
console.log(Ivan.name);
console.log(Ivan.name = 'хуй');

