// Store input as user presses number(s) and/or decimal ("span") and display them



// When an "operator" key is pressed clear the display and store the "operator" key



// When "eval" key is pressed, calculate and display the result



// Potential issues/problems;
// 1. No two operators should be selected consecutively
// 2. The equation shouldn't start with an operator except minus
// 3. No more than one decimal should be in a number

//let stuffThanNeedsEventListeners = document.querySelectorAll('className')
//.forEach(function(element){
//	element.addEvenListener("click", function(){
//		//stuff to do on click
//	})
//});

var nums = document.getElementsByClassName("num");
var screen = document.getElementById("display");

var total = 0;
var tempNumber = "";
var operator;

for (var num of nums) {
  num.addEventListener('click', handleClick);
}

function handleClick(event) {
  tempNumber += event.target.value;
  results.value = tempNumber;
  console.log(tempNumber);
  
  document.getElementById('add').addEventListener
    op = '+';
    total += parseInt(tempNumber);
    tempNumber = "";
};

document.getElementById('equals').addEventListener
  if(op === "+") {
    total += parseInt(tempNumber);
  }
results.value = total;
tempNumber = "";

