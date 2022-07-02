// 🌟 Exercise 1 : Information
// Instructions
// Part I : function with no parameters

// Create a function called infoAboutMe() that takes no parameter.
// The function should console.log a sentence about you (ie. your name, age, hobbies ect…).
// Call the function.


// Part II : function with three parameters

// Create a function called infoAboutPerson(personName, personAge, personFavoriteColor) that takes 3 parameters.
// The function should console.log a sentence about the person (ie. “You name is …, you are .. years old, your favorite color is …”)
// Call the function twice with the following arguments:


function infoAboutMe() {
	console.log("I am 2 years old and my name is Errol")
}

infoAboutMe()


function infoAboutPerson(personName, personAge, personFavoriteColor) {
	console.log(`You name is ${personName}, you are ${personAge} years old, your favorite color is ${personFavoriteColor}`)
}

infoAboutPerson("David", 45, "blue")
infoAboutPerson("Josh", 12, "yellow")

// 🌟 Exercise 2 : Tips
// Instructions
// John created a simple tip calculator to help calculate how much to tip when he and his family go to restaurants.

// Create a function named calculateTip() that takes no parameter.

// Inside the function, ask John for the amount of the bill.

// Here are the rules
// If the bill is less than $50, tip 20%.
// If the bill is between $50 and $200, tip 15%.
// If the bill is more than $200, tip 10%.

// Console.log the tip amount and the final bill (bill + tip).

// Call the calculateTip() function.



function calculateTip() { 
	
     let bill = prompt('John please enter bill amount');
    let tip = bill*calculateTip
	if (bill < 50) {
		tip = bill*1.12;
		return tip;            
		
	} else if (bill < 200 && bill > 50) {
		tip = bill*1.15
		return tip;
	
	} else {
		tip = bill*1.10
		return tip;

	}

}

calculateTip()
console.log(tip)
	

// 🌟 Exercise 3 : Find The Numbers Divisible By 23
// Instructions
// Create a function call isDivisible() that takes no parameter.

// In the function, loop through numbers 0 to 500.

// Console.log all the numbers divisible by 23.

// At the end, console.log the sum of all numbers that are divisible by 23.

// Outcome : 0 23 46 69 92 115 138 161 184 207 230 253 276 299 322 345 368
// 391 414 437 460 483
// Sum : 5313


// Bonus: Add a parameter divisor to the function.

// isDivisible(divisor)

// Example:
// isDivisible(3) : Console.log all the numbers divisible by 3, and their sum
// isDivisible(45) : Console.log all the numbers divisible by 45, and their sum


function isDivisible() {
       // Variable to store the sum
    int = [" "]
    sum = 0;
  

    for (i = 0; i <= 500; i++)
  
        // If the number is divisible,
        // then add it to sum
        if (i % 23 == 0)
            sum += i
        int.push(sum); 
          return sum;
  console.log(sum)
  
}
isDivisible()
//NOT WORKING

 // Excercise 4


 let stock = {
    "banana": 6,
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}

let prices = {
    "banana": 4,
    "apple": 2,
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
}

let shoppingList = ['banana','apple','orange'];

function isInStock(item){
  if(stock[item] && stock[item]>0){
    return true;
  }
  return false;
}

function itemPrice(item) {
  return prices[item];
}

function updateStock(item){
  stock[item]--;
}

function myBill(){
  let sum = 0
  for (var i = 0; i < shoppingList.length; i++) {
    let item = shoppingList[i];
    if(isInStock(item)){
      console.log(item, itemPrice(item));
      updateStock(item);
      sum += itemPrice(item)
    }
  }
  return sum;
}
console.log(myBill())

console.log(stock);
















