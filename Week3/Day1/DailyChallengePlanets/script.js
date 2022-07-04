let planetArray = ["mars1", "mars2","mars3","mars4","mars5","mars6","mars7", "mars8"];
let section = document.body.firstElementChild;
for (let i = 0; i <=8; i++) {
  // planetArray += planetArray[i] ;
let planetDiv = document.createElement("div");
section.appendChild(planetDiv);
planetDiv.classList.add("planet");
planetDiv.classList.add(`${planetArray[i]}`);
}




// let div1 = document.getElementsByClassName("mars1")[0];
// div1.style.backgroundColor = "lightblue";
// div1.style.padding = "1.5rem";


// let div2 = document.getElementsByClassName("mars2")[0];
// // console.log(div3);
// div2.style.backgroundColor = "red";
// div2.style.padding = "1.5rem";

let colorArray = ["orange", "beige", "pink", "violet", "lightblue", "grey", "darkgrey", "brown"]
for (let i = 0; i <=8; i++) {
document.getElementsByClassName(`${planetArray[i]}`)[0].style.backgroundColor = (`${colorArray[i]}`);
}