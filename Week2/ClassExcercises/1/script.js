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


let addressNumber = 59;
let addressStreet = "Boundary";
let country = "South Africa";
let globalAddress = `I live at ${addressNumber} ${addressStreet} ${country}`;
console.log(globalAddress)

const birthYear = 1978;
let futureYear = 2044;
let futureAge = futureYear-birthYear;
console.log(`I will be ${futureAge} in ${futureYear}`)
// check above? 



