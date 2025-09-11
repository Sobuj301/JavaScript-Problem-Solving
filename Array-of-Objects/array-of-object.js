// Create an array of students (name, age, marks)

const students = [
    {
        name: "jonh",
        age: 25,
        marks:50
    },
    {
        name: "green",
        age: 23,
        marks:70
    },
    {
        name: "Aing",
        age: 27,
        marks:65
    },
    {
        name: "sky",
        age: 28,
        marks:90
    },
    {
        name: "world",
        age: 25,
        marks:94
    }
    
]

// Find the student with the highest marks
let highestMark = students[0];

for(const student of students){
    if(student.marks > highestMark.marks){
        highestMark = student;
    }
}

// console.log(highestMark)


// Find the average marks

const totalMark = students.reduce((pre,curr)=>pre + curr.marks,0);
const averageNumber = totalMark / students.length ;
// console.log(averageNumber)


// Filter students with marks greater than 50

const fiftyUp = students.filter(student => student.marks > 50);
console.log(fiftyUp)

// Find the first student whose name starts with “A”

const findStudent = students.find(student => student.name.startsWith("A"))
console.log(findStudent)