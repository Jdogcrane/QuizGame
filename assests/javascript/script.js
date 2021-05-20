var time;

var choice1 = document.querySelector(".choice1");
var choice2 = document.querySelector(".choice2");
var choice3 = document.querySelector(".choice3");
var choice4 = document.querySelector(".choice4");
var question = document.querySelector(".question");
var startgame = document.querySelector(".startgame");

// hides start button & shows question and choices
function startGame() {
    choice1.style.visibility = "visible";
    choice2.style.visibility = "visible";
    choice3.style.visibility = "visible";
    choice4.style.visibility = "visible";
    startgame.style.visibility = "hidden";
    next();
}
// when the user picks 1 this function fires
function pick1() {
    next();
}
// when the user picks 2 this function fires
function pick2() {
    next();
}
// when the user picks 3 this function fires
function pick3() {
    next();
}
// when the user picks 4 this function fires
function pick4() {
    next();
}


// sets what question we are on
var round = 0

function next() {
    round++
    console.log(round)
    // question 1 & choices
    if (round === 1) {
        choice1.textContent = "a1";
        choice2.textContent = "a2";
        choice3.textContent = "a3";
        choice4.textContent = "a4";

        question.textContent = "Q1";
    }
    // question 2 & choices
    if (round === 2) {
        choice1.textContent = "b1";
        choice2.textContent = "b2";
        choice3.textContent = "b3";
        choice4.textContent = "b4";

        question.textContent = "Q2";
    }

    // question 3 & choices
    if (round === 3) {
        choice1.textContent = "c1";
        choice2.textContent = "c2";
        choice3.textContent = "c3";
        choice4.textContent = "c4";

        question.textContent = "Q3";
    }

    // question 4 & choices
    if (round === 4) {
        choice1.textContent = "d1";
        choice1.textContent = "d2";
        choice1.textContent = "d3";
        choice1.textContent = "d4";

        question.textContent = "Q4";
    }
    // returns the value of round
    return round;
}