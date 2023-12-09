const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 8080;

// Read and parse questions from JSON file
const questionsPath = path.join(__dirname, 'questions.json');
let questions = JSON.parse(fs.readFileSync(questionsPath, 'utf-8'));

// Set up EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Route for the test page
app.get('/', (req, res) => {
  // Shuffle the questions array
  const shuffledQuestions = shuffleArray(questions);
  res.render('index', { questions: shuffledQuestions });
});

// Function to shuffle an array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
