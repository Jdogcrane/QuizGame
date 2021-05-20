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

var guess = true
// when the user picks 1 this function fires
function pick1() {
    next();
    guess = true;
    return guess;
}
// when the user picks 2 this function fires
function pick2() {
    guess = false;
    next();
    return guess;
}
// when the user picks 3 this function fires
function pick3() {
    guess = false;
    next();
    return guess;
}
// when the user picks 4 this function fires
function pick4() {
    guess = false;
    next();
    return guess;
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
        choice3.textContent = "Boolean";
        choice4.textContent = "a4";

        question.textContent = "Q1 What represents true and false values";
    }
    // question 2 & choices
    if (round === 2) {
        choice1.textContent = "b1";
        choice2.textContent = "Null";
        choice3.textContent = "b3";
        choice4.textContent = "b4";

        question.textContent = "Q2 What represents empty, nothing, and unknown type of values";
    }

    // question 3 & choices
    if (round === 3) {
        choice1.textContent = "c1";
        choice2.textContent = "c2";
        choice3.textContent = "Number";
        choice4.textContent = "c4";

        question.textContent = "Q3 What represents both integer and floating-point values";
    }

    // question 4 & choices
    if (round === 4) {
        choice1.textContent = "d1";
        choice2.textContent = "Object";
        choice3.textContent = "d3";
        choice4.textContent = "d4";

        question.textContent = "Q4 what is used for storing collections of data or more complex entities";
    }

    // if round === last round number then show highscore page

    // if wrong answer then do this
    if (!guess) {
        document.body.style.backgroundColor = "red";
        // remove 10s from time then return it
    }

    console.log(guess)

    // returns the value of round
    return round;
}





//THINGS TO ADD:

//if answer is wrong then show red screen
//if correct show green screen
//timer
//Highscore page that stores the info using input forum
// Better visual over hall