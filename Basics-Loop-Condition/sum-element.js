// Find the average of all elements in an array
// Separate all even numbers
// Separate all odd numbers
// Find the smallest number in an array


// Find the sum of all elements in an array
const numbers = [20, 40, 50, 60, 70, 80, 90, 10];
let sum = 0;

// option-1
for(let i = 0; i < numbers.length; i++){
    sum = sum + numbers[i];
}

console.log(sum)

// option-2
let i = 0;
while(i < numbers.length){
    sum = sum + numbers[i];
    i++
}
console.log(sum)


// option - 3
for(const num of numbers){
    sum = sum + num;
}

console.log(sum)

// option-4
const result = numbers.reduce((pre , curr)=>{
    return pre + curr;
} ,0)

console.log(result)