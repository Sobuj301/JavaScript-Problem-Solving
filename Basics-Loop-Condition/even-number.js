// Separate all even numbers
// Separate all odd numbers

const numbers = [20, 40, 50, 60, 70, 80, 90, 10, 9, 11, 25, 55];
const even =[];
const odd = [];

for(let i = 0; i < numbers.length; i++){
    if(numbers[i] % 2 === 0){
        even.push(numbers[i])
    }
    else{
        odd.push(numbers[i])
    }
}

console.log("even = ",even)
console.log("odd = ",odd)