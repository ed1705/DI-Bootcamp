// # EXERCISE 1
// Create a function that takes in a single parameter
// and returns a new promise.
// Using setTimeout, after 5000 milliseconds, the promise will either
// resolve or reject.
// If the input is a string, the promise resolves with that same string
// uppercased.
// If the input is anything but a string it rejects with that same input.
// Use `then` to repeat the string twice
// use `catch` to console.log the error
// finally call a function that console.log ("congratulation")



const inputString = function (input) {
const checkInput = = new Promise ((resolve, reject) => {

	setTimeout(() => {
	
	if typeof input === "string"{
		resolve(input)
		} else {
			reject("Low grades")
		}
	}, 5000)

} }

inputString.then(repeat => {
		//the parameter gift is the result of the first promise
		console.log(input.toUpperCase)
		throw new Error("problem")
		return input
}) 
.then(repeatagain => {
	//the parameter gift is the result of the first promise
		console.log(input.toUpperCase)
		throw new Error("problem")
		return input
})
.catch(error => console.log("in the catch",error))
// catch will be called if there is an error in the process and the promises are rejected

