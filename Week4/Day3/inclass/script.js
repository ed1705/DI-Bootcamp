
// // // // // //--------------------
// // // // // //MAP
// // // // // //-------------------

// // // // map method returns a new array
// // // // whatever the callback function returns will be pushed to the newPriceArray

// // // // map does not mutate the original array - 
// // // // it creates an array and pushes inside this array
// // // // whatever value is returned 
// // // // from the callback function of the map method

// // // // foreach - mutate the initial array

// // const restaurant = [20,15.2,10];

// // // const TAXES = 1.17;

// // // // WITHOUT THE MAP METHOD
// // // function addTaxes () {
// // // 	const newPrices = [];

// // // 	for (let price of restaurant){
// // // 		let newP = price*TAXES;
// // // 		newPrices.push(newP)
// // // 	}
// // // 	console.log(newPrices)
// // // }

// // // addTaxes()

// // // // Syntax MAP METHOD

// // // // the map method 
// // // // 1. creates a new array that is empty by default
// // // // 2. loops through the array
// // // // 3. pushed whatever is returned, to the new array
// // // // const newArr = array.map(function (element, index, array) {
// // // // 	//whatever is returned here, is pushed to the newarray
// // // // })


// // // // restaurant.map(function(element, index, array){
// // // // 	console.log(`The element ${element} is at the ${index} in the array ${array}`)
// // // // })

// // // // WITH THE MAP METHOD
// // // function addTaxesSecond() {
// // // 	const newPrices = restaurant.map((price) => price*TAXES)
// // // 	console.log(newPrices)
// // // }

// // // addTaxesSecond()


// // // //Steps
// // // //create a new empty array called newPrices
// // // //1st loop
// // // //loop through the restaurant array, and we push to the newPrices array
// // // // price*TAXES - 20*1.17
// // // //2nd loop
// // // //loop through the restaurant array, and we push to the newPrices array
// // // // price*TAXES - 15.2*1.17





// // // // // Exercise in class

// // // const students = [
// // // 	{name: 'Rich', score: 33}, 
// // // 	{name: 'Peter', score: 55}
// // // ];

// // // // // Use map to create a new array containing only the score of the students
// // // // // result => [33,55]

// // // // create a new array that is assigned to the scores variable
// // // // and this array contains only the score of each student
// // // // const scores = [33,55]
// // // const scores = students.map((student) => student["score"])
// // // console.log(scores)















// // // let studentScores = students.map((elem) => elem.score)

// // // console.log(studentScores) //[33,55]

// // // studentScores.forEach((elem, ind) =>  
// // // 	document.body.textContent += `The ${ind+1} student got a grade of ${elem}`)

// // // // -------------
// // // // EXERCISES
// // // // -------------



// // const restaurant = [20,15.2,10];

// // const TAXES = 1.17;

// // // WITHOUT THE MAP METHOD
// // function addTaxes () {
// // 	const newPrices = [];

// // 	for (let price of restaurant){
// // 		let newP = price*TAXES;
// // 		newPrices.push(newP)
// // 	}
// // 	console.log(newPrices)
// // }

// // addTaxes()


// // console.log(addTaxes)


// // // ## Exercise 1
// // let famousPeople = [
// //     {
// //         name: "Angelina Jolie",
// //         job: "actor",
// //         age: 80
// //     },
// //     {
// //         name: "Georges Clooney",
// //         job: "actor",
// //         age: 2
// //     },
// //     {
// //         name: "Paris Hilton",
// //         job: "actor",
// //         age: 5
// //     },
// //     {
// //         name: "Kayne West",
// //         job: "singer",
// //         age: 16
// //     },
// //     {
// //         name: "Britney Spears",
// //         job: "singer",
// //         age: 100
// //     }
// // ]




// // // 1. Using the array above, use the map method, to create a new array that contains only the name of the actors
// // // 2. Use the map method, to create a new array, that contains objects, each object contains the name of the actor, and it's job
// // // 3. BONUS: Using the array you get from question2, use the for each method, to add the names and the job of the actors on the DOM (in a paragraph, appended to a div with an id "container")
// // // ## Exercise 2
// // // const studentsFootball = [
// // //  {name: 'Rich', score: 33}, 
// // //  {name: 'Peter', score: 55}
// // // ];
// // // 1. Create a new array of objects, containing the name, score and isAboveAverage
// // // if the students has a score bigger that 50, the key isAboveAverage will be true, else
// // // the key isAboveAverage will be false. Use ternary operator
// // // Result expected
// // // const studentsNew = [
// // //     {name: 'Rich', score: 33, isAboveAverage : false}, 
// // //     {name: 'Peter', score: 55, isAboveAverage : true}
// // // ];


// // const namesPeople = famousPeople.map((person) => person["name"])

// // // const somePeople = famousPeople.map((person) => {
// // // 	let obj = {
// // // 		name:person["name"],
// // // 		job:person["job"]
// // // 	}
// // // 	return obj;
// // // })

// // // same in one line
// // const somePeopleOneLine = famousPeople.map((person) => (
// // 	{name:person["name"],job:person["job"]})
// // )

// // console.log(somePeopleOneLine)


// // // // WITHOUT FILTER
// // // function addNumbers (){
// // // 	const newEvenArray = []
// // // 	for(let num of numbers){
// // // 		if(num%2===0){
// // // 			newEvenArray.push(num)
// // // 		}else{
// // // 			continue;
// // // 		}
// // // 	}

