function smallestDivisor(num) {
    let i = 2;
    while(num % i) i++;
    return i
}

console.log(smallestDivisor(15));
console.log(smallestDivisor(2));                