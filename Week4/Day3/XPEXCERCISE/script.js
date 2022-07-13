// ------1------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);

// ------2------
const country = "USA";
console.log([...country]);

// ------Bonus------
let newArray = [...[,,]];
console.log(newArray);


//2

let users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

const welcomeStudents = users.map((val) => {
  return (`Hello ${val["firstName"]}`)
});
console.log(welcomeStudents)
// const welcomeStudents = ["Hello Bradley", "Hello Chloe", "Hello Jonathan", "Hello Michael", "Hello Robert", "Hello Wes", "Hello Zach"]

// 2. Using the filter() method, create a new array, containing only the Full Stack Residents.
const fullStack = users.filter((elem)=>elem["role"].includes ('Full Stack Resident')
	)
console.log(fullStack)

const nameGoodCharacters = fullStack.map((person) => person["lastName"])
console.log(nameGoodCharacters)

const chainstacked = 
      users.filter((elem)=>elem["role"].includes ('Full Stack Resident'))
      .map((person) => person["lastName"]);
console.log(chainstacked)

// ercise 3 : Star Wars
// Instructions
// Using this array 
let epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

// Use the reduce() method to combine all of these into a single string.

let sum =  epic.reduce((accumulator,currentValue) => {
	return accumulator+currentValue
} );
console.log(sum)

let students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
               {name: "Liam", course: "Computer Science", isPassed: false}, 
               {name: "Jenner", course: "Information Technology", isPassed: true}, 
               {name: "Marco", course: "Robotics", isPassed: true}, 
               {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
               {name: "Jamie", course: "Big Data", isPassed: false}];



const passers = students.filter((elem)=>elem["isPassed"]===true)
	           .forEach(elem => console.log(`Good job ${elem["name"]}`));
	
console.log(passers)

































