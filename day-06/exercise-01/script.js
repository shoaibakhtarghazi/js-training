let title = document.getElementById("title");

let nameInput = document.getElementById("nameInput");

let showBtn = document.getElementById("showBtn");

let result = document.getElementById("result");


nameInput.addEventListener("input", function() {

    result.textContent = nameInput.value;

});


showBtn.addEventListener("click", function() {

    let name = nameInput.value;

    if (name === "") {

        result.textContent = "Please enter your name";
        result.style.color = "red";

    } 
    else {

        result.textContent = "Hello " + name;

        result.classList.add("success");

        title.textContent = "Name Added!";

    }

});