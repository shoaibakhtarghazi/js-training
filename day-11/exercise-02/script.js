// fetch("https://jsonplaceholder.typicode.com/users")
async function getUser(){
    let response =await fetch("https://jsonplaceholder.typicode.com/users");    
    let data=await response.json();
    console.log(data);
}
getUser();
//error handling try/catch
async function getUser1(){
    try{
        let response= await fetch("https://jsonplaceholder.typicode.com/users");
        let data=await response.json();
        console.log(data);
    }catch(error){
        console.log("Error:", error);
    }
}
getUser1();