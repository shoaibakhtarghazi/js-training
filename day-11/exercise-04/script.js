//Fetch a Single Post
async function getPost(){
    let response= await fetch("https://jsonplaceholder.typicode.com/posts/1");
    let post=await response.json();
    console.log(post.title);
    console.log(post.body);

}
getPost();


//Fetch and Filter
async function getUserPost() {

    let response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
    );

    let posts = await response.json();

    let userpost = posts.filter((post) => post.userId === 1);

    console.log("user 1 has", userpost.length, userpost);
}

getUserPost();