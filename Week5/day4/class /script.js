// Exercise
// # Async Await
// Exercise Game - The word game
// You need to create 4 functions, each of them return a promises
// 1. The 1st function, receives 2 famous persons name from the user -
// if the names are not a string -> reject
// else - resolve with the name of the 2 ppl
// 2. The 2nd function, receives a noun
// if the noun is less than 3 letters - reject
// else - resolve with the noun
// 3. The 3rd function, receives a city
// if the city doesn't start with an uppercase letter -> reject
// else - resolve with the city name
// 4. The 4st function, receives a verb (finishing with "ing")
//  if it doesn't end with "ing" -> reject (use the endWith string method)
// else resolve with the verb
// 5. The last function, is an async function - it receives all the above promises, and return a sentence with it
// Ex: "Beyonce is playing football with Barack Obama in Paris"
// ---
// 6. Part II. BONUS
// Instead of waiting for the promises to come back resolved, look at Promise.all method
// --> running the promises in Parallel
// --> check the difference of performance with performance.now()


const notString = async (name1, name2) => {
  if (typeof name1 !== "string" && typeof name2 !== "string" ) { 
  	throw new Error("You are not a string")
  } else {
  	return [name1, name2];
}

const noun = async (noun1) => {
  if (noun1.length <4) { 
  	throw new Error("You are not a noun")
  } else { return noun1
}
}

const city = async (city) => {
  if (!city[0].uppercase)
  	throw new Error("You are not a city")
  else return city
}

const verb = async (verb) => {
  if (verb = verb.endsWith("ing") {
  	throw new Error("You are not a verb")
  } else { return verb }
}

const includeAll = async () => {
    return console.log(`${name1}, ${name1} ${noun1} ${city} ${verb} `)
}







