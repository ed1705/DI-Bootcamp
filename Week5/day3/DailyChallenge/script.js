

const makeAllCaps = function (array) {
	return new Promise ((resolve, reject) => {
    let check = array.every(i => typeof i === "string")
			if (check){
				resolve(array.map(i => i.toUpperCase()))
			} else {
				reject(`error ${array}`)
			}	
	
})
}

const softwords  = function (array2) {
	return new Promise ((resolve, reject) => {
			if (array2.length>4){
				resolve(array2.sort(i => i.toUpperCase()))
			} else {
				reject(`error ${array2}`)
			}	
	
})
}

// //in this example, the catch method is executed
// makeAllCaps([1, "pear", "banana"])
//       .then((array2) => sortWords(array2))
//       .then((result) => console.log(result))
//       .catch(error => console.log(error))

// //in this example, the catch method is executed
// makeAllCaps(["apple", "pear", "banana"])
//       .then((array2) => sortWords(array2))
//       .then((result) => console.log(result))
//       .catch(error => console.log(error))

//in this example, you should see in the console, 
// the array of words uppercased and sorted
makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
      .then((array) => sortWords(array))
      .then((result) => console.log(result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
      .catch(error => console.log(error))

// let morse = `{
//     "0": "-----",
//     "1": ".----",
//     "2": "..---",
//     "3": "...--",
//     "4": "....-",
//     "5": ".....",
//     "6": "-....",
//     "7": "--...",
//     "8": "---..",
//     "9": "----.",
//     "a": ".-",
//     "b": "-...",
//     "c": "-.-.",
//     "d": "-..",
//     "e": ".",
//     "f": "..-.",
//     "g": "--.",
//     "h": "....",
//     "i": "..",
//     "j": ".---",
//     "k": "-.-",
//     "l": ".-..",
//     "m": "--",
//     "n": "-.",
//     "o": "---",
//     "p": ".--.",
//     "q": "--.-",
//     "r": ".-.",
//     "s": "...",
//     "t": "-",
//     "u": "..-",
//     "v": "...-",
//     "w": ".--",
//     "x": "-..-",
//     "y": "-.--",
//     "z": "--..",
//     ".": ".-.-.-",
//     ",": "--..--",
//     "?": "..--..",
//     "!": "-.-.--",
//     "-": "-....-",
//     "/": "-..-.",
//     "@": ".--.-.",
//     "(": "-.--.",
//     ")": "-.--.-"
//   }`