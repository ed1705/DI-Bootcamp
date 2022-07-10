let arrayColors = ["blue", "red", "yellow", "green"];
// you can use an array rgba colors or hex colors


function addColors (){
	let palletSection = document.getElementById("pallet")
	for(let color of arrayColors){
		let divColor = document.createElement("div");
		divColor.style.backgroundColor = color;
		palletSection.appendChild(divColor);
		divColor.addEventListener("click", pickColor)
	}
}


addColors()

function addGrid () {
	let height= 40;
	let width= 40;
	let gridPaintSection = document.getElementById("gridPaint")
	for (let i = 0; i<height*width; i++){
		let divColor = document.createElement("div");
		gridPaintSection.appendChild(divColor)

	}

}

addGrid()

let colorPicked;

function pickColor(evt){
	colorPicked = evt.target.style.backgroundColor;
	console.log(colorPicked)

}

	let block = document.getElementsByTagName("div");
	
	
function mousedownz()	{
	for (let i = 0; i<block.length; i++) { 
block[i].addEventListener("mousedown", function onMouseDown(event){ 
block[i].style.backgroundColor = colorPicked;
console.log(block)
})
}
}		
mousedownz()

	function mouseoverz(evt)	{	
		for (let i = 0; i<block.length; i++) { 
			block[i].addEventListener("mouseover", function onMouseDown(event){ 
            if (mousedownz && colorPicked != null) block[i].style.backgroundColor = colorPicked;

})
	}}	
	



// addEventListener("mousedown", function onMouseDown(event){ 
	
// 	console.log(block)
// 		{ 
// 		// let getBlock = block[i]
// 		block[i].style.backgroundColor = colorPicked;
// // console.log(getBlock);
// 	}
		
// })}
// if (colorPicked());

// 	let (addEventListener("mousedown", function onMouseDown(event){ 
// 	divColor.style.backgroundColor = 'salmon';

// 	}));

// 	else ();
// 	;
// 	console.log(changeColor)

// addEventListener('click', function onClick(event) {
//   // 👇️ change background color
//   document.body.style.backgroundColor = 'salmon';

//   // 👇️ optionally change text color
//   // document.body.style.color = 'white';




