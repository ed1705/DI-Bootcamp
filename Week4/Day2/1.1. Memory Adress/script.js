//----------------------------
// PASS BY VALUE - EXPLAINATION
//----------------------------

// JavaScript copies the values 
// of the variable into the other variable.

let myNumber = 23;  
			// MEMORY
			// ADDRESS    VALUE
			// 01X 		23


// point to the same adress
let dadNumber = myNumber;
			// MEMORY
			// ADDRESS    VALUE
			// 01X 		23

// this variable has a completely different adress
let mumNumber = 23;

myNumber = 45;

//don't point to the same address
console.log("dadNumber", dadNumber, "myNumber", myNumber)
// dadNumber 23 myNumber 45

//----------------
// PASS BY VALUE - Example
// ---------------

let username = "David";
let myName = username; //they point to the same adress
console.log("username is :", username, "myName is : ", myName) //same value // "David"

myName += " Smith"; //myName points to a new adress
console.log("username is :", username, "myName is : ", myName) //not the same value
//username = David  myName = David Smith
console.log("myName === username", myName === username) // false


//----------------------------
// PASS BY REFERENCE
//----------------------------
// passing the reference/address of the variable

//----
// ARRAYS
//----

const groceries = ["apple"];
const shopping = groceries;

// point to the same adress, that points to a reference in the heap
console.log("groceries = ", groceries, "\nshopping = ",shopping)
// both equal ["apple"]

groceries.push("pear");
console.log("groceries = ", groceries, "\nshopping = ",shopping)
// both equal ["apple", "pear"]

shopping.push("banana")
console.log("groceries = ", groceries, "\nshopping = ",shopping)
// both equal ["apple", "pear", "banana"]

// this variable is a completly dfferent variable so it points to another adress in the stack
const shop = ["apple", "pear", "banana"];
console.log("groceries = ", groceries, "\nshop = ",shop)
console.log("shop === groceries", shop === groceries)


// Why can I push if I use a const ? 
// Can I do : shopping = ["chocolate"] ?

const username = "David";
// username = "Tom" //ERROR - because with const we cannot make the variable
// point to another adress in the stack

// cab mofidy the array even if I used const, because we are modifying the value
// in the heap
// and not creating another adress
const colors = ["blue"];
colors.push("red")



//----------------------------
// WITH OBJECTS
//----------------------------

const person = {
	lastName : "Smith",
	age : 26,
};

const newPerson = person;

console.log("person = ", person, "\nnewPerson = ",newPerson)
console.log("newPerson === person", newPerson === person) //true

newPerson["age"] = 12;

console.log("person = ", person, "\nnewPerson = ",newPerson)
console.log("newPerson === person", newPerson === person)

newPerson["friends"] = {
	list : ["a", "b", "c"]
}

console.log("person = ", person, "\nnewPerson = ",newPerson)
console.log("newPerson === person", newPerson === person)

// WITH FUNCTIONS

let colors = ["blue", "red"];

// same adress
function changeColor(listColors){
	listColors.push("black");
}

changeColor(colors)

console.log(colors)

// different adress
let user = "Tom"

function changeUser(username){
	username+="smith"
}

changeUser(user)

console.log(user)