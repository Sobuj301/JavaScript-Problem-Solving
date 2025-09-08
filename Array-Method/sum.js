// Find the sum of all numbers using reduce()


const numbers = [2, 5, 10, 15, 20];

const sum = numbers.reduce((pre,cur) =>pre + cur,0)
console.log(sum)
