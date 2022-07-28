# Review on Javascript

#### Basics

1. How to access the second element of the array `let arr = [3, 7, 10]`

let [a, b, c] = arr
console.log(b)

<!-- or -->
arr[1]

2. For the code below, what does `arrNums.splice(2, 0)` return?

    ```javascript
    let arrNums = [1, 2, 3, 4, 5];
    ```
<!-- An array with nothing . starts at '3'and adds or deletes nothing to new array -->

3. What is the result of the following code :

    ```javascript
    const oneTwoThree = [1, 2, 3]
    const sevenEightNine = [7, 8, 9]
    
    const all = [4, 5, 6, ...oneTwoThree, ...sevenEightNine];
    console.log(all)
    ```
const all = [4, 5, 6, 1,2,3,7,8,9];

4. What does the following code print to the console?

   ```javascript
   let golf = {
     type: "sport",
     clubs: {
       high_end: "taylor made",
       low_end: "rusty basement clubs"
     }
   }  
   golf.clubs.high_end = "callaway";
   console.log(golf.clubs.high_end);
   ```
<!--    I think callaway because creates new reference point in the memory because global variable changed it outside function... -->


5. Can we define the function as follows? If yes, what is it called, and explain how to invoke it.

    ```javascript
    const x = function(a, b){
       return a*b;
    }
    ```
<!-- invoke it after the function not before by const(x) ,... function expression -->

6. Variables created **without** any keyword, are always global, even if they are created inside a function ? Yes or No and explain

    ```javascript
    function x() {
    	a = 5;
    }
    ```
<!-- I remember reading its always global but this one doesnt seem to work because cant console.log a (undefined) ???????????? -->
#### Functions

7. In JavaScript can we pass functions as arguments to other functions? What does this code return ?

    ```javascript
    function sayHello() {
       return "Hello, ";
    }
    function greeting(helloMessage, name) {
      console.log(helloMessage() + name);
    }
    greeting(sayHello, "JavaScript!");

    // Hello Javascript!
    ```
8. Transform this function into an arrow function

      ```javascript
      function sum(num1, num2){
          return num1 + num2
      }
      
      sum(40,2)
      sum(42,0)
      console.log("the answer to everything is", sum(42,0))
      ```
 const sum = (num1, num2) =>  num1 + num2


9. What does the following code print to the console? Explain the process and concept behind it

     ```javascript
     function foo () {
       function bar() {
         return "Poppin' bottles";
       }
       return bar();
     }
     console.log(foo());
     ```
<!--  function bar is a nested function and is read first , it returns bar()  which is poppin bottles which gets passed into foo(). so answer is poppin bottles--> inner function can work with outer function even though not global??
#### DOM

10. Which of the following events will you add in the `addEventListener()`method? 
      ☐ click
      ☐ onclick
<!-- click -->
11. Does the `addEventListener()` method allow you to add many events to the same element?

    ```javascript
    x.addEventListener("mouseover", func1);
    x.addEventListener("click", func2);
    x.addEventListener("mouseout", func3);`
    ```
<!-- yes i think so -->
12. DOM exercise

      1. Part I : Create a button in your HTML page, when the user will click the the button a paragraph will be added on the DOM with the content "New Paragraph". Use arrow functions

      2. Part II : Add to each new paragraph a event listener of mouse over. When you hoover on a paragraph, it should become red
SEE script.js
#### Array Methods

14. What is the value of `passed` in the following code?

     ```javascript
     let marks = [67, 60, 89, 90, 67, 42];
     
     let passed = marks.every(function(m) {
        return m >= 50;
     });
     ```
FALSE
15. What does the following code log?

   ```javascript
   let nums = [10, 50, 88];
   
   let bignums = nums.filter(function(n) {
      return n > 10;
   });
   
   console.log(bignums);
   ```
<!-- an array of 30 and 88 -->
16. Use a javascript array method to square the value of every element in the array. 

   ```javascript
   const input = [ 1, 2, 3, 4, 5 ];
   //code

   let x = forEach(input){
    input=input*input 
   console.log(input) // [ 1, 4, 9, 16, 25]
   ```
let x = forEach(x){
    x=x*x 
<!-- } -->

16. Use 2 javascript array methods and chain them to return the sum of all the positives ones. 

     ```javascript
     const secondInput = [ 1, -4, 12, 0, -3, 29, -150];
     const total= secondInput.sort().reduce()
     console.log(total) //42
     ```
      
17. Use 3 javascript methods and chain them to abbreviate the name and return the name initials.

     ```javascript
     const input = 'George Raymond Richard Martin';
     const initials = slice
     console.log(initials)//'GRRM'
     ```
????? cant do these without checking google 

#### Object and Classes

18. How the objects are passed in JavaScript? By Value or By Reference ? Explain with an example
By reference. I think if you change a value it will make a new reference in the memory but cant show an example.

19. What will be printed in the console

    ```javascript
    function Item(name, price) {
       this.name = name;
       this.price = price;
       this.displayInfo = function() {
       console.log(this.name + " is for $ " + this.price)
       }
    } 

    const cake = new Item("Chocolate Cake", 10);
    cake.displayInfo();
    ```
I think this chocolate cake is for $10
corect

20. Refactor this code using Classes

#### Promises

21. What will be the output and why ? What will be the state of the promise ?

    ```javascript
    Promise.resolve('Success!')
      .then(data => {
        return data.toUpperCase()
      })
      .then(data => {
        console.log(data)
      })
    ```
<!-- I think it is fulfilled straight away which close it down straight away. so all then. 's dont do anything Not SURE WHY SUCCESS DOESNT SHOW in console???? OH IT DOES SHOW SUCCESS -->
22. What log will be made by the following code, after 2 seconds?

    ```javascript
    const p = new Promise(function(resolve, reject) {
       setTimeout(function() {
          resolve("OK");
       }, 2000);
    });
    
    p.then().then(function(data) {
       console.log(data);
    });
    ```
<!-- resolve OK after 2 seconds and I think (data ) before 2 sec -->

23. Consider the following async function and its output. What will be displayed to the console when calling the `f()` function? Explain the process

    ```javascript
    async function f() {
      let result = 'first!';
      let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve('done!'), 1000);
      });
    
      result = await promise;
    
      console.log(result);
    }
    
    f();
    ```

<!--     result is a variable - first .. but it is changed after 1 second by the promise and only triggers 'done' and not first because result had to wait for the promise to be fulfilled. so at the point ofr console.log it awaited the promise which was a success after 1 second. 
 -->
24. Use async await, and fetch a fact on cats and display it `https://catfact.ninja/fact`
    1. Create 2 functions : one to fetch data from API, the other one to display it on the page using the DOM
    2. Make sure to use try and catch


async function retrieveCat () {

   try {
    const url= (`https://catfact.ninja/fact`)
    const result = await fetch(url);
    console.log(result);

        if (result.status !== 200) {
            throw new Error ("Error in status")
        } else {
            const finalResult = await result.json();
        }

    } catch(error){
        console.log(error.message)
    }
}





