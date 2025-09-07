
// Capitalize the first letter of each word in a string
// Count the number of words in a string

// Count the number of vowels in a string
const sentence = "Hello world! JavaScript is fun"
let count = 0;

for(const i of sentence){
    if(i.toLowerCase() === "a" || i.toLowerCase() === "e" || i.toLowerCase() === "i" || i.toLowerCase() === "o" || i.toLowerCase() === "u"){
        count ++
    }
   
}

console.log(count)