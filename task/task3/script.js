let words = ["apple", "banana", "apple", "orange", "banana", "apple"];

let count = {};

for (let word of words) {
    if (count[word]) {
        count[word]++;
    } else {
        count[word] = 1;
    }
}

console.log(count);