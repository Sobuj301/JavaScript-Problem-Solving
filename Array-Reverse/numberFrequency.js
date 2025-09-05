
// Count how many times a number appears in an array


const numbers = [1, 2, 3, 2, 4, 2, 5, 1, 3, 3];
const frequency = {};


for(const num of numbers){
    if(frequency[num]){
        frequency[num]++
    }
    else{
        frequency[num] = 1
    }
}

console.log(frequency)

// Create a new array with all elements doubled


function duplicateArray(elements){
    for(const element of duplicateArray){
        const double = element * 2
    }
}
const duplicateArray = [...numbers]
