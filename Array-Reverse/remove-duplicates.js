// Remove duplicates from an array

const friends = ["Green", "Jonh", "Red", "Yellow", "green", "red"]
const removeDuplicate = [];


// option - 1
for(const friend of friends){
    if(!removeDuplicate.includes(friend)){
        removeDuplicate.push(friend)
    }
}

console.log(removeDuplicate)

// option -2
for(const friend of friends){
    const lowerCaseFriend = friend.toLowerCase()
    if(!removeDuplicate.map(f => f.toLowerCase()).includes(lowerCaseFriend)){
        removeDuplicate.push(friend)
    }
}

console.log(removeDuplicate)