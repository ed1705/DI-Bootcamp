let inputs = document.querySelectorAll("input");
let button = document.querySelector("#lib-button");
button.addEventListener("click", words);

let adjective = document.querySelector("#adjective1").value;
let noun = document.querySelector("#noun").value;
let adjective2 = document.querySelector("#adjective2").value;
let name = document.querySelector("#person").value;
let verb = document.querySelector("#verb").value;
let place = document.querySelector("#place").value;

function words() {
story = (`${adjective} ${noun}  ${adjective2} ${name} ${verb} ${place} ${adjective}`);
return
}
console.log(story)

// DIDNT HAVE TIME TO DO THIS 