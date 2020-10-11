// WHEN I click the start button
// THEN a timer starts and I am presented with a question
var timerDisplay = document.querySelector("#timer")
var timerStart = 60
// Timer var

// Display var
var quesDisplay = document.querySelector("#quesDisplay")
var ansDisplay1 = document.querySelector("#ansDisplay1")
var ansDisplay2 = document.querySelector("#ansDisplay2")
var ansDisplay3 = document.querySelector("#ansDisplay3")
var ansDisplay4 = document.querySelector("#ansDisplay4")
var container = document.querySelector(".container")
// Display var

// Button var
var btn = document.querySelector("#submit")
var hiScore = document.querySelector("#highscore")
// Button var

// Quiz Questions and Answers
var quizData = [

    {
        question: "Commonly used data types DO NOT include",
        answer1: "Strings",
        answer2: "Booleans",
        answer3: "Alerts",
        answer4: "Numbers",
        correct: "Alerts"
    }, {
        question: "The condition in an if/else statement is enclosed within ____",
        answer1: "Quotes",
        answer2: "Curly Brackets",
        answer3: "Parenthesis",
        answer4: "Square Brackets",
        correct: "Parenthesis"
    },{
        question: "Arrays in JavaScript can be used to store",
        answer1: "Numbers and Strings",
        answer2: "Other Arrays",
        answer3: "Booleans",
        answer4: "All of the Above",
        correct: "All of the Above"
    },{
        question: "String values must be enclosed within ____ when being assigned to variables",
        answer1: "Commas",
        answer2: "Curly Brackets",
        answer3: "Quotes",
        answer4: "Parenthesis",
        correct: "Quotes"
    },{
        question: "A very useful tool used during development and debugging for printing content to the debugger is",
        answer1: "JavaScript",
        answer2: "Terminal/Bash",
        answer3: "For Loops",
        answer4: "console.log",
        correct: "console.log"
    }
];
// Quiz Questions and Answers

// Question functions
quizNum = 0
var score = 0;

function checkAnswer() {
  console.log('check answer');

  console.log(this.textContent)
  console.log(quizData[quizNum].correct)  

  if (quizData[quizNum].correct === this.textContent) {
    console.log('CORRECT');
    score++;
  }
  else {
    console.log('INCORRECT')
    timerStart -= 10
  }

  alert(score);

  quizNum++;
  quesFunction();
}

function quesFunction (){
    var currentQuiz = quizData[quizNum]
    quesDisplay.textContent = currentQuiz.question

    ansDisplay1.textContent = currentQuiz.answer1
    ansDisplay2.textContent = currentQuiz.answer2
    ansDisplay3.textContent = currentQuiz.answer3
    ansDisplay4.textContent = currentQuiz.answer4

    ansDisplay1.addEventListener('click', checkAnswer);
    ansDisplay2.addEventListener('click', checkAnswer);
    ansDisplay3.addEventListener('click', checkAnswer);
    ansDisplay4.addEventListener('click', checkAnswer);
};

function endQuiz() {
  alert('END QUIZ = TIME OUT')

  // TODO: Show end of quiz container.
  // TODO: Put score on the element in the end of quiz container.

}


function timerFunction(){
    var timeInterval = setInterval(function(){
        if (timerStart > 0){
            timerStart--;
            timerDisplay.textContent = timerStart;
            
            if (timerStart === 0){
              clearInterval(timeInterval);
              endQuiz();
            }
        }
    }, 1000);
}
// Question functions

// Button functions
btn.addEventListener("click", function(){
    if (quizNum < quizData.length){
        btn.textContent = "Submit";
        hiScore.style.display = 'none';
        timerDisplay.style.display = 'block';
        timerDisplay.textContent = timerStart;
        this.style.display = 'none';

        quesFunction()
        timerFunction()
    } else {
        var userResponse = prompt("You finished! Please enter your name below!");
        btn.textContent = "Restart";
        hiScore.style.display = 'block';
        quizNum = 0
        timerStart = 60

    }
});
// Button function





// WHEN I answer a question
// THEN I am presented with another question

// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock (10 seconds)

// WHEN all questions are answered or the timer reaches 0
// THEN the game is over

// WHEN the game is over
// THEN I can save my initials and score