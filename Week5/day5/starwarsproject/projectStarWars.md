# HTML
- image starwars, container, button

# CSS
- flex, flex direction column

# JS
- retrieve the button
- addeventlistener to the button - the event is click and it calls a callback function
of retrieveCharacter

 - async function retrieveCharacter
 	- create the loading and append it on the page
 	- when the data comes back from the fetch - we do display:none

 	- variable random number between 1 and 83
 	- we need to use the random variable in the api `https://www.swapi.tech/api/people/${randomNum}`
 	- fetch the api - we can await the fetch `let result = await fetch(url)`
 	we receive a Response Object 
 		- check the status, it ok -> `let character = await result.json()` 
 							if not ok -> throw an error
 		
	- create another function to fetch the homeworld (partA)
	- displayData will be called in partA, to append the character on the page

--> we will need to catch the error, in the catch of the block try/catch


## IMPORTANT
- use object destructuring
- use several functions to brek down the steps
- use async await


## Think about

--> try not the fetch twice the same character (meaning don't show the character twice in a row)
