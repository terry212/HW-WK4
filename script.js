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
var secondsLeft = 60;

function deduct() {
    secondsLeft -= 10;
    // return secondsLeft;
}

// Score variable
var score = 0;
// Array of questions
var questions = [
    { q: "What is missing in the following tag: <h1></> ?", options: ["h1", "h2", "Nothing", ";"], correctAns: "ans1" },
    { q: "What does DOM stand for?", options: ["Document Oriented Model", "DOMain", "Document Object Mapping", "Document Object Model"], correctAns: "ans4" },
    { q: "To create a link, which tag would you use?", options: ["href", "<a><a/>", "<tag></tag>", "<link></link>"], correctAns: "ans2" },
    { q: "CSS stands for what?", options: ["Cascading Simple Sheets", "Concatenate Style Sheet", "Cascading Style Sheet", "Cascading Sheet Styler"], correctAns: "ans3" }
];

// Declare variables that needs to be created for the top bar status.... tb means top bar, genius
var tbPTag = document.createElement("p");
var tbATag = document.createElement("a");
var tbHrTag = document.createElement("hr");
// Create h1 element for the main title
var titleTag = document.createElement("h2");
//  content p tag
var contentPTag = document.createElement("p");
// content start button
var contentStartBtn = document.createElement("button");
// options buttons
var optionA = document.createElement("button");
var optionB = document.createElement("button");
var optionC = document.createElement("button");
var optionD = document.createElement("button");

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
contentStartBtn.setAttribute("class", "btn btn-primary");
contentStartBtn.setAttribute("id", "start-button");
contentStartBtn.setAttribute("style", "margin:auto; height:auto; width:20%; display:block;");

// Display on title bar
tbPTag.textContent = "Time: " + secondsLeft;

// Countdown timer, add event listener to invoke timer
function setTime() {
    var timerInterval = setInterval(function () {
        tbPTag.textContent = "Time: " + secondsLeft;
        secondsLeft--;
        if ((secondsLeft <= 0) && (qIndex >= questions.length)) {
            clearInterval(timerInterval);
            tbPTag.textContent = "Time is up!";
            titleTag.remove();
            contentDiv.remove();
        }
    }, 1000);
}
// Event Listner for the button
var startBtnTag = document.querySelector("#start-button");
var qIndex = 0;

startBtnTag.addEventListener("click", function () {
    // Start timer when quiz starts
    setTime();
    // remove old data
    contentPTag.remove();
    // remove start button
    contentStartBtn.remove();
    myQuiz();
});

function myQuiz() {
        // Change title to show the question
        titleTag.textContent = questions[qIndex].q;
        // append the buttons       
        buttons();
        // append choices to the 
        optionA.textContent = questions[qIndex].options[0];
        optionB.textContent = questions[qIndex].options[1];
        optionC.textContent = questions[qIndex].options[2];
        optionD.textContent = questions[qIndex].options[3];
        userInput();
}

function buttons() {
    contentDiv.appendChild(optionA);
    optionA.setAttribute("class", "btn btn-primary");
    optionA.setAttribute("id", "ans1");
    optionA.setAttribute("style", "margin:auto; height:auto; width:50%; display:block; margin-bottom: 10px !important; padding: 15px;");
    contentDiv.appendChild(optionB);
    optionB.setAttribute("class", "btn btn-primary");
    optionB.setAttribute("id", "ans2");
    optionB.setAttribute("style", "margin:auto; height:auto; width:50%; display:block; margin-bottom: 10px !important; padding: 15px;");
    contentDiv.appendChild(optionC);
    optionC.setAttribute("class", "btn btn-primary");
    optionC.setAttribute("id", "ans3");
    optionC.setAttribute("style", "margin:auto; height:auto; width:50%; display:block; margin-bottom: 10px !important; padding: 15px;");
    contentDiv.appendChild(optionD);
    optionD.setAttribute("class", "btn btn-primary");
    optionD.setAttribute("id", "ans4");
    optionD.setAttribute("style", "margin:auto; height:auto; width:50%; display:block; margin-bottom: 10px !important; padding: 15px;");
}

function userInput() {
    var userChoiceA = document.getElementById("ans1");
    var userChoiceB = document.getElementById("ans2");
    var userChoiceC = document.getElementById("ans3");
    var userChoiceD = document.getElementById("ans4");

    var userChoice = [userChoiceA, userChoiceB, userChoiceC, userChoiceD];
    var correctChoice = document.getElementById(questions[qIndex].correctAns);

    for (let i = 0; i < (questions.length); i++) {
        userChoice[i].addEventListener("click", function () {
            if ((userChoice[i] === correctChoice)) {
                score += 10;
                qIndex++;
                myQuiz();
            } else {
                deduct();
                qIndex++;
                myQuiz();
            }
        });
    }
}

