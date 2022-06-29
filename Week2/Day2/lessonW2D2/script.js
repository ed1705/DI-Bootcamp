// // Nested arrays
// let tshirts = [["tshirt1", "M", 12], ["tshirt2", "L", 10]];

// // objects

// // let variableName = {
// //   property: value,
// //   property: value,    
// // };

// // array is an ordered list
// let colors = ["blue", "red", "yellow"];
// let favoriteColor = colors[1]

let tshirt1 = {
	size : "M",
	price: 12,
}

// syntax to retrieve data from an object
// dot notation
// objectName.keyName
// square bracket notation
// objectName["keyName"]

let priceShirt = tshirt1.price;
let priceShirtOther = tshirt1["price"];

// console.log(priceShirt) //12
// console.log(priceShirtOther) //12
// console.log(tshirt1.price, tshirt1.size)

// add the color of the shirt
tshirt1["color"] = "red";
// console.log(tshirt1)

// modify a value
tshirt1["size"] = "L";
console.log(tshirt1)

let family = {
	lastname : "Smith",
	members : 4,
	hasADog : true,
	nameOfMembers : ["Lea", "David", "Mom", "Dad"],
	friends : {
		name : "Jack",
		lastname : "ABC",
		age : 12,
		favoriteColors : ["blue", "red"],
	}
// };

// //1 Name of the family
// // console.log(family.lastname);
// console.log(family["lastname"]);

// //2. name of 2nd member of the family
// console.log(family["nameOfMembers"][1]);

// //3. Age of the friend
// console.log(family["friends"]["age"]);
// //the same as
// console.log(family.friends.age);

// //4. Display the first favorite color of Jack
// console.log(family["friends"]["favoriteColors"][0]);
// // same
// console.log(family.friends.favoriteColors[0]);


// // I want to sell 3 tshirst
// // each one has a size, a color, a price

// // a list of tshirt, I need an array

// // let shopping = [<1>, <2>, <3>];
// // an array of object
// let shopping = [
// 	{ 
// 		price: 12,
// 		size: "M",
// 		color: "red"
// 	}, 
// 	{
// 		price: 14,
// 		size: "L",
// 		color: "blue"
// 	}, 
// 	{
// 		price: 20,
// 		size: "S",
// 		color: "yellow"
// 	}
// ];

// console.log(shopping)
// // how to get the price of the 2nd tshirt
// console.log(shopping[1]["price"])
// // same
// console.log(shopping[1].price)

// let list = ["red", "blue"]


// // let allT = {
// // 	tshirt1 : {

// // 	},
// // }


// // 1. Add the lastname Smith to the object
// // 2. Change the price of the pear, so it will contain the Taxes. (17%)
// // 3. Ask the user for the fruit he wants between Apple, Banana and Pear.
// // Make sure that your code accept all type of strings,
// // for example "Banana" or "banana" or "BaNaNA"
// // 4. Console.log the price for the specific fruit the user wants

// let userCart = {
// 	username : "John",
// 	password: 1234,
// 	isUserSignedIn : true,
// 	cart : {
// 		apple : 2,
// 		banana : 1,
// 		pear : 5,
// 	},
// 	prices : {
// 		apple : 0.5,
// 		banana : 0.8,
// 		pear : 0.2
// 	}
// };

// userCart["lastname"] = "Smith";
// userCart["prices"]["pear"] = userCart["prices"]["pear"]*1.17
// // or shorthand
// userCart["prices"]["pear"] *= 1.17; 

// let userAnswer = prompt("fruit he wants?").toLowerCase();
// console.log(userCart["prices"][userAnswer])


// // console.log(userCart)
//  let age = Number(prompt("how old are you?"));

// if (age < 18) {
// 	alert("Sorry, you are too young to drive this car. Powering off")
// } else if (age == 18) {
// 	alert("Congratulations on your first year of driving. Enjoy the ride!")
// }
// else {
// 	alert("Powering On. Enjoy the ride!")
// }



// let userCartLog = {
// 	username : "Johnny",
// 	password: 12345,
// 	isUserSignedIn : true,
// };

// // PART I
// // 1. If the user is SignedIn - show him his name and password
// if (isUserSignedIn = true) {
// 	console.log((userCartLog["username"]),(userCartLog["password"]))
// 	} else {
// 		alert("You need to sign in")
	// }

// 2. If not - alert the user "you need to sign in"
// PART II
// 2nd exercise
// 1. If the user is Johnny AND his password is 12345 - alert him "You are signed in"
// 2. If the user is Johnny OR his password is 1234 - alert him "One credential is false"
// 3. Else,alert the user "you need to sign in
let userCartLog = {
	username : "Johnny",
	password: 1234,
	isUserSignedIn : true,
}; 
if ((userCartLog["username"] == "Johnny") && (userCartLog["password"] == "12345")) {
	console.log("You are signed in")
}

else if ((userCartLog["username"] == "Johnny") || (userCartLog["password"] = "1234")) {
	console.log("One credential is false");
} else  console.log("you need to sign in!")





