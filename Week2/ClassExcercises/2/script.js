// to save some data we need variables
// let nameVariable = value
// let username
// let userName //camelCase Convention

// declaring and defining
let userName = "Leana";
console.log(userName); //displayed - value of the userName variable
console.log("userName"); //displayed - "userName"
// what is the difference

//Declaration
let ageOfUser;
// Definition
ageOfUser=32;
console.log(ageOfUser);

//Redefine
userName="Leana123";

//Cannot redeclare a variable when it was declared with a let keyword
// let userName = "David";

let user = "Tom";
let numPets = 3;
let sentence = user + " has " + numPets + " pets";
console.log(sentence)

//template literals - backtick
let sentenceTemplate = `${user} has ${numPets} pets`;
console.log(sentenceTemplate)


// Exercise1 Platform
//declaring & defining at the same time
let adressNumber = 2; //number
let adressStreet = "Ben Yehuda"; //string
let country = "Israel"; //string

let globalAddress = "I live in " + country + " at the adress " + adressNumber + " " + adressStreet;
let globalAddressTemplate = `I live in ${country} at the adress ${adressNumber} ${adressStreet}`;
console.log(globalAddressTemplate)

//const declare

let pet = "cat";
pet = "dog";
console.log(pet) //dog

//cannot redefine the variable - cannot change the value
// const computer = "HP";
// computer = "Apple";

//string method 
let userN = "john";
let upperUser =  userN.toUpperCase();
console.log(upperUser)

let email = "john@gmail.com";
let result = email.includes("@");
console.log(result)

// string
// index means position
// "H e l l o"
//  0 1 2 3 4

const word = "Hello";
const character = word.charAt(2);
console.log(character) // -> l

// Properties
const color = "blue";
console.log(color.length);

//I want to know the last letter of the word
				   // SAME AS word.charAt(4);
				   // SAME AS word.charAt(5-1)
const lastLetter = word.charAt(word.length-1); // letter O

// // method
// variable.method()

// // properties
// variable.property

// Exercise2
const birthYear = 1987;
let futureYear = 2050;
let futureAge = futureYear-birthYear;

console.log(`In ${futureYear} I will be ${futureAge}`);
// the same
console.log(`In ${futureYear} I will be ${futureYear-birthYear}`);

// ARRAY - complex data type
let pets = ["cat", "dog", "rat", "dolphin"];
// ARRAY index is very important
// syntax to access an element in an array
// variableName[indexOfTheElement]
let firstItem = pets[0];
console.log(firstItem)
let thirdItem = pets[2];
let fourthItem = pets[3];

console.log(pets.length) //->4
// 			pets[4-1]
// 			pets[3]
console.log(pets[pets.length-1])



let petsMore = ["cat", "dog", "rat", "dolphin"];
// 1. Access the rat
// 2. Modify it
petsMore[2] = "hamster";
// console.log(petsMore)

// Array : ordered list
// numerically indexed list

// push method: adds an element at the end of the array
petsMore.push("snake")
// console.log(petsMore)

// delete the last element of the array
// pop - automatically deletes the last element
petsMore.pop();
// console.log(petsMore)

//delete "dog"
petsMore.splice(1,1);
console.log(petsMore)

petsMore.splice(3, 1, "mice");
console.log(petsMore)

//variableName.splice(index where I want to delete or add, 
					  // how many elemnts I want to delete, 
					  // what do I want to add)

let colors = ["blue", "red", "white", "black"];
// delete "red", "white", "black"
// colors.splice(1, 3);

// delete "blue" and "red" and to add "yellow" and "orange"
colors.splice(0, 2, "yellow", "orange");

//nested arrays
let favoriteColors = ["red", "yellow", "blue", ["black", "white"]]
console.log(favoriteColors)
let johnColor = favoriteColors[3][1];
console.log(johnColor) // -> "white"


// Exercise3 
// ask the user for a next pet and add it to the array
let petsJohn = ["cat", "dog"];

// 1. Prompt the user
// 2. Push the value of the variable to the array
// 3. Display the array

let userPet = prompt("What is the next pet ?");
petsJohn.push(userPet);
console.log(petsJohn);


let age = prompt("what is your age"); //if we answer 12
console.log(age) //12
console.log(typeof(age)) //string
// --> we need to convert it back to a number


// typeof
let ageUser = "12";

console.log(typeof(ageUser)) //-> 'string'

//convert from a string to a number
ageUser = Number(ageUser)
console.log(typeof(ageUser)) //-> number

// with prompt
let answer = Number(prompt("what is your age"));



// FUNCTIONS
// console.log("hello");
// alert("hello")
// let userAnswer = prompt("Give me your name");
// console.log(userAnswer)


// COMPARAISON

let test = 123;
// = assigning the value 123 to the variable test

25 == "25" //true
// == means I'm comparing the values

25 === "25" //false
// === means I'm comparing the values but also the data type

!true
// ! means not
// !true -> not true -> false

12 != 4 //true
// is 12 different than 4
// is 12 not equal to 4
// true
// means I'm comparing the values

12 !== 4
// means I'm comparing the values but also the data type

12 > 4 
// is 12 bigger than 4
// true

12 >= 4
// is 12 bigger or equal to 4
// true


let mypets = ['cat','dog','fish','rabbit','cow'];
console.log(mypets[1]);




