
// Count how many times a number appears in an array
// Create a new array with all elements doubled


// Reverse an array (using loop)

const friends = ["Green", "Jonh", "Red", "Yellow"]
const reverse = [];
// option-1
for(let i = 0; i < friends.length; i++){
    reverse.unshift(friends[i])
}
console.log(reverse)


// option-2
for(const friend of friends){
    reverse.unshift(friend)
}
console.log(reverse)