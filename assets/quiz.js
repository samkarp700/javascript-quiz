//GIVEN I am taking a code quiz

//1. 
//WHEN I click the start button (clickable button)
//THEN a timer starts (create timer)
//and I am presented with a question (question on page, not prompts)

//2. WHEN I answer a question (multiple choice, 4 options, clickable)
// THEN I am presented with another question 

//3. WHEN I answer a question incorrectly- keep score
//THEN time is subtracted from the clock - 

//4. WHEN all questions are answered or the timer reaches 0
//THEN the game is over

//5. WHEN the game is over
//THEN I can save my initials and score (local storage)

var highScore = document.querySelector("#highscore.btn");
var questionsEl = document.querySelector("#question");
var answersEl = document.querySelector("#answers");
var beginQuiz = document.querySelector("#begin-quiz");
var counterEl = 60;

var currentQuestion = {};
var acceptingAnswers = true;
var score = 0;
var questionCounter = 0;

var questions = [
    {
        question: 'What is the coding question?',
        choice1: 'answer 1', 
        choice2: 'answer 2',
        choice3: 'answer 3', 
        choice4: 'answer 4', 
        answer: 2,
    },
    {
        question: 'What is the coding question 2?',
        choice1: 'answer 1', 
        choice2: 'answer 2',
        choice3: 'answer 3', 
        choice4: 'answer 4', 
        answer: 4,
    }, 
    {
        question: 'What is the coding question 3 ?',
        choice1: 'answer 1', 
        choice2: 'answer 2',
        choice3: 'answer 3', 
        choice4: 'answer 4', 
        answer: 3,
    }, 
    {
        question: 'What is the coding question 4?',
        choice1: 'answer 1', 
        choice2: 'answer 2',
        choice3: 'answer 3', 
        choice4: 'answer 4', 
        answer: 1,
    },
    {
        question: 'What is the coding question 5?',
        choice1: 'answer 1', 
        choice2: 'answer 2',
        choice3: 'answer 3', 
        choice4: 'answer 4', 
        answer: 2,
    }
]
// Greeting page - begin button 
var beginQuiz = function() {
var buttonEl = document.querySelector("#begin-quiz");
buttonEl.textContent = "Begin Quiz";
buttonEl.className = "begin-quiz-btn";
console.log("you clicked the button");
};






    