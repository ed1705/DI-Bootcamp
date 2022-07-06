// // 🌟 Exercise 1 : Change The Article

// // BONUS : When you hover on the h1, set the font size to a random pixel size between 0 to 100.(Check out this documentation)

// // BONUS : When you hover on the 2nd paragraph, it should fade out
// // (Check out “fade css animation” on Google)

// // Using a DOM property, retrieve the h1 and console.log it.
// let headOne = document.body.children[0].firstElementChild;
// console.log(headOne);

// // Using DOM methods, remove the last paragraph in the <article> tag.
// let lastP = document.body.children[0].lastElementChild;
// lastP.remove();

// // Add a event listener which will change the background color of the h2 to red, when it’s clicked on.
// let headTwo = document.querySelector("h2");
// headTwo.addEventListener("click", clickBtnRed);

// function clickBtnRed(){
// 	headTwo.style.backgroundColor = 'red';
// }
// console.log(headTwo);

// // Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).let headTwo = document.querySelector("h2");
// let headThree= document.querySelector("h3");
// headThree.addEventListener("click", clickHide);

// function clickHide(){
// 	headThree.style.display = 'none';
// }
// 	// Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.

// let allp= document.querySelectorAll("p");
// console.log(allp);
// // create button
// let btn = document.createElement("button");
// let text = document.createTextNode("click here");
// 		btn.appendChild(text);
// 		document.body.children[0].appendChild(btn)
// 		btn.addEventListener("click", makeBold);
// function makeBold(){
// 	for (let i = 0; i<allp.length; i++) 
// 	allp[i].style.fontWeight= "bold";
// }

// // 🌟 Exercise 2 : Work With Forms

// // Retrieve the form and console.log it.
// let formz = document.forms[0];
// console.log(formz);

// // Retrieve the inputs by their id and console.log them.
// let formzInputs = document.forms[0].fname;
// let formzInputs2 = document.forms[0].lname;
// console.log(formzInputs, formzInputs2)

// // Retrieve the inputs by their name attribute and console.log them.let formzInputs = document.forms[0].fname;
// let formzInputsN = document.forms[0].fname;
// let formzInputs2N = document.forms[0].lname;
// console.log(formzInputsN, formzInputs2N)

// // When the user submits the form (ie. submit event listener)
// // use event.preventDefault(), why ?


// // get the values of the input tags,
// // make sure that they are not empty,
// // create an li per input value,
// // then append them to a the <ul class="usersAnswer"></ul>, below the form.
// formz.addEventListener("submit", addAns);

// function addAns (ev) {
// 	ev.preventDefault(); //prevent the form from submitting
// 	let valueName = formzInputsN.value;
// 	let valueLastName = formzInputs2N.value;
// 	console.log(valueName, valueLastName);
// 	}

// formz.addEventListener("submit", addLi);

// function addLi() {
// 	// let ul = document.getElementsByClassName(`usersAnswer`)[0];
// 	let ul = document.getElementById("ulll");
// 	let li = document.createElement("li");
// 		let text = document.createTextNode(`${formzInputsN.value} ${formzInputs2N.value}`);
// 		li.appendChild(text);
// 		ul.appendChild(li)
// }

// 🌟 Exercise 3 : Transform The Sentence
// Instructions
// Add this sentence to your HTML file then follow the steps :

// <p><strong>Hello</strong> I hope you are enjoying <strong>this</strong> class. At the
// <strong>end</strong> you <strong>will</strong> be great Developers!
// <strong>Enjoy</strong> the <strong>JavaScript </strong> lessons</p>


// // In the JS file:

// Declare a global variable named allBoldItems.


// Create a function called getBold_items() that takes no parameter. This function should collect all the bold items inside the paragraph and assign them to the allBoldItems variable.

// Create a function called highlight() that changes the color of all the bold text to blue.

// Create a function called return_normal() that changes the color of all the bold text back to black.

// Call the function highlight() onmouseover (ie. when the mouse pointer is moved onto the paragraph), and the function return_normal() onmouseout (ie. when the mouse pointer is moved out of the paragraph). Look at this example
 // let y = x.textContent
    // let x = document.querySelectorAll("strong")[i].textContent;
    // console.log(x)


function getBold_items() {
	let y = document.querySelectorAll("strong");
	// let y = document.getElementsByTagName("strong");
	// console.log(y);
     // for (let i = 0; i<y.length; i++);
// let z = document.getElementsByTagName("strong")[i].textContent;
return  y;
}
 let allBoldItems = getBold_items()   
console.log(allBoldItems.length);
let allBoldItems2 = [];

function pushit(){
	for (let i = 0; i < allBoldItems.length; i++){
		let listB = allBoldItems[i].textContent;
		console.log(listB);
	
	}
}

console.log(allBoldItems2)




// let allBoldItems = [];

// function getBold_items() {	
// let x = document.getAttribute("strong");
// console.log(x);


// }
// 		let selectStrong = document.querySelectorAll("strong");
// 		// console.log(selectStrong);
// 		for (let i = 0; i<6; i++);
// 			let selectStrong = document.querySelectorAll("strong")[i];
// 	        // let boldItems = selectStrong[i].textContent;
//  allBoldItems.push(boldItems);
// console.log(boldItems);
// // 	let boldItems = document.querySelector("strong");
// // 	for (let i = 0; i<boldItems.length; i++);
// // 	let x = boldItems[i];
// // allBoldItems.push(x);
// // console.log(boldItems);
// }

// getBold_items()
// console.log(allBoldItems);


// 🌟 Exercice 4 : Volume Of A Sphere
// Instructions
// Write a JavaScript program to calculate the volume of a sphere. Use the code below as a base:


///NOT MY CODE , I FOUND IT AND AM JUST STUDYUING IT . NO TIME TO DO IT MYSELF!s

// let buttonForm = document.getElementById("submit")
// buttonForm.addEventListener("click", volumeSphere)

// function volumeSphere(event){
// 	event.preventDefault()
// 	let radiusValue = document.getElementById("radius").value;
// 	if (isNaN(radiusValue)){
// 		document.getElementById("radius").value = "";
// 		document.getElementById("radius").style.border = "2px solid red";
// 		alert("you should enter only numbers")
// 	} else{
// 		let formula = (4/3) * Math.PI * Math.pow(radiusValue, 3);
// 		let volumeResult = document.getElementById("volume")
// 		volumeResult.value = formula
// 	}
// }

