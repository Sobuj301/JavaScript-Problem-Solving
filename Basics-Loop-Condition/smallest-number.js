
// Find the sum of all elements in an array
// Find the average of all elements in an array
// Separate all even numbers
// Separate all odd numbers


// Find the smallest number in an array

const numbers = [20, 40, 50, 60, 70, 80, 90, 10]
let smallestNumber = numbers[0]

// option-1
for(let i = 0; i < numbers.length; i++){
    if(smallestNumber > numbers[i]){
        smallestNumber = numbers[i]
    }
}
// console.log(smallestNumber)

// option-2
let i = 0;
while(i < numbers.length){
    if(smallestNumber > numbers[i]){
        smallestNumber = numbers[i]
    }
    i++
}
// console.log(smallestNumber)


// option - 3
for(const num of numbers){
    if(smallestNumber > num){
        smallestNumber = num
    }
}

// console.log('of',smallestNumber)

// option-4

const smallest = Math.min(...numbers)
// console.log(smallest)