// // 🌟 Exercise 1 : Find The Sum
// const show = (x,y) => {
//   let  add = x+y;
//   console.log(add)
// }

// show(5,5)


// const calculus = (a,b) => a+b
// x = calculus(2,6)
// console.log(x)

// // 🌟 Exercise 2 : Kg And Grams
// // Instructions
// // Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)

// // First, use function declaration and invoke it.
// function nameFunction (kg) {
//   let x = kg*1000
//   console.log(x)
// }

// nameFunction(1)

// // Then, use function expression and invoke it.
// //function expression
// const nameOfFunctionExpression = function (kg) {
//   let x = kg*1000
//   console.log(x)
// } 
// nameOfFunctionExpression(1)
// // Write in a one line comment, the difference between function declaration and function expression.

// // the function becomes anonomous when making the const outside
// // Finally, use a one line arrow function and invoke it.
// //function declaration

// const nameOfFunctionExpression = (kg) => kg*1000



// Exercise 3 : Fortune Teller
(function (number, partner, geo, job) {

   let div = document.createElement("div");
            let text = document.createTextNode(`You will be a ${job} in ${geo}, and married to ${partner} with ${number} kids.`);
               div.appendChild(text);
               document.body.appendChild(div);
  
})("3", "Hadassa", "jhb", "accountant")

// 🌟 Exercise 4 : Welcome

function person(user) {

   let nav = document.querySelectorAll(".navbar-text")[0];
            let text = document.createTextNode(`${user}`);
            console.log(text)
               nav.appendChild(text);
            
               // document.nav.appendChild(nav);
  
}
person("Errol gasmsu")

// 🌟 Exercise 5 : Juice Bar
 function  makeJuice (size){
  const ingredients = [];
console.log(ingredients)
    function addIngredients(ingrOne, ingTwo, ingThree){
      let div = document.createElement("div");
      let text = document.createTextNode(`The client wants a ${size}juice, containing ${ingrOne}, ${ingTwo}, ${ingThree}".`);
         div.appendChild(text);
         document.body.appendChild(div);
       addIngredients.forEach(ingredient => ingredients.push(ingredient))
console.log(c)
    }
    addIngredients("sugar", "lemons", "water")
    
 }

makeJuice("large")


