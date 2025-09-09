// Create an object (name, age, city)

const person = {
    name: "green",
    age: 27,
    city:"dhaka"
}

// Access a specific property from an object

const age = person.age;
console.log(age)


// List all keys of an object (Object.keys)

const keys = Object.keys(person)
console.log(keys)



// List all values of an object (Object.values)
const values = Object.values(person)
console.log(values)


// Loop through key-value pairs of an object
for(const key in person){
    console.log(key, ":", person[key])
}
