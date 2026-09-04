// push() method is used to add an element at the end of the array
let fruits=["apple","banana"];
fruits.push("mango");
console.log(fruits);
console.log("======================================")

//push()method is used to add an element  in an empty array
let stdName=[];
stdName.push("akhtar","Aziz","Ali");
console.log(stdName);
console.log("======================================")

//pop method is used to remove the last element from the array
let fruit=["apple","banana","mango"];
// fruit.pop();
let removedfruits=fruit.pop();
console.log(fruit);
console.log(removedfruits);
console.log("======================================")

//shift method is used to remove the first element from the array
let dqueue=["ali","akhtar","ahmed"];
let first =dqueue.shift();
console.log(dqueue);
console.log(first);
console.log("======================================")

//unshift() method is used to add an element at the beginning of the array
let queue=["ali","akhtar","ahmed"];;
queue.unshift("bilal");
console.log(queue)
console.log("======================================")
let nums =[1,2,3,4,5];
let part=nums.slice(2,4);
console.log(part);
console.log(nums);
console.log("======================================")
let num=[1,2,3,4,5,6,7,8,9];
let parts=num.splice(1,2,"a","b",3);
console.log(part);
console.log("======================================")
let number=[1,2,3,4];
let doubled=number.map(n=>n*2);
console.log(doubled);
console.log("======================================")
let numbers = [1, 2, 3, 4, 5, 6];
let evens = numbers.filter(n => n % 2 === 0);
console.log(evens); 
console.log("======================================")
let price =[100,200,300,400];
let total=price.reduce((acc,curr) => acc+curr,0);
console.log(total);
console.log("======================================")
let users=[
    {id:1,name:"ali"},
    {id:2,name:"akhtar"}
]
let user=users.find(u=>u.id===2);
console.log(user);
console.log("======================================")
let num1=[1,2,3,4,5];
let hasEven=num1.some(n=>n%2===0);
console.log("======================================")
let num2=[1,2,3,4,5];
let alleven=num2.every(n=>n%2===0);
console.log(alleven);
console.log("======================================")
let num3=[5,2,8,1,4];
let sorted=num3.sort((a,b)=>a-b);
console.log("ascending:", sorted);

num3.sort((a,b)=>b-a);
console.log("descending:",num3);
console.log("======================================")
