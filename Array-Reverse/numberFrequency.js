
// Count how many times a number appears in an array
// Create a new array with all elements doubled

const numbers = [1, 2, 3, 2, 4, 2, 5, 1, 3, 3];
const frequency = {};

option -1
for(const num of numbers){
    if(frequency[num]){
        frequency[num]++
    }
    else{
        frequency[num] = 1
    }
}

console.log(frequency)

