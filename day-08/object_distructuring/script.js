let student={name:"shoaib", age:"26",city:"Alipur"};
//old way 
let name=student.name;
let age=student.age;
let city=student.city;
console.log(name);
//destructuring way
let {name:nam,age:ag,city:cty}=student;
console.log(nam);
function print({name,age,city}){
    console.log("I am " + name + ", I am " + age + " years old, and I live in " + city);
}
print(student);