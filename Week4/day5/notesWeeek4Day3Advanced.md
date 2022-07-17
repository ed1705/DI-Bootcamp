
# Closure

Closures are **one of the most powerful features of JavaScript**. 

The inner function remembers the environment it was created in.

**A closure is a function having access to the parent scope even after a parent function has closed**

**Closures keep local variables alive from functions that should have destroyed them a long time ago.**

**The point here is to allow others to access values you have inside your function, without letting them directly modify the variables.**

**simulating the concept of a private scope might help you protect your code**

This environment consists of any local variables that were in-scope **at the time the closure was created.** 

Now when the code inside `inner()` looks for `num` variable, it first searches its own Lexical Environment (empty, as there are no local variables there), then the Lexical Environment of the outer `outer()` call, where it finds and changes it.


```javascript
function outer (){
	let num = 0;

	function inner(){
		num ++ //num = num + 1
		return `the number is ${num}`;
	}

	return inner
};

let outerFunc = outer(); 
console.log("outerfunc = ", outerFunc) //return the instance of th reference of the inner function
outerFunc(); //num = 1
console.log(outerFunc()); //num = 2
```

In this case, the outer function returns a **reference** to the instance of the inner function that is created when outer function is run. 
The instance of the inner function maintains a reference to its lexical environment, within which the variable *num* exists. For this reason, when `outerFunc()` is invoked, the variable *num* remains available for use.

[To read before interviews](https://javascript.info/closure)
[To see before interviews](https://www.youtube.com/watch?v=vKJpN5FAeF4)

Usually, a lexical environment gets removed from memory along with all the variables after the function calls finishes . But this is not the case in CLOSURE, it gets tied to the memory even after the function call finishes.

---

# Currying

Currying is a transformation of functions that translates a function from callable as `f(a, b, c)` into callable as 
`f(a)(b)(c)`.

Curried functions are constructed by chaining closures by defining and immediately returning their inner functions simultaneously.

It <u>keeps returning a new function</u> until all the arguments are exhausted. **The arguments are <u>kept "alive"</u>(via closure)** and all are used in execution when the final function in the currying chain is returned and executed.

Currying creates nesting functions according to the number of the arguments of the function. Each function **receives 1 argument**. If there is no argument there is no currying.

<u>Def:</u> Function with 1 parameter == unary function

**In functional programming, we always prefer creating functions with the arity 1 
(unary). They have only one argument.**

```javascript
const getPanCakeIngredients = (ingredient1) =>{
    return (ingredient2) => {
        return (ingredient3) => {
            return ${ingredient1}, ${ingredient2}, ${ingredient3}; 
        } 
    } 
} 
getPanCakeIngredients('Egg')('flour')('milk');
```

Modern way of implementing currying using the ES6 arrow function. 

```javascript
const sendRequest = greet => name => message =>
`${greet} ${name}, ${message}`
sendRequest('Hello')('John')('Please can you add me to your Linkedin network?')
```

## Why do we use currying ?

1. Write little code modules that can be reused and configured with ease
**Curriyng is foundational for functional programming, and is sort of a gateway to thinking about functions in a more modular way.**

2. Avoid frequently calling a function with the same argument

3. It divides your function into multiple smaller functions that can handle one responsibility. This makes your function less prone to errors and side effects

4. More readable

5. Currying :  compose the sequence of your functions and ensures that the particular sequence is enforced and followed. The final output is only returned when all the dependencies have been passed through.

---

## Issues about currying

`func(a)(b)(c)(d) ect...`

But what if you’ve got more than two or three steps? Wouldn’t the nest be so deep that it starts to look like the pyramid of doom in disguise?

This is the visual downfall of currying.

That’s why, as awesome as currying is, you have to be selective about where you apply it.

### Example

```js
const distance = function(start){
  // we have a closed scope here, but we'll return a function that
  //  can access it - effectively creating a "closure".
  return function(end){
    // now, in this function, we have everything we need. we can do
    //  the calculation and return the result.
    return Math.sqrt( Math.pow(end.x-start.x, 2) + Math.pow(end.y-start.y, 2) );
  }
}

console.log(distance({x:2, y:2})({x:11, y:8});
// logs 10.816653826391969 again
```

```js
const distance = function(start){
  return function(end){
    return Math.sqrt( Math.pow(end.x-start.x, 2) + Math.pow(end.y-start.y, 2) );
  }
}

console.log( distance({x:2, y:2})({x:11, y:8});
```

```js
const distancewithCurrying = 
        (start) => 
          (end) => Math.sqrt( Math.pow(end.x-start.x, 2) +
                              Math.pow(end.y-start.y, 2) );
```

---

## Composition

Currying gets interesting as a mechanism for <u>generalization</u> and <u>specialization</u>.

Curried functions are particularly useful in the context of **function composition**. --> Let’s say you have a bunch of functions that need to perform in a particular order. You could, in theory, place all the code in one function, but that would just end up causing chaos in the long run.

```js
const g = (x) => x + 5
const f = (x) => x / 2
const fg = (x) => f(g(x))
fg(5) //returns 5
```

---

## Explanation

Function composition is an approach where the result of one function is passed on to the next function, which is passed to another until the final function is executed for the final result.

We evaluate the functions from right to left, from the inside to the outside

Functions are also called as **Higher-order-functions** as they can take functions as an argument and can also return a function.
This is possible in JavaScript since functions are regular objects, so they can be accepted as arguments and returned.

**Function composing can be very efficient when we have to perform 2 functions on a value**

[To read about composition](https://codeburst.io/function-composition-in-javascript-3856fce19517)

[To read about composition with a word example](https://www.codingame.com/playgrounds/6485/exploring-composition-in-javascript)

[Example of Composition with a Game](https://javascript.plainenglish.io/a-working-example-of-function-composition-in-javascript-5e8c704a13ca)

[Example of composition & currying with Milkshake](https://dev.to/pegahsafaie/real-world-example-of-compose-function-and-currying-3ofl)

---

## Benefits

1. Write code that is much more self-documenting. 

2. Using very small atomic functions, **we are able to test each piece in isolation, making sure that it performs exactly the same every time**. Later on, when we reuse those small functions, we can be confident that they will work –freeing us up from testing each little piece as our function's complexity grows.




