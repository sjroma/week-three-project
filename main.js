// Store input as user presses number(s) and/or decimal and display them

// When an "operator" key is pressed clear the display and store the "operator" key

// Store input as user presses number(s) and/or decimal and display them

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
//console.log("nums:", nums);
var display = document.getElementById("display");
//console.log("screen:", screen);
var operators = document.getElementsByClassName("operator")
//console.log("operators:", operators);
var clear = document.getElementById("clear");
//console.log("clear:", clear);
var decimal = document.getElementById("decimal");
//console.log("decimal:", decimal);
var equals = document.getElementById("equals");
//console.log("equals:", equals);
var numsClicked = [];
var operator;

for (i=0; i < nums.length; i++) {
  // 1. show clicked num in display
  // 2. store clicked num
  nums[i].addEventListener('click', function(event) {
    display.innerHTML = event.target.innerHTML;
    numsClicked.push(display.innerHTML);
    console.log("numsClicked:", numsClicked);
  })  
}

for (i=0; i < operators.length; i++) {

  operators[i].addEventListener('click', function(event) {
    display.innerHTML = event.target.innerHTML;
    operator = display.innerHTML;
    console.log("operator:", operator);
  })  
}

  equals.addEventListener('click', function() {
    display.innerHTML = eval(numsClicked[0] + operator + numsClicked[1]);
    //console.log("numsClicked[0];", numsClicked[0]);
  })

  clear.addEventListener('click', function() {
    display.innerHTML = "";
    numsClicked = [];
    console.log("numsArray:", numsClicked);
  })