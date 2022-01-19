// array that holds the questions and their answers
const questions = [["What is my name?", "Robert"],["What is my last name?","Kelly"]];
var questionNo = 1;
var score = 0;
// When button is clicked runs the check and setup function 
function clickButton(){
    check();
    questions.shift();
    questionNo++;
    setup();
}
// this function gets the element id of question of the selected array point
function setup(){
    if(questions.length != 0){
        document.getElementById("question").innerHTML = questions[0][0];
        document.getElementById("questionNo").innerHTML = "Question " + questionNo;
    }
    // if the qestion number doesnt come back with an array value it will return youre done
    // also if the get elemend id comes back with no value it will return your final score
    else{ 
        document.getElementById("questionNo").innerHTML = "You're done!";
        document.getElementById("question").innerHTML = "Your score is: " + score;
        document.getElementById("text-field").remove();
        document.getElementById("button").remove();
    }
}

function check() {
    // if the input to the text field is the same as the seleced array value, it is correct. 
    if(document.getElementById("text-field").value == questions[0][1]){
        console.log("correct");
        score++;
        // resets the input area when done
        document.getElementById("text-field").value = "";
    }

}