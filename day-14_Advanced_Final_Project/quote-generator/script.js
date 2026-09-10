let quoteText = document.getElementById("quoteText");
let quoteAuthor = document.getElementById("quoteAuthor");
let newQuoteBtn = document.getElementById("newQuoteBtn");
let saveBtn = document.getElementById("saveBtn");
let favoritesList = document.getElementById("favoritesList");

let currentQuote = null;

let favorites = JSON.parse(localStorage.getItem("favorites")) || [];


async function fetchQuote() {

    quoteText.textContent = "Loading...";
    quoteAuthor.textContent = "";

    try {

        let response = await fetch("https://dummyjson.com/quotes/random");

        if (!response.ok) {
            throw new Error("Failed to fetch quote");
        }

        let data = await response.json();

      currentQuote = {
    text: data.quote,
    author: data.author

        };

        quoteText.textContent = currentQuote.text;
        quoteAuthor.textContent = "- " + currentQuote.author;

    } catch (error) {

        quoteText.textContent = "Couldn't load a quote. Try again.";
        console.error(error);
    }
}


function renderFavorites() {

    favoritesList.innerHTML = "";

    if (favorites.length === 0) {
        favoritesList.innerHTML = "<p>No favorites saved yet.</p>";
        return;
    }

    favorites.forEach(function(quote, index) {

        let li = document.createElement("li");

        let span = document.createElement("span");

        span.textContent = `"${quote.text}" - ${quote.author}`;

        let removeBtn = document.createElement("button");

        removeBtn.textContent = "Remove";

        removeBtn.addEventListener("click", function() {
            removeFavorite(index);
        });

        li.appendChild(span);
        li.appendChild(removeBtn);

        favoritesList.appendChild(li);
    });
}


function saveFavoritesToStorage() {

    localStorage.setItem(
        "favorites",
        JSON.stringify(favorites)
    );
}


function addFavorite() {

    if (!currentQuote) {
        return;
    }

    let alreadySaved = favorites.some(function(fav) {
        return fav.text === currentQuote.text;
    });

    if (alreadySaved) {
        alert("Already in favorites!");
        return;
    }

    favorites.push(currentQuote);

    saveFavoritesToStorage();

    renderFavorites();
}


function removeFavorite(index) {

    favorites.splice(index, 1);

    saveFavoritesToStorage();

    renderFavorites();
}


newQuoteBtn.addEventListener("click", fetchQuote);

saveBtn.addEventListener("click", addFavorite);

fetchQuote();

renderFavorites();