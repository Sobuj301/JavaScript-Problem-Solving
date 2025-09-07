
// Capitalize the first letter of each word in a string
// Count the number of words in a string



const sentence = "hello world from javascript"

const convertSentence = sentence.split(' ')
let newSentence = []

for(const world of convertSentence){
   const newWorld = world[0].toUpperCase() + world.slice(1)
  newSentence.push(newWorld)
    
}

console.log(newSentence.join(" "))
