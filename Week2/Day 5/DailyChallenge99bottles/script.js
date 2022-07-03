let userNumber = +prompt("enter a number to start the countdown"); 
let downBottle = 1

while(userNumber >= 0) {
	let bottle = "bottles";
	if (userNumber === 1) {
		bottle = "bottle";
	}
	if (userNumber >= 0) {
		
		console.log(`${userNumber} ${bottle} of beer on the wall`);
console.log(`${userNumber} ${bottle} of beer `);
console.log(`Take ${downBottle} down, pass it around,`);
userNumber--;
downBottle=downBottle +1;
	}

// 	else if (userNumber = 0);
// 	console.log(`${userNumber} ${bottle} of beer on the wall`);
// console.log(`${userNumber} ${bottle} of beer `);




// console.log(`${userNumber} ${bottle} of beer on the wall`);
// console.log(`${userNumber} ${bottle} of beer `);
// console.log(`Take ${downBottle} down, pass it around,`);
// userNumber--;
}