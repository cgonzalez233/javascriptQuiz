// WHEN I click the start button
// THEN a timer starts and I am presented with a question
var timerDisplay = document.querySelector("#timer")
var timerStart = 60


var quesDisplay = document.querySelector("#quesDisplay")
var ansDisplay1 = document.querySelector("#ansDisplay1")
var ansDisplay2 = document.querySelector("#ansDisplay2")
var ansDisplay3 = document.querySelector("#ansDisplay3")
var ansDisplay4 = document.querySelector("#ansDisplay4")


// function timerFunction(){
//     var timer = setInterval(function(){
//         if (timerStart > 0){
//             timerDisplay.textContent = timerStart;
//             timerStart--;
//             timerDisplay.textContent = timerStart;
//             if (timerStart === 0){
//                 alert("Yay");
//             }
//         }
//     }, 1000);
// }


var btn = document.querySelector("#submit")

var quizData = [
    {
        question: "Question 1",
        answer1: "Answer 1",
        answer2: "Answer 2",
        answer3: "Answer 3",
        answer4: "Answer 4",
        correct: "Answer 1"
    }, {
        question: "Question 2",
        answer1: "Answer A",
        answer2: "Answer B",
        answer3: "Answer C",
        answer4: "Answer D",
        correct: "Answer B"
    },{
        question: "Question 3",
        answer1: "Answer One",
        answer2: "Answer Two",
        answer3: "Answer Three",
        answer4: "Answer Four",
        correct: "Answer Four"
    },{
        question: "Question 4",
        answer1: "Answer 1",
        answer2: "Answer 2",
        answer3: "Answer 3",
        answer4: "Answer 4",
        correct: "Answer 3"
    }
];

quizNum = 0

function quesFunction (){
    var currentQuiz = quizData[quizNum]
    quesDisplay.textContent = currentQuiz.question
    ansDisplay1.textContent = currentQuiz.answer1
    ansDisplay2.textContent = currentQuiz.answer2
    ansDisplay3.textContent = currentQuiz.answer3
    ansDisplay4.textContent = currentQuiz.answer4
    quizNum++

};

btn.addEventListener("click", function(){
    if (quizNum < quizData.length){
        btn.textContent = "Submit"
        quesFunction()
    }else {
        var userResponse = prompt("You finished! Please enter your name below!")
        btn.textContent = "Restart"
        quizNum = 0



    }
});





// WHEN I answer a question
// THEN I am presented with another question

// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock (10 seconds)

// WHEN all questions are answered or the timer reaches 0
// THEN the game is over

// WHEN the game is over
// THEN I can save my initials and score
