// 🌟 Exercise 1 : Users


// Using Javascript:
// Retrieve the div and console.log it
// Change the name “Pete” to “Richard”.
// Change each first name of the two <ul>'s to your name.
// Delete the <li> that contains the text node “Sarah”.

let div = document.body.children[0];
console.log(div)



let div1 = document.body.children[1];

console.log(div1)

// selecting Pete
let ilElement = div1.lastElementChild;

console.log(ilElement)

ilElement.textContent = "Richard";
console.log(ilElement);


// // Bonus - Using Javascript:
// // Add a class called student_list to both of the <ul>'s.
// // Add the classes university and attendance to the first <ul>.

let x = document.querySelector(`.list`);

x.classList.add("student_list");

let y = x.nextElementSibling;
y.classList.add("student_list");
console.log(y);
x.classList.add("university", "attendance")
console.log(x);

// // 🌟 Exercise 2 : Users And Style
let div2 = document.querySelectorAll("div");
console.log(div);
div3=div2[1];
console.log(div3);
div3.style.backgroundColor = "lightblue";
div3.style.padding = "1.5rem";

let liJohn = div3.nextElementSibling;
console.log(liJohn);
let LiJohn2 = liJohn.firstElementChild;
LiJohn2.style.display="none";
let LiPete = liJohn.lastElementChild;
LiPete.style.border="black solid 2px";
document.body.style.fontSize="22px";


// 🌟 Exercise 3 : Change The Navbar
let navBar = document.querySelector("#navbar");
navBar.setAttribute("id", "#socialNetworkNavigation");
console.log(navBar)
let creaE = navBar.querySelector("ul");
console.log(creaE);



// creaE.createElement("ul");
// creaE.innerHTML = '<p>CreateElement example</p>';
// let ulParent=documentgetElementById("navBar2");
let liChild = document.createElement("li");
let textLi=document.createTextNode("Logout");
// add text to li
//parent.apprehendChild(child)
liChild.appendChild(textLi);
//add li to ul
creaE.appendChild(liChild);







