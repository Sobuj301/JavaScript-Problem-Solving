
// Reverse a string.
const string = "Bangladesh"
const spilt = string.split('')
const result = spilt.reverse()


const finalResult = result.join("")
// console.log(typeof finalResult)


// Count vowels in a string.
let count = 0;
for(let i = 0 ; i < finalResult.length; i++){
    if(finalResult[i].toLocaleLowerCase() === "a" || finalResult[i].toLocaleLowerCase() === "e" || finalResult[i].toLocaleLowerCase === "i" || finalResult[i].toLocaleLowerCase() === "o" || finalResult[i].toLocaleLowerCase() === "u" )
        count++
}


// Check if a string is a palindrome.
const newString ="madam" ;
const convert = newString.split('').reverse().join("")

if(convert === newString){
    console.log("true")
}
else{
    console.log('false')
}


// Convert first letter of each word to uppercase.

const world = "hello";
const access = world[0].toUpperCase() + world.slice(1).toLocaleLowerCase();
const sentence = "i love javascript";
const array = sentence.split(" ")
const newSentence = [] ;
for(const world of array){
   const access2 = world[0].toUpperCase() + world.slice(1);
   newSentence.push(access2)
  
}

console.log(newSentence.join(' '))



// Remove all spaces from a string.
const greeting = 'h e l l o wo r l d'
const newGreetings = greeting.replaceAll(" ", "")

const uppercase = newGreetings[0].toUpperCase() + newGreetings.slice(1)
console.log(uppercase)