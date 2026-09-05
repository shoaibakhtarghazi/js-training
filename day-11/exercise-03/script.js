async function fetchData(){
    let response= await fetch("https://jsonplaceholder.typicode.com/users");
    let data =await response.json();
    let user=document.getElementById("users");
    data.forEach(function(users){
        user.innerHTML+=`
        <h3>${users.name}</h3>
        <p>${users.email}</p>

        `
    })
}
fetchData();