// Elements ko select karein
const button = document.getElementById('toggleBtn');
const paragraph = document.getElementById('myParagraph');

// Button par click listener lagayen
button.addEventListener('click', function() {
  // Paragraph me 'hidden' class ko toggle karein
  paragraph.classList.toggle('hidden');

  // Button ka text update karein (Hide / Show)
  if (paragraph.classList.contains('hidden')) {
    button.innerText = 'Show Paragraph';
  } else {
    button.innerText = 'Hide Paragraph';
  }
});