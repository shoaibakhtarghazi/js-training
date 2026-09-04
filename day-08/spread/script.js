let arr1=[1,2,3,4];
let arr2=[5,6,7,8];
let arr3=[...arr1,...arr2];
console.log(arr3);
let copy=[...arr1];
copy.push(5);
console.log(copy);
let copy2=[arr2];
copy2.push(9);
console.log(copy2);
// spread operator on objects
let obj1={name:"akhtar",age:26};
let obj2={...obj1,city:"alipur"};
console.log(obj2);