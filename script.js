// Set the body to a variable
var body = document.body;

// Declare variables that will be grabbing query selectors
// Top bar variables
var topBar = document.querySelector("#top-status-bar");
var highscoreDiv = document.querySelector("#view-highscore");
var timerDiv = document.querySelector("#time-remain");
// Heading div
var titleDiv = document.querySelector("#bold-header");
// Content div
var contentDiv = document.querySelector("#content-area");
// var bodyMain = document.querySelector("main");

// Timer variable
var secondsLeft = 75;

// Score variable
var score = 0;

// Array of questions
// var questions = [
//     { q: "", a: "t" },
//     { q: "There are 365 days in a year.", a: "t" },
//     { q: "There are 42 ounces in a pound.", a: "f" },
//     { q: "The Declaration of Independence was created in 1745.", a: "f" },
//     { q: "Bananas are vegetables.", a: "f" }
// ];

// Declare variables that needs to be created for the top bar status.... tb means top bar, genius
var tbPTag = document.createElement("p");
var tbATag = document.createElement("a");
var tbHrTag = document.createElement("hr");
// Create h1 element for the main title
var titleTag = document.createElement("h1");
//  content p tag
var contentPTag = document.createElement("p");
// content start button
var contentStartBtn = document.createElement("button");

// Countdown timer, add event listener to invoke timer
function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        tbPTag.textContent = "Time: " + secondsLeft;
        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            tbPTag.textContent = "Time is up!";
        }
    }, 1000);
}

setTime();
// Adding relative content
tbATag.textContent = "View Highscores";
titleTag.textContent = "Code Quiz Challenge";
contentPTag.textContent = "Are you ready for a challenge? The following is a code to test your knowledge about coding. Each correct answer is worth 5 points and each wrong answer is worth 0 points; However, you will lose 10 seconds for every wrong answer";
contentStartBtn.textContent = "START";

// Append all elements
topBar.appendChild(highscoreDiv);
topBar.appendChild(timerDiv);
timerDiv.appendChild(tbPTag);
highscoreDiv.appendChild(tbATag);
topBar.appendChild(tbHrTag);
titleDiv.appendChild(titleTag);
contentDiv.appendChild(contentPTag);
contentDiv.appendChild(contentStartBtn);


// Style elements
tbATag.setAttribute("href", "#");
tbATag.setAttribute("style", "margin-left: 5%;margin-top: 3%;font-size:14pt;float: left; height:auto;");
tbPTag.setAttribute("style", "margin-right: 5%;margin-top: 3%;font-size:14pt;float: right; height:auto;");
tbHrTag.setAttribute("style", "margin-top: 1rem; margin-bottom: 1rem; border: 0; border-bottom: 1px solid rgba(0,0,0,.1);");
titleTag.setAttribute("style", "text-align:center;margin-top:8%;");
contentPTag.setAttribute("style", "text-align:justify; font-size: 14pt; padding:3%; margin-top:3%;");
contentStartBtn.setAttribute("class","btn btn-primary");
contentStartBtn.setAttribute("style", "margin:auto; height:auto; width:20%; display:block;");

// Create a top header area that will house the timer and the link to view highscores