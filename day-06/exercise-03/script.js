// Elements ko select karein
const inputField = document.getElementById('userInput');
const charCount = document.getElementById('charCount');

// Jaise hi user input field me type kare (input event)
inputField.addEventListener('input', function() {
  // Input ki text length count karein aur span me update karein
  charCount.innerText = inputField.value.length;
});