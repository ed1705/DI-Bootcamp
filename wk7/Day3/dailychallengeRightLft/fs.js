
const fs = require('fs');


const stepsFind = () =>{
  fs.readFile('RightLeft.txt', (err, data) => {

     const direction = data.toString();
     // console.log(direction);
     const arr = direction.split('');

     let steps = arr.reduce( (acc, currentValue) => {
       if(currentValue === '>'){
         return acc+1;
       }
       else if (currentValue === '<') {
         return acc-1;
       }
       return acc;
     }, 0);

     console.log("Total Steps:", steps);
  })
}

stepsFind();

const stepsFindMinusOne = () =>{
   fs.readFile('RightLeft.txt', (err, data) => {
     // console.time('timer');
     const direction = data.toString();
     const arr = direction.split('');

     let steps = 0;
     let index = 0;
     const x = arr.some( (currentIndex) => {
       if(currentIndex === '>'){
         ++index;
       }
       else if (currentIndex === '<') {
         --index;
       }
       steps++;
       return index < 0;
     }, 0);

     console.log("-1 at:",steps);
  })
}

stepsFindMinusOne();