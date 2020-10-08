// WHEN I click the start button
// THEN a timer starts and I am presented with a question
var timerStart = 6

function timerFunction(){
    var timer = setInterval(function(timerStart){
        timerStart--
        console.log("Something")
    }, 1000);
}

timerFunction();

// WHEN I answer a question
// THEN I am presented with another question

// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock (10 seconds)

// WHEN all questions are answered or the timer reaches 0
// THEN the game is over

// WHEN the game is over
// THEN I can save my initials and score