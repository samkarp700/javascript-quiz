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

var beginButton = document.getElementById('begin-btn');
var nextButton = document.getElementById('next-btn');
var questionContainerEl = document.getElementById("question-container");
let randomQuestions, currentQuestionIndex;
var questionEl = document.getElementById("question");
var answerButtonsEl = document.getElementById('answer-buttons');

beginButton.addEventListener("click", startGame);


function startGame() {
    console.log("begin");
    beginButton.classList.add("hide");
    randomQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerEl.classList.remove("hide")
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(randomQuestions[currentQuestionIndex])

}

function showQuestion(question) {
    questionEl.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
        answerButtonsEl.appendChild(button);
    })
}



function selectAnswer(e) {


}



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






    