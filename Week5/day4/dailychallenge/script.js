// //1

// const urls = [
//   'https://jsonplaceholder.typicode.com/users',
//   'https://jsonplaceholder.typicode.com/postss',
//   'https://jsonplaceholder.typicode.com/albums'
// ]

// const getData = async function() {
//   try {
//     const [ users, posts, albums ] = await Promise.all(urls.map(async function(url) {
//         const response = await fetch(url);
//         return response.json();
//     }));
//     console.log('users', users);
//     console.log('posts', posts);
//     console.log('albums', albums);
//   } catch (err) {
//     console.log('ooooooops', err);
//   }
// }


//2


const form = document.getElementById('my-form');
form.addEventListener("submit", func)

function func (event) {
 event.preventDefault();
    const data = new FormData(event.target);

   const value = Object.fromEntries(data.entries());

    // return { value }
    // geturl(value)
    getData(value)
}



// function geturl (value) {



// // return urls
// urls.push(c)

// // console.log(urls)
// // // func(url)
// }

// let c = []
// console.log(c)


 async function getData(value) {
  const urls = [
  `https://api.sunrise-sunset.org/json?lat=${value.long1}&lng=${value.latt1}`,
  `https://api.sunrise-sunset.org/json?lat=${value.long2}&lng=${value.latt2}`,
];
console.log(urls)
  try {
    const [ users, posts] = await Promise.all(urls.map(async function(url) {
        const response = await fetch(url);
        return response.json();
    }));
    console.log('users', users.results.sunrise);
    console.log('posts', posts);
  } catch (err) {
    console.log('ooooooops', err);
  }
}


// const getData2 = async function() {
//   const arrayOfPromises = urls.map(url => fetch(url));
//   for (const request of arrayOfPromises) {
//     console.log(request);
//   }

//   for await (const request of arrayOfPromises) {
//     const data = await request.json();
//     console.log(data)
//   }
// }
// async function fetchWord () {
//   try {
//     console.log(urls)
//     let responseWord = await Promise.all(urls.map(async function(url) { 
//   if(responseWord.status >= 400 && responseWord.status < 600){
//     throw new Error("ERROR cannot find word")
//   } else {
//     let result = await fetch(url);
//     return response.json();
//   }
// }))
//   } catch (err) {
//     console.log('ooooooops', err);
//   }
// }

// //New for await of feature:
// const loopThroughUrl = (urls) => {
//   for (url of urls) {
//     console.log(url)
//   }
// }


// const getData2 = async function() {
//   const arrayOfPromises = urls.map(url => fetch(url));
//   for (const request of arrayOfPromises) {
//     console.log(request);
//   }

//   for await (const request of arrayOfPromises) {
//     const data = await request.json();
//     console.log(data)
//   }
//   //In this case, for-await takes each item from the array and waits for it to resolve. You'll get the first response even if the second response isn't ready yet, but you'll always get the responses in the correct order.
// }