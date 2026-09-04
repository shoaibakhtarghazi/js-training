//rest collect multiple elements into a single array
let number =[1,2,3,4,5,6,7,8];
let [first,second,...rest]=number;
console.log(number);
console.log(...rest);

function sum(...args){
    let total = 0;
    for(let i=0; i<args.length; i++){
        total += args[i];
    }
    return total;
}
console.log(sum(12,3,4,4,4));
