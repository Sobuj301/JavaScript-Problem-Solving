
// Separate all even numbers
// Separate all odd numbers
// Find the smallest number in an array

// Find the average of all elements in an array
const numbers = [20, 40, 50, 60, 70, 80, 90, 10];
let sum = 0;

option-1
for(let i = 0; i < numbers.length; i++){
    sum = sum + numbers[i];
}

const averageNumber = sum / numbers.length;
console.log(averageNumber)

// option - 2 
let i = 0;
while(i < numbers.length){
    sum = sum + numbers[i];
}

const averageNumber2 = sum / numbers.length;
console.log(averageNumber2)

// option-3
for(const num of numbers){
    sum = sum + num;
}

const averageNumber3 = sum / numbers.length;
console.log(averageNumber3)


// option-4
const total = numbers.reduce((pre,cur)=> pre + cur,0)
const average = total / numbers.length;
console.log(average)