let user={
    name:"shoaib",
    age:26
};
localStorage.setItem("user",JSON.stringify(user));
let saveUser=JSON.parse(localStorage.getItem("user"));
console.log(saveUser);
console.log(saveUser.name);
console.log(saveUser.age);
