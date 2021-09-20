const employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];

let employersNames = [];

employersNames = employers.filter( employer => employer.length > 0 && employer.length != '');
employersNames.forEach(elem => elem.toLowerCase().trim());

const sponsors = {
    cash: [40000, 5000, 30400, 12000],
    eu: ['SRL', 'PLO', 'J&K'],
    rus: ['RusAuto', 'SBO']
};

function calcCash(arr) {
    return arr.reduce( (a, b) => a + b );
}


const money = calcCash(sponsors.cash);

function makeBusiness(owner, cash, emp,  director = 'Victor') {
    console.log(`We have a business. Owner: ${owner}, director: ${director}. Our budget: ${cash}. And our employers: ${emp}`);
    console.log('And we have a sponsors: ');
    console.log(`${sponsors.eu.join(", ")}, ${sponsors.rus.join(", ")}, unexpected sponsor`);
    console.log(`Note. Be careful with ${sponsors.eu[0]}. It's a huge risk.`);
}

makeBusiness('Sam', money, employersNames);

/* 
We have a business. Owner: Sam, director: Victor. Our budget: 87400. And our employers: alex,ludmila,viktor,oleg,inna,ivan,alex,olga,ann
And we have a sponsors: 
SRL PLO J&K RusAuto SBO unexpected sponsor
Note. Be careful with SRL. It's a huge risk.
*/
