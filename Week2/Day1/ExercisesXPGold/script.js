// 🌟 Exercise 1: Your Favorite Food
// Instructions
// Store your favorite food into a variable.

// Store your favorite meal of the day into a variable (ie. breakfast, lunch or dinner)

// Console.log I eat <favorite food> at every <favorite meal>

let myFavoriteFood = "pizza";
let myFavoriteMeal = "lunch";
console.log(`I eat ${myFavoriteFood} at every ${myFavoriteMeal}`);


// 🌟 Exercise 2 : Series1
// Instructions
// Part I
// Using this array : let myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];

// Create a variable named myWatchedSeriesLength that is equal to the number of series in the myWatchedSeries array.
let myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
let myWatchedSeriesLength = [myWatchedSeries.length];
console.log(myWatchedSeriesLength);

// Create a variable named myWatchedSeriesSentence, that is equal to a sentence describing the series you watched
let myWatchedSeriesSentence = `${myWatchedSeries[0]} ${myWatchedSeries[1]} and ${myWatchedSeries[2]}`;
console.log(myWatchedSeriesSentence);

// For example : black mirror, money heist, and the big bang theory

// Console.log a sentence using both of the variables created above
// For example : I watched 3 series : black mirror, money heist, and the big bang 

console.log(`I have not watched all ${myWatchedSeriesLength} series: ${myWatchedSeriesSentence}.`);

// Part II
// Change the series “the big bang theory” to “friends”. Hint : You will need to use the index of “the big bang theory” series.
myWatchedSeries.splice(2,1, "friends");
// Add, at the end of the array, the name of another series you watched.
myWatchedSeries.push("Breaking Bad");

// Add, at the beginning of the array, the name of your favorite series.
myWatchedSeries.unshift("Stranger Things");

// Delete the series “black mirror”.
myWatchedSeries.splice(1,1);

// Console.log the third letter of the series “money heist”.
console.log(myWatchedSeries[1][2]);
// Finally, console.log the myWatchedSeries array, to see all the modifications you’ve made.
console.log(myWatchedSeries);

// 🌟 Exercise 3 : The Temperature Converter
// Instructions
// Store a celsius temperature into a variable.
// Convert it to fahrenheit and console.log <temperature>°C is <temperature>°F.
// Hint : Should you create another variable to hold the temperature in fahrenheit? (ie. point 2)
// Hint: To convert a temperature from celsius to fahrenheit : Divide it by 5, then multiply it by 9, then add 32
let celsiusTemp = [30];
let fahrenheitTemp = [(celsiusTemp/5*9)+32];
console.log(`${celsiusTemp}°C is ${fahrenheitTemp}°F`);



// 🌟 Exercise 4 : Guess The Answers #1
// Instructions
// For each expression, predict what you think the output will be in a comment (//) without first running the command.
// Of course, explain each prediction.
// Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.

// For example

// console.log(2+3)
// // Prediction: It will output 5, because 2 and 3 are numbers
// // Actual: 5


// Using the code below:

    let c;
    let a = 34;
    let b = 21;

    console.log(a+b) //first expression
    // Prediction: It will output 55, because values of a and b are numbers
    // Actual: 55

    a = 2;

    console.log(a+b) //second expression
    // Prediction: It will output 23, same as above but now a's value has changed to the number 2.
    // Actual: 23

// What will be the outcome of a + b in the first expression ? 
55
// What will be the outcome of a + b in the second expression ?
23
// What is the value of c?
undefined
// Analyse the code below, what will be the outcome?
console.log(3 + 4 + '5'); 
= 75

// Exercise 5 : Guess The Answers #2
// Instructions
// For each expression, predict what you think the output will be in a comment (//) without first running the command.
// Of course, explain each prediction.
// Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.


typeof(15)
// Prediction: number
// Actual:

typeof(5.5)
// Prediction: number
// Actual:

typeof(NaN)
// Prediction:undefined 
// Actual: NUMBER

typeof("hello")
// Prediction: string
// Actual:

typeof(true) 
// Prediction: boolean
// Actual:

typeof(1 != 2)
// Prediction: boolean
// Actual:

"hamburger" + "s" 
// Prediction: hamburgers
// Actual:

"hamburgers" - "s"
// Prediction: NAN 
// Actual:

"1" + "3"
// Prediction: 13
// Actual:

"1" - "3"
// Prediction: nan
// Actual: -2 (????)

"johnny" + 5 
// Prediction: johnny5
// Actual:

"johnny" - 5
// Prediction: NAN
// Actual:

99 * "hello"
// Prediction: NAN
// Actual:

1 != 1
// Prediction: False
// Actual:

1 == "1"
// Prediction: False ???? comparing values
// Actual: True 

1 === "1"
// Prediction: false comparing values and data type
// Actual:

// Exercise 6 : Guess The Answers #3
// Instructions
// For each expression, predict what you think the output will be in a comment (//) without first running the command.
// Of course, explain each prediction.
// Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.



// What is the output of each of the expressions below?
5 + "34"
// Prediction: 534
// Actual:

5 - "4"
// Prediction: 1
// Actual:

10 % 5
// Prediction:nan
// Actual: 0

5 % 10
// Prediction:
// Actual: 5 

"Java" + "Script"
// Prediction: JavaScript
// Actual:

" " + " "
// Prediction: ' '
// Actual:

" " + 0
// Prediction:
// Actual: 
' 0'

true + true
// Prediction: true 
// Actual: 2 

true + false
// Prediction: ?
// Actual:2

false + true
// Prediction:? 
// Actual:1

false - true
// Prediction: ? 
// Actual: -1

!true
// Prediction:false
// Actual:

3 - 4
// Prediction: -1
// Actual:

"Bob" - "bill"
// Prediction: NAN
// Actual:



// Exercise 1 : Favorite Color
// Instructions
// let sentence = ["my","favorite","color","is","blue"];
// Write some simple Javascript code that will join all the items in the array above, and console.log the result.
let sentence = ["my","favorite","color","is","blue"];
console.log(sentence.join());


// Exercise 2 : Mixup
// Instructions
// Create 2 variables. The values should be strings. For example:
let str1 = "forest";
let str2 = "jungle";


// 2. Slice out and swap the first 2 characters of the two strings from part 1.

let newstring = str1.splice(0, 2);
let newstring2 = str2.splice(0, 2)
console.log(newstring2, newstring2)



// 3. Create a third variable where the value is the concatenation of the two strings from the part 1 (separated by a space).


// 4. Finally console.log the new concatenated string.



// Some Examples

// let str1 = "mix";
// let str2 = "pod";
// let newWord should be equal to 'pox mid'

// let firstWord = "Hello";
// let secondWord = "World";
// let thirdWord should be equal to 'Wollo Herld'







