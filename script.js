/*Add your JavaScript here*/
var togScore = 0;
var acotarScore = 0;
var questionCount = 0; //stores the number of answers clicked on


//stores HTML elements using the DOM
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
 
var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");

var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");

var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");

var Restart = document.getElementById("restart");


//listen for click on answer buttons and call function if clicked
q1a1.addEventListener("click", tog);
q1a2.addEventListener("click", acotar);

q2a1.addEventListener("click", tog);
q2a2.addEventListener("click", acotar);

q3a1.addEventListener("click", tog);
q3a2.addEventListener("click", acotar);

q4a1.addEventListener("click", tog);
q4a2.addEventListener("click", acotar);

q5a1.addEventListener("click", tog);
q5a2.addEventListener("click", acotar);

Restart.addEventListener("click", restartQuiz);


//track tog score and check if quiz is complete
function tog(){
  togScore += 1; //or catScore = catScore +1
  questionCount += 1;

  console.log("questionCount = " +questionCount + " togScore = " + togScore);

  if (questionCount == 5){
  console.log("The quiz is done!");
    updateResult();
  
}
}

function acotar(){
  acotarScore += 1;
  questionCount += 1;

  console.log("questionCount = " +questionCount + " acotarScore = " + acotarScore);

  if (questionCount == 5){
  console.log("The quiz is done!");
    updateResult();
    
}
}

//update quiz result
function updateResult(){
  if (togScore > acotarScore){
    result.innerHTML = "You are a Throne of Glass person!";
      console.log("You are a Throne of Glass person!")
  } else if (acotarScore > togScore){
    result.innerHTML = "You are a Court of Thorns and Roses person!";
   console.log("You are a Court of Thorns and Roses person!")
  }
}

//restart buttom
function restartQuiz(){
  result.innerHTML = "You are a..."
  togScore = 0;
  acotarScore = 0;
  questionCount = 0;
  console.log("togScore = " + togScore + " - acotarScore = " + acotarScore + " - questionCount = " +questionCount);
}