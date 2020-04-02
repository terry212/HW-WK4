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
var questions = [
    { q: "What is missing in the following tag: <h1></> ?", options: ["h1", "h2", "Nothing", ";"], correctAns: "h1" },
    { q: "What does DOM stand for?", options: ["Document Oriented Model", "DOMain", "Document Object Mapping", "Document Object Model"], correctAns: "Document Object Model" },
    { q: "To create a link, which tag would you use?", options: ["href", "<a><a/>", "<tag></tag>", "<link></link>"], correctAns: "<a><a/>" },
    { q: "CSS stands for what?", options: ["Cascading Simple Sheets", "Concatenate Style Sheet", "Cascading Style Sheet", "Cascading Sheet Styler"], correctAns: "Cascading Style Sheet"}
    // { q: "", a: "f" }
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
var option1 = document.createElement("button");
var option2 = document.createElement("button");
var option3 = document.createElement("button");
var option4 = document.createElement("button");




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


// Event Listner for the button
var startBtnTag = document.querySelector("#start-button");

function buttons() {
    contentDiv.appendChild(option1);
    option1.setAttribute("class", "btn btn-primary");
    option1.setAttribute("id", "ans1");
    option1.setAttribute("style", "margin:auto; height:auto; width:50%; display:block; margin-bottom: 10px !important; padding: 15px;");
    contentDiv.appendChild(option2);
    option2.setAttribute("class", "btn btn-primary");
    option2.setAttribute("id", "ans2");
    option2.setAttribute("style", "margin:auto; height:auto; width:50%; display:block; margin-bottom: 10px !important; padding: 15px;");
    contentDiv.appendChild(option3);
    option3.setAttribute("class", "btn btn-primary");
    option3.setAttribute("id", "ans3");
    option3.setAttribute("style", "margin:auto; height:auto; width:50%; display:block; margin-bottom: 10px !important; padding: 15px;");
    contentDiv.appendChild(option4);
    option4.setAttribute("class", "btn btn-primary");
    option4.setAttribute("id", "ans4");
    option4.setAttribute("style", "margin:auto; height:auto; width:50%; display:block; margin-bottom: 10px !important; padding: 15px;");
}

// for (let btn = 0; btn < questions.length; btn++) {
//     const element = questions[btn];
// }

function showOptions() {
    for (let i = 0; i < questions.length;) {
        option1.textContent = questions[i].options[0];
        option2.textContent = questions[i].options[1];
        option3.textContent = questions[i].options[2];
        option4.textContent = questions[i].options[3];

    }
}

tbPTag.textContent = "Time: " + secondsLeft;

startBtnTag.addEventListener("click", function () {
    setTime();
    for (let i = 0; i < questions.length; i++) {
        titleTag.textContent = questions[i].q;
        contentPTag.remove();
        contentStartBtn.remove();
        buttons();
        showOptions();

        if (questions[i].correctAns === "h1") {
            console.log("Correct choice");
        } else{
            console.log("Incorrect choice");
        }

    }

});



// Countdown timer, add event listener to invoke timer
function setTime() {
    var timerInterval = setInterval(function () {
        tbPTag.textContent = "Time: " + secondsLeft;
        secondsLeft--;
        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            tbPTag.textContent = "Time is up!";
        }
    }, 1000);
}




