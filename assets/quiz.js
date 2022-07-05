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

var questionEl = document.getElementById("question");
var answerButtonsEl = document.getElementById('answer-buttons');

let randomQuestions, currentQuestionIndex;

beginButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
    currentQuestionIndex++
    setNextQuestion()
});


function startGame() {
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
    question.answers.forEach (answer => {
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

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsEl.firstChild) {
        answerButtonsEl.removeChild(answerButtonsEl.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correctset
    setStatusClass(document.body, correct);
    Array.from(answerButtonsEl.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (randomQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')

    } else {
        beginButton.innerText = "Restart"
        beginButton.classList.remove("hide");
    }

};

function setStatusClass(element,correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add("wrong");
    }
}

function clearStatusClass(element) {
    element.classList.remove("correct")
    element.classList.remove("wrong")
}



const questions = [
    {
        question: 'What is the coding question 1?',
        answers: [
        {text: 'answer 1', correct: false}, 
        {text: 'answer 2', correct: true},
        {text: 'answer 3', correct: false}, 
        {text: 'answer 4', correct: false}, 
        ]
    },
    {
        question: 'What is the coding question 2?',
        answers: [
        {text: 'answer 1', correct: false}, 
        {text: 'answer 2', correct: false},
        {text: 'answer 3', correct: false}, 
        {text: 'answer 4', correct: true}, 
        ]
    }, 
    {
        question: 'What is the coding question 3?',
        answers: [
        {text: 'answer 1', correct: true}, 
        {text: 'answer 2', correct: false},
        {text: 'answer 3', correct: false}, 
        {text: 'answer 4', correct: false}, 
        ]
    }, 
    {
        question: 'What is the coding question 4?',
        answers: [
        {text: 'answer 1', correct: false}, 
        {text: 'answer 2', correct: false},
        {text: 'answer 3', correct: false}, 
        {text: 'answer 4', correct: true}, 
        ]
    },
    {
        question: 'What is the coding question 5?',
        answers: [
        {text: 'answer 1', correct: false}, 
        {text: 'answer 2', correct: false},
        {text: 'answer 3', correct: true}, 
        {text: 'answer 4', correct: false}, 
        ]
    }
]






    