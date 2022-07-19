// // api.giphy.com/v1/gifs/random
// https://api.giphy.com/v1/gifs/random?tag=${inputUser}&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My

let form = document.getElementById('formId');
form.addEventListener('submit', getDataForm);


function getDataForm(event){
	event.preventDefault();

	let input = event.target.elements.inputF;
	console.log(input.value)
	getRequest (input.value)
}

function getRequest (inputUser) {

let objxhr = new XMLHttpRequest();
objxhr.open('GET', `https://api.giphy.com/v1/gifs/random?tag=${inputUser}&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`);
objxhr.responseType = 'json'; 
objxhr.send();

objxhr.onprogress= function () {
	console.log("PROCESSING")
}

objxhr.onload = function() {


if (objxhr.status === 200) {
   
    let gif = objxhr.response['data']['images']['original']['url'];
	  console.log(gif)	
    let section = document.getElementById('imgHolder');
    let gifImg = document.createElement('img');
    gifImg.setAttribute('src', gif);
    section.appendChild(gifImg)




	} else {

console.log("error status")
		displayError(objxhr)

		
		// document.body.style.backgroundColor = "green";
		// displayUser(objxhr.response) 
	}
  }

}