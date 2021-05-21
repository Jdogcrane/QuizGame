<h1 style="text-align: center;">Quiz Game</h1>

[[Deployed-Site]](https://jdogcrane.github.io/QuizGame/)

[[Site-Preview]](#Site-Preview)

## General overview: 

<p style="font-family:georgia"> 
For this project the goal was to create a quiz style game using mostly javascript. The objective is to have a timer that counts down every second, multiple sets of questions and submit to local storage. The longer the user takes to complete the less time the user will have as a score. If the user fails a question the timer will be reduced by 10. Until all questions are answered the timer will continue running. At the end the user will need to insert name. After that the score will be displayed on the highscore page.
<p>

<h3 style="text-align:center;">Instructions</h3>

1. Click start game
2. select a from multiple choices
3. if you are correct you will proceed with no penalty to score
4. if you are incorrect you will be penalized by subtracting ten from your score
5. after completing quiz insert initials




<h3 style="text-align:center;">JS-Summary</h3>

* Added submit function that inserts data user enters and score to local storage
* Added a function to set up quiz and start timer
* Added functions for each choice
* Added function to change round after each choice
* Added function to stop timer
* Added a generatePassword function to create password with the criteria the user chooses
* Added game obj that keeps track of rounds

>Notes: I managed to get my score and initails into local storage, but I could not figure out how to fetch from my local storage...

## Site Preview
![alt link= this is the place for the site preview](./assests/images/preview.gif)