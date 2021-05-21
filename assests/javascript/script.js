var game = {
    round: 0
}
var timer;
var timerCount = 100;
var timerElement = document.querySelector(".timer-count");
// choices
var choice1 = document.querySelector(".choice1");
var choice2 = document.querySelector(".choice2");
var choice3 = document.querySelector(".choice3");
var choice4 = document.querySelector(".choice4");
// the question
var question = document.querySelector(".question");
// start game
var startgame = document.querySelector(".startgame");
// submit score
var submitBtn = document.querySelector(".submitBtn");
// the location the user inputs name
var input = document.querySelector(".input");
// the text telling the user to put name in
var inputText = document.querySelector(".name");

var score = document.querySelector(".score");

// initially hidden
input.style.visibility = "hidden";
inputText.style.visibility = "hidden";
submitBtn.style.visibility = "hidden";
// when the submit button is pressed then the object is put into an empty array which then is pushed into local storage
function submit() {
    highscores = [];
    highscores.push({ score: timerCount, name: input.value.trim() });
    input.style.visibility = "hidden";
    inputText.style.visibility = "hidden";
    submitBtn.style.visibility = "hidden";
    localStorage.setItem("score", JSON.stringify(highscores));
    // gets score and displays on page
    location.href = "highscore.html"
    displayScore()
}

// Cant figure out how to fetch the score...

// function displayScore() {
//     var showScore = localStorage.getItem("score", JSON.parse(highscores));
//     console.log(showScore)
//     score.textContent = showScore[0].name
//     console.log(showScore[0].name)
// }

// hides buttons & shows question and choices
function startGame() {
    choice1.style.visibility = "visible";
    choice2.style.visibility = "visible";
    choice3.style.visibility = "visible";
    choice4.style.visibility = "visible";
    startgame.style.visibility = "hidden";
    next();
    startTimer();
}

//timer
function startTimer() {
    // Sets timer
    alert("WELCOME! Each second you take you lose one point. Each wrong answer sub-tracks ten from your score. Good luck!")
    timer = setInterval(function () {
        timerCount--;
        timerElement.textContent = timerCount;
    }, 1000);
}
// stops the timer
function stopTimer() {
    clearInterval(timer)
    document.body.style.backgroundColor = "black";
}
// if incorrect then
function incorrect() {
    timerCount -= 10;
    timerElement.textContent = timerCount;
    console.log(timerCount)
    document.body.style.backgroundColor = "red";
}
// if correct then
function correct() {
    document.body.style.backgroundColor = "green";
}

// when the user picks 1 this function fires
function pick1() {
    next();
    incorrect()
}
// when the user picks 2 this function fires
function pick2() {
    next();
    correct();
}
// when the user picks 3 this function fires
function pick3() {
    next();
    incorrect()
}
// when the user picks 4 this function fires
function pick4() {
    next();
    incorrect()
}
// sets what question we are on
// sets what round we are on
function next() {
    game.round++
    console.log(game.round)
    // question 1 & choices
    if (game.round === 1) {
        choice1.textContent = "child";
        choice2.textContent = "Boolean";
        choice3.textContent = "Balloon";
        choice4.textContent = "var";

        question.textContent = "Question 1: What represents true and false values.";
    }
    // question 2 & choices
    if (game.round === 2) {
        choice1.textContent = "b1";
        choice2.textContent = "Null";
        choice3.textContent = "b3";
        choice4.textContent = "b4";

        question.textContent = "Question 2: What represents empty, nothing, and unknown type of values.";
    }

    // question 3 & choices
    if (game.round === 3) {
        choice1.textContent = "c1";
        choice2.textContent = "Number";
        choice3.textContent = "c3";
        choice4.textContent = "c4";

        question.textContent = "Question 3: What represents both integer and floating-point values.";
    }

    // question 4 & choices
    if (game.round === 4) {
        choice1.textContent = "d1";
        choice2.textContent = "Object";
        choice3.textContent = "d3";
        choice4.textContent = "d4";

        question.textContent = "Question 4: what is used for storing collections of data or more complex entities.";
    }

    if (game.round === 5) {
        choice1.textContent = "d1";
        choice2.textContent = "String";
        choice3.textContent = "d3";
        choice4.textContent = "d4";

        question.textContent = "Question 5: Represents single-character, multi-character, and alphanumeric values.";
    }

    if (game.round === 6) {
        choice1.textContent = "d1";
        choice2.textContent = "Symbol";
        choice3.textContent = "d3";
        choice4.textContent = "d4";

        question.textContent = "Question 6: Used for creating unique identifiers for objects.";
    }
    // if game.round === last game.round number then show highscore page
    // stop timer and hides last choices
    if (game.round === 7) {
        stopTimer()
        choice1.style.visibility = "hidden";
        choice2.style.visibility = "hidden";
        choice3.style.visibility = "hidden";
        choice4.style.visibility = "hidden";
        question.style.visibility = "hidden";
        input.style.visibility = "visible";
        inputText.style.visibility = "visible";
        submitBtn.style.visibility = "visible";
    }
    // returns the value of game.round
    return game.round;
}


