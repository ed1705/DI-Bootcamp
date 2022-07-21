// 🌟 Exercise 1: Conversion
// Instructions
// Convert the below promise into async await:

// fetch("https://www.swapi.tech/api/starships/9/")
//     .then(response => response.json())
//     .then(result => console.log(result));


async function fetchUsers() {
    const resp = await fetch("https://www.swapi.tech/api/starships/9/")
    const data = await resp.json();  
    console.log(data.result.properties);
}
fetchUsers() 



// 🌟 Exercise 2: Analyze
// Instructions
function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000); //4
    });
}

async function asyncCall() {
    console.log('calling'); //2
    let result = await resolveAfter2Seconds();
    console.log(result); //3
}

asyncCall(); //1
// Analyse the code provided above before executing it - what will be the outcome?