

 function playTheGame() {
    confirm("Do you want to play the game?")
  if (confirm == false) {
    prompt ("No problem, Goodbye");
  } else {
   let userNumber = Number(prompt("enter a number between 0 and 10")); 
       // userNumber = parseInt();
       // console.log(userNumber);
    if (isNaN(userNumber)) {
       
        alert("Sorry not a number, Goodbye");
        // console.log(userNumber);
    } else if (userNumber > 10) { 
        alert("Sorry it's not a good number, Goodbye");
    } else 
     
        compareNumbers(userNumber,computerNumber);  
            
}    
 }

let computerNumber = Math.floor(Math.random() * 11);
console.log(computerNumber)
 // function computerNumber() {
 //    let x = Math.floor((Math.random() * 10) + 1);
 //    console.log(x);
   
 //    return x;
 // }
 
// ----Second Part----

// function compareNumbers(userNum,computerNum){
//    while(userNum > computerNum) {
//         Usernum = parseInt(prompt("Your number is bigger then the computer’s, guess again"));
//         compareNumbers()
//     }
//     if (userNum < computerNum) {
//        parseInt( prompt("Your number is smaller then the computer’s, guess again"));
//     }

//     else {
//     console.log(computerNumber);
//     alert("WINNER!");
// }
//   }
   

function compareNumbers(userNum,computerNum){
   while(userNum !== computerNum) {

         

// if (userNum === computerNum) {
//     console.log(computerNumber);
//     alert("WINNER!");
    
    if (userNum > computerNum){
        prompt("Your number is bigger then the computer’s, guess again");
      

   } else if (userNum < computerNum) {
       prompt("Your number is smaller then the computer’s, guess again");
 
   }   
}
if (userNum === computerNum) {
    console.log(computerNumber);
    alert("WINNER!");
}
}



