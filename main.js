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
var operators = document.getElementsByClassName("operator");
//console.log("operators:", operators);
var clear = document.getElementById("clear");
//console.log("clear:", clear);
var decimal = document.getElementById("decimal");
//console.log("decimal:", decimal);
var equals = document.getElementById("equals");
//console.log("equals:", equals);
var numsClicked = [];
var operator;
var firstEntry = [];
var screen = [];

for (i = 0; i < nums.length; i++) {
  // 1. show clicked num in display
  // 2. store clicked num
  nums[i].addEventListener('click', function (event) {
    display.innerHTML = event.target.innerHTML;
    numsClicked.push(display.innerHTML);
    console.log("numsClicked:", numsClicked);
    screen += numsClicked.join(""); //should show first number in display instead of one digit...not working
    console.log("screen:", screen);
  })  
}

for (i = 0; i < operators.length; i++) {
  operators[i].addEventListener('click', function(event) {
    display.innerHTML = event.target.innerHTML;
    operator = display.innerHTML;
    firstEntry = firstEntry.concat(numsClicked);
    screen = firstEntry.join(""); 
    numsClicked = [];
//    console.log("operator:", operator);
//    console.log("firstEntry:", firstEntry);
//    console.log("screen:", screen);
//    console.log("numsClicked2:", numsClicked);
  })  
}

  equals.addEventListener('click', function() {
    firstEntry = firstEntry.join(""); //change array of first number string to first number
    numsClicked = numsClicked.join(""); //change array of second number sting to second number
//    console.log("numsClickedJoined:", numsClicked);
    display.innerHTML = eval(firstEntry + operator + numsClicked); //do the math on first and second number
//    console.log("numsClicked[0];", numsClicked[0]);
  })

//click clear button clears arrays and display
clear.addEventListener('click', function() {
  display.innerHTML = "";
  numsClicked = [];
  firstEntry = [];
//    console.log("numsArray:", numsClicked);
})

// Add function for Math.sqrt() for the square root button