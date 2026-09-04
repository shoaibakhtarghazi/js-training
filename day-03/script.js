// Some numbers to work with
let numbers = [23, 45, 12, 67, 34, 8, 90, 15];

// Starting values for our calculations
let largestNumber = numbers[0];
let smallestNumber = numbers[0];
let totalSum = 0;

let evenCount = 0;
let oddCount = 0;

let evenNumbersList = [];

// Go through each number in the array
for (let i = 0; i < numbers.length; i++) {

    // Check for the largest number
    if (numbers[i] > largestNumber) {
        largestNumber = numbers[i];
    }

    // Check for the smallest number
    if (numbers[i] < smallestNumber) {
        smallestNumber = numbers[i];
    }

    // Add each number to the total
    totalSum = totalSum + numbers[i];

    // Separate even and odd numbers
    if (numbers[i] % 2 === 0) {
        evenCount++;
        evenNumbersList.push(numbers[i]);
    } else {
        oddCount++;
    }
}

// Find the average of all numbers
let averageNumber = totalSum / numbers.length;

// Show the final results
console.log("Array:", numbers);
console.log("Largest Number:", largestNumber);
console.log("Smallest Number:", smallestNumber);
console.log("Sum:", totalSum);
console.log("Average:", averageNumber);
console.log("Even Numbers Count:", evenCount);
console.log("Odd Numbers Count:", oddCount);
console.log("Even Numbers:", evenNumbersList);


// Start the quiz
console.log("Quiz Start!");

let quizQuestions = [
    "What is the capital of Pakistan?",
    "How many days are there in a week?",
    "What is 5 + 5?",
    "Which language are we learning?"
];

let quizAnswers = [
    "Islamabad",
    "7",
    "10",
    "JavaScript"
];

let quizScore = 0;

// Ask each question and check the answer
for (let i = 0; i < quizQuestions.length; i++) {

    let userAnswer = prompt(quizQuestions[i]);

    if (userAnswer === quizAnswers[i]) {
        quizScore++;
    }
}

// Show the quiz result on the page
document.body.innerHTML = `
    <h1>Quiz Completed!</h1>
    <h2>Your Score: ${quizScore}/${quizQuestions.length}</h2>
`;