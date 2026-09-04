// console.log("start");
// setTimeout (function(){
//     console.log("I am inside setTimeout, This runs after 2 seconds");
// },2000);
// console.log("end");
// let counter=0;
// let intervelId=setInterval(function(){
//     counter++;
//     console.log(counter);
//     if (counter===5){
//         clearInterval(intervelId);
//     }
// },2000);
// function test(callback){
//     callback();
// }
// function  hello(){
//     console.log("hello");
// }
// test(hello);
// function calculate(callback){
//     let num=10;
//     callback(num);
// }
// function shownumber(number){
//     console.log(number);
// }
// calculate(shownumber);
// function calculate(num1,num2,callback){
//     let result=num1+num2;
//     callback(result);
// }
// function showresult(result){
//     console.log(result);
// }
// calculate(10, 20 , showresult);
//callback hell
// function1(function(){
//     function2(function(){
//         function3(function(){
//             function4(function(){
//                 console.log("all functions are executed");
//             })
//         })
//     })
function orderburger(callback){
    console.log("order placed");
    setTimeout (function(){
        console.log("burger is ready");
        callback();
    }, 2000);
}
function addfries(callback){
    console.log("fries added");
    setTimeout(function(){
        console.log("fries are ready");
        callback();
    }, 2000);
}
function adddrinks(callback){
    console.log("drinks added");
    setTimeout(function(){
        console.log("drinks are ready");
        callback();
    }, 2000);  
}
orderburger(function(){
    addfries(function(){
        adddrinks(function(){
            console.log("all items are ready");
        });
    });
});