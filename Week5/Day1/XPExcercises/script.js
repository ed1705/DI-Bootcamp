// 🌟 Exercise 1 : HTML Form
//to browser


// 🌟 Exercise 2 : HTML Form #2

//to network in console . not in url

// 🌟 Exercise 3 : JSON Mario

let marioGame = {
  detail : "An amazing game!",
  characters : {
      mario : {
        description:"Small and jumpy. Likes princesses.",
        height: 10,
        weight: 3,
        speed: 12,
      },
      bowser : {
        description: "Big and green, Hates princesses.",
        height: 16,
        weight: 6,
        speed: 4,
      },
      princessPeach : {
        description: "Beautiful princess.",
        height: 12,
        weight: 2,
        speed: 2,
      }
  },
}


let stringQuiz = JSON.stringify(marioGame, null, 2)
  console.log(stringQuiz)