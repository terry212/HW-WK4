// Set the body to a variable
var body = document.body;
// Top bar variables
var topBar = document.querySelector("#top-status-bar");
var highscoreDiv = document.querySelector("#view-highscore");
var timerDiv = document.querySelector("#time-remain");
// Heading div
var titleDiv = document.querySelector("#bold-header");
// Content div
var contentDiv = document.querySelector("#content-area");
// create variable for the display section
var resultDiv = document.querySelector("#result-display");
// Timer variable
var secondsLeft = 60;
// timer deduction function
function deduct() { secondsLeft -= 10; };
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
// Display of whether choice is right or wrong elements are created below
var resultPTag = document.createElement("p");

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
resultDiv.appendChild(resultPTag);

// Style elements
tbATag.setAttribute("href", "#");
tbATag.setAttribute("style", "margin-left: 5%;margin-top: 3%; font-size:14pt; float: left; height:auto;");
tbPTag.setAttribute("style", "margin-right: 5%;margin-top: 3%; font-size:14pt; float: right; height:auto;");
tbHrTag.setAttribute("style", "margin-top: 1rem; margin-bottom: 1rem; border: 0; border-bottom: 1px solid rgba(0,0,0,.1);");
titleTag.setAttribute("style", "text-align:center;margin-top:8%;");
contentPTag.setAttribute("style", "text-align:justify; font-size: 14pt; padding:3%; margin-top:3%;");
contentStartBtn.setAttribute("class", "btn btn-primary");
contentStartBtn.setAttribute("id", "start-button");
contentStartBtn.setAttribute("style", "margin:auto; height:auto; width:20%; display:block;");
resultPTag.setAttribute("style", "font-size: 14pt; float: left; margin:auto; height:auto; display:block; margin-bottom: 10px !important; padding: 15px;");

// global array used in two functions
optionsList = [optionA, optionB, optionC, optionD];

// Display on title bar
tbPTag.textContent = "Time: " + secondsLeft;

// Countdown timer
function setTime() {
    var timerInterval = setInterval(function () {
        tbPTag.textContent = "Time: " + secondsLeft;
        secondsLeft--;
        if (secondsLeft <= 0) {
            clearInterval(timerInterval);
            tbPTag.textContent = "Time is up!";
            endGame();
        }
    }, 1000);
};

// Event Listner for the start button
var startBtnTag = document.querySelector("#start-button");
var qIndex = -1;
// start button
startBtnTag.addEventListener("click", function () {
    // Start timer when quiz starts
    setTime();
    // remove old data
    contentPTag.remove();
    // remove start button
    contentStartBtn.remove();
    myQuiz();
    // append the buttons, only needs to be called once    
    buttons();
    // evaluate user choice, only needs to be called once
    userInput();
});
// main quiz handler
function myQuiz() {
    if (qIndex < (questions.length - 1)) {
        qIndex++;
    } else { endGame(); }
    // Change title to show the question
    titleTag.textContent = questions[qIndex].q;
    // append choices to the buttons
    for (let i = 0; i < questions.length; i++) {
        optionsList[i].textContent = questions[qIndex].options[i];
    }
};
// function for when all questions are answered
function endGame() {
    secondsLeft = 0;
    titleTag.remove();
    contentDiv.remove();
    resultPTag.remove();

};
// function to append the buttons with attributes
function buttons() {
    // array created to condense code
    idText = ["ans1", "ans2", "ans3", "ans4"];
    for (let i = 0; i < questions.length; i++) {
        contentDiv.appendChild(optionsList[i]);
        optionsList[i].setAttribute("class", "btn btn-primary");
        optionsList[i].setAttribute("id", idText[i]);
        optionsList[i].setAttribute("style", "margin:auto; height:auto; width:50%; display:block; margin-bottom: 10px !important; padding: 15px;");
    }
};
// Evaluate user inputs through the function below
// Append if the choice is correct or wrong
function userInput() {
    for (let i = 0; i < questions.length; i++) {
        var userChoice = [
            userChoiceA = document.getElementById("ans1"),
            userChoiceB = document.getElementById("ans2"),
            userChoiceC = document.getElementById("ans3"),
            userChoiceD = document.getElementById("ans4")];

        userChoice[i].addEventListener("click", function () {
            var correctChoice = document.getElementById(questions[qIndex].correctAns).id;
            if (userChoice[i].id == correctChoice) {
                resultPTag.textContent = "Correct Choice!";
                score += 10;
                myQuiz();
            } else {
                resultPTag.textContent = "Wrong choice, better luck next time";
                deduct();
                myQuiz();
            }
        });
    }
}
