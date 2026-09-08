let numbers =[10,20,30,40];
localStorage.setItem("numbers",JSON.stringify(numbers));
let saveNumbers=JSON.parse(localStorage.getItem("numbers"));
console.log(saveNumbers);
console.log(saveNumbers[2]);