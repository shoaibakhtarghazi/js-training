// let myPromise = new Promise(function(resolve, reject){
//     let success= true;
//     if(success){
//         resolve("promise is resolved");
//     }
//     else
//     {
//         reject("promise is rejected");
//     }
//  },2000)
// myPromise.then(function(result){
//     console.log(result);
// });
// myPromise.catch(function(error){
//     console.log(error);
// });
// let myPromise= new Promise(function(resolve,reject){
//     resolve("promise is resolved");
// });
// myPromise.then(function(result){
//     console.log(result);
// });
// let mypromise = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve("2 second have passed");
//     },2000);
// })
// mypromise.then(function(result){
//     console.log(result);
// });
// let myPromise = new Promise(function (resolve, reject) {
//   let age = 18;
//   if (age >= 18) {
//     resolve("you are eligible to vote");
//   } else {
//     reject("you are not eligible to vote");
//   }
// });
// myPromise
//   .then(function (result) {
//     console.log(result);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
//  let myPromise1 = new Promise(function (resolve, reject) {
//     resolve(10);
//  });
//  myPromise1
//     .then(function (result) {
//         console.log(result);
//         return result *2;
//     })
//     .then (function(result){
//         console.log(result);
//         return result+2;
//     })
//     .then(function(result){
//         console.log(result);
//         return result/2;
//     })
//     .then(function(result){
//         console.log(result);
//     })

// function placeOrder(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log("order placed");
//             resolve();
//         },2000);
//     });
// }
// function prepareOrder(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log("order prepared");
//             resolve();
//         },2000);
//     });
// }
// function deliverOrder(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log("order delivered");
//             resolve();
//         },2000);
//     });
// }

// placeOrder()
//  .then(()=>prepareOrder())
//  .then(()=>deliverOrder())
//  .then(()=>console.log("order completed"))
//  .catch((error)=>console.log(error));



// let myPromise = new Promise((resolve, reject) => {
//   let success = true;
//   if (success){
//     resolve("promise is resolved");
//   }else{
//     reject("promise is rejected");
//   }

// });  
// myPromise
// .then((result)=>{
//     console.log(result);
// })
// .catch((error)=>{
//     console.log(error);
// })
// .finally(()=>{
//     console.log("promise is settled");
// });


let promise1 = new Promise(function(resolve) {
    setTimeout(function() {
        resolve("Task 1 complete");
    }, 2000);
});

let promise2 = new Promise(function(resolve) {
    setTimeout(function() {
        resolve("Task 2 complete");
    }, 3000);
});

let promise3 = new Promise(function(resolve) {
    setTimeout(function() {
        resolve("Task 3 complete");
    }, 1000);
});
Promise.all([promise1, promise2, promise3])
.then(function(results) {
    console.log(results); // ["Task 1 complete", "Task 2 complete", "Task 3 complete"]  
})
