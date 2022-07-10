// let text = "Hello";

// function checkText (){
// 	console.log("In the function",text); //hello
// 	text += " World"; //hello world
// 	console.log("Still in the function",text); //hello
// }

// console.log("before the function", text);//hello

// checkText()

// console.log("after the function", text); //hello world


// let friend = "Harry";

// function checkfriend (){
// 	let friend = "Alice";
// 	console.log("In the function",friend); //Alice 2
// 	friend += " Smith"; 
// 	console.log("Still in the function",friend); //alice smith 3
// }

// console.log("before the function", friend); //harry 1

// checkfriend() 

// console.log("after the function", friend);  //Harry

// // --------------------
// // --- Functions Declaration
// // --------------------
 
// //1. Invoke
// squareOne(2)

// // 2. Create
// // HOISTED TO THE TOP OF THE SCOPE
// function squareOne (x){
// 	console.log("square")
// 	return x * x;
// }

// // 3. Invoke it again
// squareOne(2)


// // // // --------------------
// // // // --- Functions expression
// // // // --------------------

// // // // anonymous function 
// // // // assigned to a variable

// // squareTwo(2);//not possible

// // // // NOT HOISTED
// const squareTwo = function (x) {
// 	console.log("square")
// 	return x * x;
// }

// squareTwo(2);

// // // -- Use with callbacks
// // // function expression - anonymous 
// btn.addEventListener("click", 
// 	function () {
// 		alert("hello")
// // 	}
// )


// // --------------------
// // --- Anonymous arrow function
// // --------------------

//anonymous
// function (a) {
// 	return a + 100;
// }

// // // The same as
// (a) => {
//   return a + 100;
// }

// // in 1 line, the arrow function returns the value
// (a) => a + 100;

// a => a + 100;

// // // --------------------
// // // --- ES6 arrow functions
// // // ---------

// //function declation 
// squareOne(2);

// // function declaration
// function squareOne (x){
// 	return x * x;
// }

// //function expression
// const squareOne = function (x) {
// 	return x * x;
// }

// //arrow function
// const squareOne = (x) => x*x
// let result = squareOne(2);
// console.log(result)

// // with different number of parameters
// const squareA = (x) => x*x;
// const squareB = x => x*x;
// // more than 1 parameter
// const squareC = (x,y) => x*y;
// // no parameters
// const squareD = () => "hello";

// btn.addEventListener("click", 
// 	function () {
// 		alert("hello")
// 	}
// )

// //same as
// btn.addEventListener("click", () => alert("hello"))

// //If the function has more than 1 line, we need square brackets and return
// const squareOne = (x) => {
// 	x = x + 2
// 	return x*x
// // }
// # Functions & Arrow functions
// ## Exercise 1:
// 1. Greet the user with his name, the user's name is a parameter. Do this exercise,
// * first by using function declarations
// * then function expression,
// * then arrow function




function welcome(username) {
	alert(`Hello ${username}`);
}

welcome("john")
 
fun expression//

const welcomesecond  = function (username) {
alert(`Hello ${username}`);
}


//arrow function
const welcomeThird = (username) => alert(`Hello ${username}`)
welcomeThird("John");

const welcomeFourth = username => alert(`Hello ${username}`)
welcomeFourth("John");

// // // --- TERNARY OPERATOR

function getTemp (temp) {
	if (temp > 20) {
		return "Summer";
	} else {
		return "Winter";
	}
}

getTemp(24)

// expression ? if the expression is true : if the expression is not true
function getTempTwo (temp) {
	let season = temp > 20 ? "Summer" : "Winter";
	return season;
}

getTempTwo(24)

const getTempThree = (temp) => temp > 20 ? "Summer" : "Winter";
getTempThree(24)

// ## Exercise 2: Function & Arrow function & Ternary Operator
// 1. Check if the user's age is higher than 18. Use ternary operator.
// - if the user's age is higher than 18, return "You can drive"
// - else, return "You cannot drive"
// Do this exercise,
// * first by using function declarations
// * then function expression,
// * then arrow function

function getAge (age) {
	if (age > 18) {
		return "You can drive";
	} else {
		return "You cannot drive";
	}
}

getAge(24)

function getAgeTwo (age) {
	let driveable = age > 18 ? "You can drive": "You cannot drive";
	return season;
}
getAgeTwo(24)

const getAgeThree = (age) => age > 18 ? "You can drive" : "You cannot drive";
getAgeThree(24)





