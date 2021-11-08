// create element to represent questions
var questionEl = document.querySelector(".question");

// create element to represent answers
var answerOptionEl = document.querySelector("#answer-opt");

//create element to represent buttons
var continueButton = document.querySelector("#start");
var exitButton = document.querySelector("#quit");

// sets timer to default timing
var counter = 90;
var askEl = document.querySelector(".question");
var optionEl = document.querySelector("#answer-opt");

// sets global variable for number position of question 
var index = 0;

// sets global variable for score count
var score = 0;


var questionnaire = [
    {
        question: "Commonly used data types DO NOT include _____",
        answer: "alerts",
        options: ["strings","booleans","alerts","numbers"]
    },
    {
        question: "Pick the lowest number",
        answer: "",
        options: ["1","3","5"]
    },
    {
        question: "Pick the middle number",
        answer: "",
        options: ["2", "4", "6"]
    },
    {
        question: "Pick the highest number",
        answer: "",
        options: ["3","7", "11"]
    },
    {
        question: "Pick the lowest number",
        answer: "",
        options: ["1","10","100"]
    }
]; // creates array of question objects

/**************************************** Functions section ****************************************************/
var startQuiz = function(index) {
    createQuestion(index);
    // if (//correct)

};

var createQuestion = function(index) {
    // make variables to take place of selected queries^^^
    var question = "<div class=askStyle>" + questionnaire[index].question + "</div>";
    var option = "<div id=answer-opt>" + questionnaire[index].options[0] + "</div>" 
                +"<div id=answer-opt>" + questionnaire[index].options[1] + "</div>"
                +"<div id=answer-opt>" + questionnaire[index].options[2] + "</div>"
                +"<div id=answer-opt>" + questionnaire[index].options[3] + "</div>";
    askEl.innerHTML = question + option;
    // optionEl.innerHTML = option;
}

var displayCorrect = function() {
    var display = ""
};

var displayWrong = function() {

};

var endQuiz = function() {
    var announcement = "<h1 class='disclaimer'>Thanks for taking the quiz! Have a great day!</h1>";
    questionEl.innerHTML = announcement;
};
 continueButton.addEventListener("click", startQuiz);
 exitButton.addEventListener("click", endQuiz);