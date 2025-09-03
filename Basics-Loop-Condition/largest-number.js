// Find the smallest number in an array
// Find the sum of all elements in an array
// Find the average of all elements in an array
// Separate all even numbers
// Separate all odd numbers

// Find the largest number in an array
const numbers = [20, 40, 50, 60, 70, 80, 90, 10]

let largestNumber = numbers[0]


// option-1
for (let i = 0; i < numbers.length; i++) {
    if (largestNumber < numbers[i]) {
        largestNumber = numbers[i];
    }

}
// console.log(largestNumber)

// option-2
let i = 0;
while (i > numbers.length) {

    if(largestNumber < numbers[i]){
        largestNumber = numbers[i]
    }
    i++
}
// console.log(largestNumber)



// option -3
for(const num of numbers){
    if(largestNumber < num){
        largestNumber = num;
    }
}

// console.log(largestNumber)

// option-4
const largest = Math.max(...numbers)

console.log(largest)
// 