let colors = ["blue", "yellow", "green", "pink"];


let containerDiv = document.getElementById("container");
console.log
let newButt = document.createElement("button");
let text = document.createTextNode(`Click`);
newButt.appendChild(text);
containerDiv.appendChild(newButt);
console.log(containerDiv);