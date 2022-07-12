// sELF INVOKING FUNCTION

// (function(){
//     alert("hello")
// })()

// (function (username){
//     alert("hello "+username)
// })("John")



// // (function(username){
// // let div = document.getElementById("container");
// // let text = document.createTextNode(username);
// // div.appendChild(text); 
// // })("John")

// // // The nested (inner) function is private to its containing (outer) function.

// function outer() {

//     // private
//     function inner(){
    
//     }

//     inner()
// }

// outer()
// // inner() //not defined because it was created in the local scope


// // //---
// // // Inner function has access to the outer function scope
// // //---


// // // // the outer func : checkName() is going to be ran once
// // // //the inner func, addExclamation() is going to run 3 times
// function checkName() {
//     let name = "John";

//     function addExclamation() {
//         name += "!";
//         console.log("in the addExclamation func", 
//         	name);
//     };

//     addExclamation(); // in the addExclamation func John!
//     addExclamation(); // in the addExclamation func John!!
//     addExclamation(); // in the addExclamation func John!!!
// }

// checkName(); 
// // addExclamation(); //not possible




// function card (){

//     function createCard (){

//     }

//     function addColor (){

//     }

//     function appendPage(){

//     }

//     createCard()
//     addColor()
//     appendPage()

// }

// card()
function starWars(ship) {
	const characters = [];
	characters.push(ship)
 console.log(characters)
    // private


    function createCharacter(firstName, lastName="Smith"){
    lastName === ("Smith") ? characters.push(firstName , "Smith") : characters.push(firstName,lastName) ;
    console.log(characters)
    }

    function displayCharacter() { 
    	let body = document.getElementById("container2");
let text = document.createTextNode(characters, ship);
body.appendChild(text); 

    }
    createCharacter("Eeeeddddd", "eeeeeee")
    createCharacter("Errol", "eeee")
    displayCharacter()
}
starWars("The Devastator")
starWars( "Republic Attack Cruiser")


