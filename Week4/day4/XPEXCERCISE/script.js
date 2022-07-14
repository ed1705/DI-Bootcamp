// 🌟 Exercise 1 : Location
// Instructions
// Analyze the code below. What will be the output?


const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}

const {name, location: {country, city, coordinates: [lat, lng]}} = person;

console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);

// John Doe.   and as the object



// 🌟 Exercise 2: Display Student Info
// Instructions

function displayStudentInfo(objUser){
    let fn = objUser["first"];
  let ln = objUser["last"];
  console.log(`Your full name is ${fn} ${ln}`)
  
}

displayStudentInfo({first: 'Elie', last:'Schoppik'});

//output : 'Your full name is Elie Schoppik'

// 🌟 Exercise 3: User & Id
// Instructions
// Using this object 

// const users = { user1: 18273, user2: 92833, user3: 90315 }
// console.log(Object.entries(users));
// const users2 = Object.entries(users)

// // // Using methods taught in class, turn the users object into an array:
// // Excepted output: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
// // // FYI : The number is their ID number.

// // Modify the outcome of part 1, by multipling the user’s ID by 2.
// // Excepted output: [ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]
// const newuswer = [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
// let newc = newuswer.forEach(newuswer[0][1])*2

// console.log(newc)


// 4
class Person {
  constructor(name) {
    this.name = name;
  }
}

const member = new Person('John');
console.log(typeof member);

// 🌟 Exercise 5 : Dog Class
class Dog {
  constructor(name) {
    this.name = name;
  }
};
  // 2
class Labrador extends Dog {
  constructor(name, size) {
    super(name);
    this.size = size;
  }
};

    // Exercise 6 : Challenges

// [2] === [2] 
// {} === {} not same location in memory therefore false

const object1 = { number: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { number: 5};

object1.number = 4;
console.log(object2.number)
console.log(object3.number)
console.log(object4.number)


//class syntax
// PARENT CLASS
class Animal {
  constructor(animalname, animaltype, animalcolor) {
    this.animalname = animalname;
    this.animaltype = animaltype;
    this.animalcolor = animalcolor;
  }
}



   class Mamal extends Animal {
    constructor (animalname, animaltype, animalcolor, animalsound) {
      super(animalname, animaltype, animalcolor)
      this.sound = animalsound;
      
    }

    sound() {
        // this.sound=animalsound
      console.log(`${this.animalname},${this.animaltype} is making this ${this.animalsound} `)
      
    }
}

let farmerCow = new Mamal("Hagrid", "cow", "white", "moo")
console.log(animalname, animaltype, animalcolor, animalsound)
// farmerCow.sound()











