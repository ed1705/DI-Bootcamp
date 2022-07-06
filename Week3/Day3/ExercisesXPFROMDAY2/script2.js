
let buttonForm = document.getElementById("submit")
buttonForm.addEventListener("click", volumeSphere)

function volumeSphere(event){
	event.preventDefault()
	let radiusValue = document.getElementById("radius").value;
	if (isNaN(radiusValue)){
		document.getElementById("radius").value = "";
		document.getElementById("radius").style.border = "2px solid red";
		alert("you should enter only numbers")
	} else{
		let formula = (4/3) * Math.PI * Math.pow(radiusValue, 3);
		let volumeResult = document.getElementById("volume")
		volumeResult.value = formula
	}
}