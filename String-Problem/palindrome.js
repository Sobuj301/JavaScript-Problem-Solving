
// Check if a string is a palindrome (e.g., “madam”)

const string2 = "madam"
const newString2 = string2.split("").reverse().join('')

if(string2 === newString2){
    console.log(true)
}
else{
    console.log(false)
}
