// Checking whether a number is Even or Odd
function checkEvenOdd(num) {
    if (num % 2 === 0) {
        return `${num} is Even.`;
    } else {
        return `${num} is Odd.`;
    }
}

console.log(checkEvenOdd(4));
console.log(checkEvenOdd(7));
console.log(checkEvenOdd(0));


// Finding the largest of three numbers
function findMax(a, b, c) {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
}

console.log(findMax(10, 25, 15));
console.log(findMax(-5, -2, -10));
console.log(findMax(7, 7, 3));


// Creating an array of products and applying a 10% discount using map()
const productsDay5 = [
    { name: "Laptop", price: 100000 },
    { name: "Mobile", price: 50000 },
    { name: "Headphones", price: 5000 },
    { name: "Watch", price: 10000 }
];

const discountedProductsDay5 = productsDay5.map((product) => {
    const discountedPrice = product.price * 0.90;

    return `${product.name} - Discounted Price: Rs. ${discountedPrice}`;
});

console.log(discountedProductsDay5);


// Filtering available books and getting their titles using filter() and map()
const booksDay5 = [
    { title: "The Alchemist", available: true },
    { title: "Atomic Habits", available: false },
    { title: "To Kill a Mockingbird", available: true },
    { title: "1984", available: false },
    { title: "Clean Code", available: true }
];

const availableBookTitlesDay5 = booksDay5
    .filter((book) => book.available === true)
    .map((book) => book.title);

console.log(availableBookTitlesDay5);