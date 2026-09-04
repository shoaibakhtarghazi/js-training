// Creating a student object
let student1 = {
    name: "Ali",
    marks: [70, 80, 65],
    age: 20
};

console.log(student1.name);
console.log(student1.age);
console.log(student1.marks);

// Printing each student's name using forEach()
let students2 = [
    { name: "Ali", age: 20 },
    { name: "Ahmed", age: 21 },
    { name: "Shoaib", age: 22 },
    { name: "Usman", age: 20 }
];

students2.forEach(function(student) {
    console.log(student.name);
});

// Creating a new array containing only student names
let students3 = [
    { name: "Ali", marks: 75 },
    { name: "Ahmed", marks: 45 },
    { name: "Shoaib", marks: 80 },
    { name: "Usman", marks: 60 }
];

let names3 = students3.map(function(student) {
    return student.name;
});

console.log(names3);

// Filtering students with 50+ marks and finding a specific student
let students4 = [
    { name: "Ali", marks: 75 },
    { name: "Ahmed", marks: 45 },
    { name: "Shoaib", marks: 80 },
    { name: "Usman", marks: 40 }
];

let passedStudents4 = students4.filter(function(student) {
    return student.marks >= 50;
});

console.log(passedStudents4);

let student4 = students4.find(function(student) {
    return student.name === "Shoaib";
});

console.log(student4);

