// Write a JavaScript program that recreates the pattern below.
// Do this challenge twice: first by using one loop, then by using two nested for loops (Nested means one inside the other - check out “nested for loops” on Google).
// Do this Daily Challenge by youself, without looking at the answers on the internet.

let stars = " "

for (let i=0; i<6; i++) {
	stars=stars+"*";
	console.log(stars)
}


let a = " ";

for (let row = 0; row<3; row++) {
	for (let column = 0; column<2; column++) {
		a=a+"*"
	console.log(a);
}}

