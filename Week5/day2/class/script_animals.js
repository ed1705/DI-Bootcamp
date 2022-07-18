let btn = document.getElementById("btn");
btn.addEventListener("click", requestData)


let abc = new XMLHttpRequest();


function requestData () {
abc.open('GET', 'https://jsonplaceholder.typicode.com/users');
abc.responseType = 'json'; 
abc.send();
console.log(abc)
}


abc.onload = function() {
	if (abc.status != 200) {
	 	console.log("error status")
		displayError(abc)
	} else {
		console.log("Finished Loading")
		document.body.style.backgroundColor = "green";
		displayUser(abc.response) 
	}
};


abc.onprogress = function(event) {
	console.log("progress", abc)
	console.log("event.lengthComputable", event.lengthComputable)
	console.log(`Received ${event.loaded} of ${event.total} bytes`)
};

abc.onerror = function(event) {
	console.log("error", abc);
  	displayError(abc)
};

const displayUser = (animals) => {
	let results = document.getElementById("results")
	animals.forEach(info => {
		let li = document.createElement("li");
		li.textContent = `${info.name} - ${info.species}`
		results.appendChild(li)
	});

}

const displayError = (abc) => {
	console.log("in display error")
	let error = document.getElementById("error");
	let h2 = document.createElement("h2");
	// h2.textContent = `Error`;
	h2.textContent = `Error : ${abc.status}`
	h2.style.backgroundColor = 'pink';
	error.appendChild(h2);
}
