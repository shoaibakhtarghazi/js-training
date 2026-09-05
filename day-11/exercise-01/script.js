// async await
function getData(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("data received")
        },1000)
    });
}
async function fetchData(){
    let data=await getData();
    console.log(data);
}
fetchData();
//to return number of promises
function getData1(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(10)
        },1000)
    });
}
async function fetchData1(){
    let data =await getData1();
    console.log(data);
}
fetchData1();
//await k bad calculation
function getData2(){
    return new Promise((resolve)=>{
        setTimeout(function(){
            resolve(10)
        },1000)
    });
}
async function fetchData2(){
    let data=await getData2();
    let sum =data+10;
    console.log(sum);
}
fetchData2();
//2 awaits
function getName(){
    return new Promise((resolve)=>{
        setTimeout(function(){
            resolve("shoaib akhtar")
        },1000)
    });
}
function getAge(){
    return new Promise((resolve)=>{
        setTimeout(function(){
            resolve(26)
        },1000)
    });
}
async function  fetchData3(){
    let name= await getName()
    let age= await getAge()
    console.log(name, age)
}    
fetchData3();  
//try/catch
function getData4(){
    return new Promise(function(resolve,reject){
        let success=false;
        if(success){
            resolve("data mila")
        }else{
                reject("data nahi mila")
            }
    });
    
}
async function fetchData4(){
    try{
        let data=await getData4();
        console.log(data);
    }catch(error){
        console.log(error); 
    }
    
}
fetchData4();
