let userDiv= document.getElementById("users");
async function loadUsers(){
    userDiv.innerHTML="loading...";
    try{
    let response= await fetch("https://jsonplaceholder.typicode.com/users");
    if(!response.ok){
        throw new Error(`server responded with status ${response.status}`);
    }
    let users = await response.json();
    if(userDiv.length===0){
        userDiv.textContent="no users found.";
        return
    }
    userDiv.innerHTML="";
    users.forEach((user)=>{
     let card=document.createElement("div");
     card.textContent=user.name;
     userDiv.appendChild(card)
    
    });
   }
    catch(error){
     console.log("failed to load users:",error);
     userDiv.textContent="something went wrong, please try again later.";
    }
}
loadUsers();