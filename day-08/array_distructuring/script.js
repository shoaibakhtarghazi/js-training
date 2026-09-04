// array destructuring
let numbers=[1, 2, 3, 4, 5];
let [first, second, third, fourth, fifth, ...rest] = numbers;

console.log(rest);
console.log(second);
console.log(first);
console.log(third);
console.log(fourth);
console.log(fifth);

let oldContact=[
    {name:"ali",phone:"034322"},
    {name:"ahmad",phone:null}
];
let newContact=[
 {name:"akhtar",phone:"031245"},   
];
let allContact=[...oldContact,...newContact];
allContact.forEach(({name,phone})=>{
    console.log(`${name}:${phone ??"no phone number"}`)
});

