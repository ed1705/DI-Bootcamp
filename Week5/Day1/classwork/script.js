// // // //--------------------------
// // // // JSON
// // // // -------------------------

// // // data is sent and received by using JSON format
// // // client and server communicate-in order for example for the server
// // // to send data to the client -we use JSON


// // // --------------
// // //convert a JSON string into a JS object
// // // -------------

// // SYNTAX
// // JSON.parse(pass the json string)

// const fromjson = '{"result":true, "count":42}'; //JSON STRING
// console.log(fromjson)

// const toobj = JSON.parse(fromjson); 
// console.log(toobj)
// // retrieve the value of the count key
// console.log(toobj["count"])
// console.log(toobj.count);
// console.log("typeof(fromjson) : ", typeof(fromjson), " typeof(toobj) : ", typeof(toobj))


// // // --------------
// // //convert a JS object into a JSON string 
// // // -------------

// // SYNTAX
// // JSON.stringify(pass the js obj)

// const fromobj = {username:"John", age:25};
// console.log(typeof fromobj)
// const tojson = JSON.stringify(fromobj)
// console.log(typeof tojson)

// // // --------------
// // // Example in class 
// // // -------------

// // const jsonString = `{
// //     "employees":[
// //         {"firstName":"John", "lastName":"Doe"},
// //         {"firstName":"Anna", "lastName":"Smith"},
// //         {"firstName":"Peter", "lastName":"Jones"}
// //     ]
// // }`

// // // convert it to a js object

// // const getEmployee = function (){
// // 	let employeeObj = JSON.parse(jsonString);

// // 	for(let employee of employeeObj["employees"]){
// // 		console.log(employee["firstName"], employee["lastName"])
// // 		// add the names of the employees to the DOM
// // 	}

// // }

// // getEmployee()












// let jsonString = `
// {
//     "quiz": {
//         "sport": {
//             "q1": {
//                 "question": "Which one is correct team name in NBA?",
//                 "options": [
//                     "New York Bulls",
//                     "Los Angeles Kings",
//                     "Golden State Warriros",
//                     "Huston Rocket"
//                 ],
//                 "answer": "Huston Rocket"
//             }
//         },
//         "maths": {
//             "q1": {
//                 "question": "5 + 7 = ?",
//                 "options": [
//                     10,
//                     11,
//                     12,
//                     13
//                 ],
//                 "answer": 12
//             },
//             "q2": {
//                 "question": "12 - 8 = ?",
//                 "options": [
//                     1,
//                     2,
//                     3,
//                     4
//                 ],
//                 "answer": 4
//             }
//         }
//     }
// }`

// // Exercise # JSON
// // # Exercise with JSON
// // 1. Parse this JSON string into a JS object
// // 2. Use array or object methods to display THE VALUES OF THE OPTIONS OF THE FIRST SPORT QUESTION
// // 3. Create another variable to stringify the JS object. Console.log the variable
// // 4. Then use pretty print (look at the lesson)

// // const ajson  = JSON.parse(jsonString); 
// // console.log(ajson)
// const getOptions = function (){
// 	let ajson  = JSON.parse(jsonString); 
// 	let retrievAllOPt = ajson["quiz"]["sport"]["q1"]["options"]
// 	console.log("options")
// retrievAllOPt.forEach((element) => console.log(element))
	
// }()



// getOptions()

// Exercises
// # Exceptions
// ## Exercise 1
// Write a function called `divide` that takes two parameters: a numerator and a denominator.
// Your function should return the result of numerator / denominator.
// However, if denominator is zero you should throw the error, "Attempted to divide by zero."
// ## Exercise 2
// Using the code below:
// const someVar = 'Cannot be reassigned';
// try {
//   someVar = 'Still going to try';
// } catch(e) {
//   console.log(e);
// }
// console.log("after")
// 1. Which type of error will be thrown ? Look on the different types errors on Google
// 2. Is the console.log("after") will be shown on the console ?


function divide(numerator, denominator){
	
	try {
		let result 
		if (denominator > 0) {
			result = numerator/denominator;
			
		} else {
		
			throw RangeError("Attempted to divide by zero.") //throw an exception
		}
		console.log("result : ", result)
	} catch (error) {
		// caught here
		// error is what was thrown in the try
		console.log(error.message) //"you are missing the @"
	}
}

divide(3, 1)
divide(2, 0)













