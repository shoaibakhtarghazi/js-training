let names =["Ali","Ahmad","Usman"];
localStorage.setItem("names",JSON.stringify(names));
let savedNames=JSON.parse(localStorage.getItem("names"));
console.log(savedNames);
console.log(savedNames[0]);