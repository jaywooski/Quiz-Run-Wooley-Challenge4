// create element to represent questions
var questionEl = document.querySelector(".question");

// create element to represent answers
// var answerOptionEl = document.querySelector("#answer-opt");

//create element to represent buttons
var continueButton = document.querySelector("#start");
var exitButton = document.querySelector("#quit");

// create element to represent options
var optionEl = document.querySelector("#answer-opt");


// sets timer to default timing
var counter = 90;
var askEl = document.querySelector(".question");

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
var startQuiz = function() {
    index = 0;
    createQuestion(index);
    // checkResult(index);

};

var createQuestion = function(index) {
    // make variables to take place of selected queries^^^
    var problem = "<div class=askStyle>" + questionnaire[index].question + "</div>";
    var option = "<div id=answer-opt>" + questionnaire[index].options[0] + "</div>" 
                +"<div id=answer-opt>" + questionnaire[index].options[1] + "</div>"
                +"<div id=answer-opt>" + questionnaire[index].options[2] + "</div>"
                +"<div id=answer-opt>" + questionnaire[index].options[3] + "</div>";
    askEl.innerHTML = problem + option;
    // optionEl.innerHTML = option;
}

var checkResult = function() { 
    var correct = questionnaire[0].answer;
    var selected = document.getElementById("#answer-opt");
    for(i = 0; i < questionnaire[0].options[i].length; i++){
        
        if (selected.clicked == true){
            
            console.log("That was correct");
            break;
        }
        else{
            console.log("Incorrect");
            break;
        }
    }
    
};

// var displayWrong = function() {

// };

var endQuiz = function() {
    var announcement = "<h1 class='disclaimer'>Thanks for taking the quiz! Have a great day!</h1>";
    questionEl.innerHTML = announcement;
};
 continueButton.addEventListener("click", startQuiz);
 exitButton.addEventListener("click", endQuiz);


 optionEl.addEventListener("click", checkResult);