// // // 	console.log(newEvenArray)
// // // }

// // // addNumbers()


// // // // WITH FILTER
// // // function addNumbersSecond(){
// // // 	const newArray = numbers.filter((elem, i, array) => elem%2===0)
// // // 	console.log(newArray)
// // // }

// // // addNumbersSecond()

// // //Steps
// // // create an empty array
// // // 1st loop
// // // condition is true so the element is pushed to the array
// // // newArray = [2]
// // // 2nd loop
// // // condition is false so the element is skipped
// // // 3rd loop
// // // condition is true so the element is pushed to the array
// // // newArray = [2,4]


// // // // EXERCISES IN CLASS

// // const students = [
// // 	{name: 'Rich', score: 33}, 
// // 	{name: 'Peter', score: 55},
// // 	{name: 'John', score: 75}
// // ];

// // // create a new array, 
// // // with only the students that have a score bigger than 50 and the number of letters
// // //in his name bigger than 4

// // const goodStudents = students.filter((elem) => elem["score"]>50 && elem["name"].length > 4);
// // console.log(goodStudents)

// // // // Other example

// // const strings = ["hello", "great", "hey"];

// // // const stringWithH = strings.filter((word) => word.charAt(0) === "h");
// // // console.log(stringWithH)

// // // let numbers = [-23,-20,-17, -12, -5, 0, 1, 5, 12, 19, 20];

// // // const pos = numbers.filter((numbers) => numbers>=0);
// // // console.log(pos)


// // // const characters = [
// // //    { name: 'James T. Kirk', series: ['Star Trek'] },
// // //    { name: 'Spock', series: ['Star Trek', 'Star Trek: The Next Generation'] },
// // //    { name: 'Jean-Luc Picard', series: ['Star Trek: The Next Generation'] },
// // //    { name: 'Worf', series: ['Star Trek: The Next Generation', 'Star Trek: Deep Space Nine'] }
// // // ]; 

// // // const star = characters.filter((actors) => score["actors"] === score["series"][0]+score["series"][1]);
// // // console.log(pos)


// // const students = [
// //  	{name: 'Rich', score: 33}, 
// //  	{name: 'Peter', score: 55},
// //  	{name: 'John', score: 75}
// // ];

// // const scorez = students.reduce((acc, scr) =>students["score"]+students["score"]
// // return acc
// // 	console.log(scr)
// // );
// // // console.log(scr)




// //---------------------
// // Destructuring
// // -----------------------

// // let product = {
// //   name: 'Tshirt',
// //   color: 'blue',
// //   price: 10,
// // }

// // let name = product.name;
// // let price = product.price;

// // let name = product["name"];
// // let price = product["price"];


// // instead we use object destructuring
// // -- destructuring

// // name of the variable need to be equal to the name 
// // of the keys inside the object
// let {name, price} = product;
// console.log("name is : ", name, "price is :", price)
//                         // Tshirt           //10



// console.log(product); //the object is unchanged

// // // --- rename the variables created while destructuring
// // // let {keyName : variableName} = obj
// // create clearer variable name
// let {name : productName, price : productPrice} = product;
// console.log("productName is : ", productName, 
//   "productPrice is :", productPrice)

// // let product = {
// //   name: 'Tshirt',
// //   color: 'blue',
// //   price: 10,
// //   size : "M",
// // }

// // // -- default value with destructuring

// // let {name : productName, price : productPrice, size="L"} = product;

// // console.log("productName is : ", productName, 
// //   "productPrice is :", productPrice, "size is :", size)


// // // ---------------
// // // WITH FUNCTIONS
// // // -----------------

// function displayUser(userObj){
//   let fn = userObj["firstName"];
//   let color = userObj["favoriteColor"];
//   console.log(`The person name is ${fn}, his fav is ${color}`)

// }

// displayUser({firstName: "Alex", favoriteColor: "purple"})

// // destructuring in the parameters of a function
// function displayUser({firstName:username, favoriteColor: color}){
//   console.log(`The person name is ${username}, his fav is ${color}`)
// }

// displayUser({firstName: "Alex", favoriteColor: "purple"})

// // destructuring in the function
// function displayUser(userObj){
//   let {firstName, favoriteColor} = userObj
//   console.log(`The person name is ${firstName}, his fav is ${favoriteColor}`)
// }

// displayUser({firstName: "Alex", favoriteColor: "purple"})


// let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
// let {numPlanets, yearNeptuneDiscovered} = facts;

// console.log(numPlanets); // 8
// console.log(yearNeptuneDiscovered); // 1846


// function getDetails(name, house, goodstudent) {
// 	console.log(name, house, goodstudent)
// }

// getDetails({name: 'Harry Potter',house: 'Gryfindor',goodstudent : false})

let planetFacts = {
  numPlanets: 8,
  yearNeptuneDiscovered: 1846,
  yearMarsDiscovered: 1659
};

let {numPlanets, ...discoveryYears} = planetFacts;

console.log(discoveryYears); // ? obj  



function getMoreDetails({name, house, friend:{friendName, age}}) {
	console.log(name, house, friendName, age)
}

getMoreDetails(
			{name: 'Hermione Granger', 
				house: 'Gryfindor', 
				friend :  {
					friendName : 'Harry Potter', age : 20
				}
			})





