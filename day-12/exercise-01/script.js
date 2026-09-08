// try/catch in error handling
try {
    let name=userName;
    console.log(name);
}catch(error){
    console.log("error",error.message);
}
console.log("program continues");
//throw new error()
function checkAge(age) {

    if (age < 18) {
        throw new Error("You must be 18 or older");
    }

    return "Access allowed";
}

try {
    let result = checkAge(15);
    console.log(result);
} catch (error) {
    console.log("Error:", error.message);
}
//finally
try{
    console.log("starting...");
    throw new Error("something went wrong");
}catch(error){
    console.log("error:",error.message)
}

try{
    let result= riskyOperation();
    console.log(result);
}catch(error){
    console.log("caught an error message", error.message);
}finally{
    console.log("cleanup code here");
}

function withdraw(balance,amount){
    if(amount>balance){
        throw new Error("insufficient funds");
    }
    if(amount<=0){
        throw new Error("withdrawal amount must be positive");
    }
    return balance-amount;
}
try{
    let newBalance=withdraw(100,150);
    console.log(balance)
}catch(error){
    console.log("transaction failed",error.message);
}