// 1st daily challenge

const makeAllCaps = function (arr) {
	return new Promise ((resolve, reject) => {
		let result = arr.every((elem) => typeof elem === "string");
		if (result){
			let newArr = arr.map((elem) => elem.toUpperCase());
			resolve(newArr);
		} else {
			reject("Not all items are strings")
		}
	})
}


const sortWords = function (arrUppercased) {
	return new Promise((resolve,reject) => {
		if (arrUppercased.length > 4) {
			resolve(arrUppercased.sort())
		} else {
			reject("Length not big enough")
		}
	})
}


//in this example, the catch method is executed
makeAllCaps([1, "pear", "banana"]) //this is a rejected promise - we go directly to the catch
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result))
      .catch(error => console.log(error)) // "Not all items are strings"

//in this example, the catch method is executed
makeAllCaps(["apple", "pear", "banana"]) //promise resolved - consumed by the then
      .then((arr) => sortWords(arr)) //promise returned by the sortWords function will be rejected - we go directly to the catch
      .then((result) => console.log(result))
      .catch(error => console.log(error)) // the error is the reason passed to the reject function
      									  // "Length not big enough"
    						  
// //in this example, you should see in the console, 
// // the array of words uppercased and sorted
makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"]) //the function returns a promise that is resolved - it's going to be consumed by the then method
      .then((arr) => sortWords(arr)) //the function returns a promise that is resolved - it's going to be consumed by the then method
      .then((result) => console.log(result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
      .catch(error => console.log(error))





// console.log(sortWords(["apple", "pear", "banana", "melon", "kiwi"])); //resolved promise
// console.log(sortWords(["apple", "pear"])); //rejected promise


// console.log(makeAllCaps([1, "pear", "banana"])) //rejected promise
// console.log(makeAllCaps(["apple", "pear", "banana"])) //resolved promise//