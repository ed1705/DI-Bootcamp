let client = "John";


let groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        payed : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

// const displayGroceries = Object.keys(groceries).forEach(fruits => {
//   console.log(groceries["fruits"]);
// });
const displayGroceries = () => {
    groceries["fruits"].forEach((fruit) => console.log(fruit));
}

const cloneGroceries = () => {
 let user = client;
 client = "Betty"; //no because inside function, out func will see change bec shre same variable
 let shopping = groceries
 let g = groceries.totalPrice = "35$" //yes because its not primitive value
 let h = groceries["other.payed"]=false; //yes. its not primitive value
 console.log(user) 
}

cloneGroceries()

// const nameOfFunctionExpression = (params) => {
//   //statement
