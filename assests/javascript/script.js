var game = {
    round: 0
}
var timer;
var timerCount = 100;
var timerElement = document.querySelector(".timer-count");
var choice1 = document.querySelector(".choice1");
var choice2 = document.querySelector(".choice2");
var choice3 = document.querySelector(".choice3");
var choice4 = document.querySelector(".choice4");
var question = document.querySelector(".question");
var startgame = document.querySelector(".startgame");
var input = document.querySelector(".input");
var inputText = document.querySelector(".name");
var sec = document.querySelector("main");

// initially hidden
input.style.visibility = "hidden";
inputText.style.visibility = "hidden";

// hides start button & shows question and choices
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
    timer = setInterval(function () {
        timerCount--;
        timerElement.textContent = timerCount;
    }, 1000);
}
// stops the timer
function stopTimer() {
    clearInterval(timer)
}

function incorrect() {
    timerCount -= 10;
    timerElement.textContent = timerCount;
    console.log(timerCount)
    document.body.style.backgroundColor = "red";
}

function correct() {
    document.body.style.backgroundColor = "green";
}

// when the user picks 1 this function fires
function pick1() {
    next();
    correct();
}
// when the user picks 2 this function fires
function pick2() {
    next();
    incorrect()
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

function next() {
    game.round++
    console.log(game.round)
    // question 1 & choices
    if (game.round === 1) {
        choice1.textContent = "a1";
        choice2.textContent = "a2";
        choice3.textContent = "Boolean";
        choice4.textContent = "a4";

        question.textContent = "Q1 What represents true and false values";
    }
    // question 2 & choices
    if (game.round === 2) {
        choice1.textContent = "b1";
        choice2.textContent = "Null";
        choice3.textContent = "b3";
        choice4.textContent = "b4";

        question.textContent = "Q2 What represents empty, nothing, and unknown type of values";
    }

    // question 3 & choices
    if (game.round === 3) {
        choice1.textContent = "c1";
        choice2.textContent = "c2";
        choice3.textContent = "Number";
        choice4.textContent = "c4";

        question.textContent = "Q3 What represents both integer and floating-point values";
    }

    // question 4 & choices
    if (game.round === 4) {
        choice1.textContent = "d1";
        choice2.textContent = "Object";
        choice3.textContent = "d3";
        choice4.textContent = "d4";

        question.textContent = "Q4 what is used for storing collections of data or more complex entities";
    }

    // if game.round === last game.round number then show highscore page

    // stop timer and hides last choices
    if (game.round === 5) {
        stopTimer()

        choice1.style.visibility = "hidden";
        choice2.style.visibility = "hidden";
        choice3.style.visibility = "hidden";
        choice4.style.visibility = "hidden";
        question.style.visibility = "hidden";

    }
    // returns the value of game.round
    return game.round;
}

function submit() {
    var score = timerCount;
highscores = [];
highscores.push({score: timerCount, name: 1})

}


alert("WELCOME! Each second you take you lose one point. Each wrong answer sub-tracks ten from your score. Good luck!")





//THINGS TO ADD:

//if answer is wrong then show red screen
//if correct show green screen
//timer
//Highscore page that stores the info using input forum
// Better visual over hall