

// 🌟 Exercise 1 : Scope
// Instructions
// Analyse the code below, and predict what will be the value of a in all the following functions.
// Write your prediction as comments in a js file.

// // #1
// function q1() {
//     var a = 5;
//     if(a > 1) {
//         a = 3;
//     }
//     alert(a); //3
// }

// // run in the console:
// q1()

// //#2
// var a = 0;
// function q2() {
//     a = 5;
// }

// function q22() {
//     alert(a);
// }

// // run in the console:
// q22() // 0
// q2() // 5
// q22() //undefined???

// //#3
// function q3() {
//     window.a = "hello";
// }


// function q32() {
//     alert(a);
// }

// // run in the console:
// q3() //hello
// q32() //undefined

// //#4
// var a = 1;
// function q4() {
//     var a = "test";
//     alert(a);
// }


// // run in the console:
// q4() //test

// //#5
// var a = 2;
// if (true) {
//     var a = 5;
//     alert(a); //5
// }
// alert(a); //5

// 🌟 Exercise 2 : Ternary Operator
// Instructions
// Using the code below:

function winBattle(){
    return true;
}
// Transform the winBattle() function to an arrow function.
// Create a variable called experiencePoints.
// Assign to this variable, a ternary operator. If winBattle() is true, the experiencePoints variable should be equal to 10, else the variable should be equal to 1.
// Console.log the experiencePoints variable.

const winbattle = () => true;

const experiencePoints = winbattle() ? 10 : 1;
console.log(experiencePoints)

// 🌟 Exercise 3 : Is It A String ?


const isString = (strings) => typeof strings === 'string' ? true : false;

console.log(isString('hello')); 
//true
console.log(isString([1, 2, 4, 0]));
//false

// 🌟 Exercise 4 : Colors

let colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

colors.forEach((item, index) => {
    console.log(`#${index+1} choice is ${item}`);
});
let result = colors.some((element) => element="Violet"); 
console.log(result)


// let keyword = "Violet";
// colors.some((object) => {
// console.log(object);
// // return object.indexOf(keyword) > -1 ; 
// if (object.indexOf(keyword) > -1 ) {
//     console.log(yeah)}
// })

// 🌟 Exercise 5 : Colors #2
// Instructions
// Using these arrays :

let color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
let ordinal = ["th","st","nd","rd"];

color.forEach((item, index) => {
   index > 2 ? console.log(`${index+1}`) : expressionIfFalse;
});





