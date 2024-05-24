/*Add your JavaScript here*/

var tinkerScore = 0;
var periScore = 0;

var questionCount = 0;

var result = document.getElementById("result");

var restart = document.getElementById("restart");
restart.addEventListener("click", restartQuiz);

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");


q1a1.addEventListener("click", tinker);
q1a2.addEventListener("click", peri);

q2a1.addEventListener("click", peri);
q2a2.addEventListener("click", tinker);

q3a1.addEventListener("click", peri);
q3a2.addEventListener("click", tinker);


function tinker(){
  tinkerScore += 1;
  questionCount += 1;

  console.log("questionCount = " + questionCount + " tinkerScore = " + tinkerScore);

  if(questionCount ==3){
    console.log("The quiz is done!");
    updateResult();
  }
}


function peri(){
  periScore += 1;
  questionCount += 1;

  console.log("questionCount = " + questionCount + " periScore = " + periScore);

  if(questionCount ==3){
    console.log("The quiz is done!");
    updateResult();
  }
}

function updateResult(){
  if(tinkerScore >= 2){
    result.innerHTML = "You are a Tinker Bell!";
    console.log("You are a Tinker Bell!");
  } else if(periScore >= 2){
    result.innerHTML = "You are a Periwinkle Bell!";
    console.log("You are a Periwinkle Bell!");
  } 
}

function restartQuiz(){
  tinkerScore = 0;
  periScore = 0;
  questionCount = 0;
  result.innerHTML = "You are a...";
}
