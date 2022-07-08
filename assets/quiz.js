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
var greetingEl = document.getElementById("quiz-greeting");
var questionEl = document.getElementById("question");
var answerButtonsEl = document.getElementById('answer-buttons');
var correctAnswerEl = document.getElementById('correct');
var wrongAnswerEl = document.getElementById('wrong');
var statusCheck = document.getElementById("status-container");
var responseEl = document.getElementById("response");
feedbackEl = document.getElementById("feedback");

let randomQuestions, currentQuestionIndex;

//timer 
var timerEl = document.querySelector("#time");
var time = 60;
var score = time;
var remainingTime = "";


//begin button - listen for click, jump to startGame function
beginButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
    currentQuestionIndex++
    setNextQuestion()
});

var startTime = function() {
    if (time > 0) {
        time -=1;
        document.getElementById ("time").innerHTML=time;
    }
    else {
        clearInterval(valid);
        feedbackEl.textContent = "Time is up!";
    }
};

function startGame() {
    beginButton.classList.add("hide");
    greetingEl.classList.add("hide");
    questionContainerEl.classList.remove("hide");
    randomQuestions = questions.sort(function(){Math.random() - .5})
    currentQuestionIndex = 0
    questionContainerEl.classList.remove("hide")
    remainingTime = time;
    valid = setInterval(startTime, 1000);
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
    const selectedButton = e.target;
    console.log(selectedButton);
    const correct = selectedButton.dataset.correct;
    setStatusClass(selectedButton, correct);
    if (randomQuestions.length > currentQuestionIndex + 1) {
      nextButton.classList.remove("hide");
      
    } else {
      beginButton.innerText = "Restart";
      beginButton.classList.remove("hide");
      
    }
  }

function setStatusClass(element,correct) {
    clearStatusClass(element)
    if (correct) {
        responseEl.innerHTML = "Correct!";
        responseEl.setAttribute("class", "correct");
       

        
    } else {
        responseEl.innerHTML = "Wrong!";
        responseEl.setAttribute("class", "wrong");
        time-=5;
        document.getElementById("time").innerHTML=time;
    }
    return clearStatusClass;
}

function clearStatusClass () {
    setTimeout(function() {
        responseEl.classList.add("hide");  
    }, 5000);
    
}


const questions = [
    {
        question: 'Inside which HTML element do we put JavaScript?',
        answers: [
        {text: '<javascript>', correct: false}, 
        {text: '<script>', correct: true},
        {text: '<scripting>', correct: false}, 
        {text: '<js>', correct: false}, 
        ]
    },
    {
        question: 'What is the correct HTML for creating a hyperlink?',
        answers: [
        {text: '<a>http://www.w3schools.com</a>', correct: false}, 
        {text: '<a name="http://www.w3schools.com">W3Schools.com</a>', correct: false},
        {text: '<a url="http://www.w3schools.com">w3Schools.com</a>>', correct: false}, 
        {text: '<a href="http:www.w3schools.com">W3Schools</a>>', correct: true}, 
        ]
    }, 
    {
        question: 'Which of the following property is used to increase or decrease how bold or light a font appears?',
        answers: [
        {text: 'font-weight', correct: true}, 
        {text: 'font-style', correct: false},
        {text: 'font-variant', correct: false}, 
        {text: 'font-family', correct: false}, 
        ]
    }, 
    {
        question: 'How do you write "Hello World" in an alert box?',
        answers: [
        {text: 'alertBox("Hello World")', correct: false}, 
        {text: 'msgBox("Hello World")', correct: false},
        {text: 'msg("Hello World")', correct: false}, 
        {text: ' alert("Hello World")', correct: true}, 
        ]
    },
    {
        question: 'How can you add a comment in a JavaScript',
        answers: [
        {text: '<!--This is a comment--!>', correct: false}, 
        {text: '"This is a comment"', correct: false},
        {text: '//This is a comment', correct: true}, 
        {text: '~This is a comment~', correct: false}, 
        ]
    }
]







    