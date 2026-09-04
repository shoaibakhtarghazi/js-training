let person = document.createElement("div");

person.innerHTML = `
    <h2>Person Information</h2>
    <button id="openForm">Add Information</button>
`;

document.body.appendChild(person);


document.getElementById("openForm").onclick = function () {

    let form = document.createElement("form");

    form.innerHTML = `
        <h3>Person Information</h3>

        Name:
        <input type="text" id="name">
        <br><br>

        Age:
        <input type="number" id="age">
        <br><br>

        City:
        <input type="text" id="city">
        <br><br>

        <button type="submit">Submit</button>
    `;

    document.body.appendChild(form);


    form.onsubmit = async function (event) {

        event.preventDefault();

        let name = document.getElementById("name").value;
        let age = document.getElementById("age").value;
        let city = document.getElementById("city").value;


        let personData = {
            name: name,
            age: age,
            city: city
        };


        await fetch("http://localhost:3000/people", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(personData)
        });


        console.log("Data saved!");
    };
};
async function getPeople() {

    let response = await fetch("http://localhost:3000/people");

    let people = await response.json();

    let table = document.createElement("table");

    table.border = "1";

    table.innerHTML = `
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
        </tr>
    `;

    people.forEach(function(person) {

        table.innerHTML += `
            <tr>
                <td>${person.id}</td>
                <td>${person.name}</td>
                <td>${person.age}</td>
                <td>${person.city}</td>
            </tr>
        `;
    });

    document.body.appendChild(table);
}

getPeople();