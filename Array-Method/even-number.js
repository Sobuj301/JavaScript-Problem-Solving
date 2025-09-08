// Get all even numbers using filter()

const numbers = [20, 10, 9, 7, 5, 3, 1, 15, 30];

const even = numbers.filter(num => num % 2 === 0);

console.log(even)



// Find the first odd number in an array using find()

const odd = numbers.find(num => num % 2 !== 0);
console.log(odd)
