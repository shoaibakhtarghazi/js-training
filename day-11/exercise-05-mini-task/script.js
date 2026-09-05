let loadBtn = document.getElementById("loadBtn");
let usersDiv = document.getElementById("users");

async function loadUsers() {

    usersDiv.innerHTML = "Loading...";

    try {

        let response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
            throw new Error("Failed to load users");
        }

        let users = await response.json();

        usersDiv.innerHTML = "";

        users.forEach((user) => {

            let card = document.createElement("div");

            card.className = "user-card";

            card.innerHTML = `
                <h3>${user.name}</h3>
                <p>Email: ${user.email}</p>
                <p>Company: ${user.company.name}</p>
            `;

            usersDiv.appendChild(card);
        });

    } catch (error) {

        usersDiv.textContent =
            "Something went wrong: " + error.message;
    }
}

loadBtn.addEventListener("click", loadUsers);