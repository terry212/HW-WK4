// Set the body to a variable
var body = document.body;

// declare variables that will be grabbing query selectors
var topBar = document.querySelector("#top-status-bar");
var highscoreDiv = document.querySelector("#view-highscore");
var timerDiv = document.querySelector("#time-remain");
// var bodyMain = document.querySelector("main");
var secondsLeft = 5;

// declare variables that needs to be created for the top bar status.... tb means top bar, genius
var tbPTag = document.createElement("p");
var tbATag = document.createElement("a");
var tbHrTag = document.createElement("hr");

// Countdown timer
function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        tbPTag.textContent = "Time: " + secondsLeft;
        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            tbPTag.textContent = "Time is up!"
        }
    }, 1000);
}

setTime();
// adding relative content
tbATag.textContent = "View Highscores";

// Append all elements
topBar.appendChild(highscoreDiv);
topBar.appendChild(timerDiv);
timerDiv.appendChild(tbPTag);
highscoreDiv.appendChild(tbATag);
topBar.appendChild(tbHrTag);

// Style elements
tbATag.setAttribute("href", "#");
tbATag.setAttribute("style", "margin-left: 5%;margin-top: 3%;font-size:14pt;float: left; height:auto;");
tbPTag.setAttribute("style", "margin-right: 5%;margin-top: 3%;font-size:14pt;float: right; height:auto;");
tbHrTag.setAttribute("style", "margin-top: 1rem; margin-bottom: 1rem; border: 0; border-bottom: 1px solid rgba(0,0,0,.1);");

// Create a top header area that will house the timer and the link to view highscores