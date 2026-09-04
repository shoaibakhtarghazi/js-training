let person = document.createElement("h2");
console.log('document', document)

person.innerHTML = "Shoaib";
person.style.cursor = "pointer";

document.body.appendChild(person);


person.addEventListener("click", function () {

    // Form
    let form = document.createElement("form");

    form.innerHTML = `
        <h3>Person Information</h3>

        <label>Name:</label>
        <input type="text" id="name">
        <br><br>

        <label>Age:</label>
        <input type="number" id="age">
        <br><br>

        <label>City:</label>
        <input type="text" id="city">
        <br><br>

        <button type="submit">Submit</button>
    `;

    document.body.appendChild(form);


    form.addEventListener("submit", function (event) {

        event.preventDefault();

        let name = document.getElementById("name").value;
        let age = document.getElementById("age").value;
        let city = document.getElementById("city").value;

        let result = document.createElement("div");

        result.innerHTML = `
            <h3>Person Details</h3>
            <p>Name: ${name}</p>
            <p>Age: ${age}</p>
            <p>City: ${city}</p>
        `;

        document.body.appendChild(result);
    });
});