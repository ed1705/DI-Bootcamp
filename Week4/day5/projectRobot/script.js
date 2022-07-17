const robots = [
          {
            id: 1,
            name: 'Leanne Graham',
            username: 'Bret',
            email: 'Sincere@april.biz',
            image: 'https://robohash.org/1?200x200'
          },
          {
            id: 2,
            name: 'Ervin Howell',
            username: 'Antonette',
            email: 'Shanna@melissa.tv',
            image: 'https://robohash.org/2?200x200'
          },
          {
            id: 3,
            name: 'Clementine Bauch',
            username: 'Samantha',
            email: 'Nathan@yesenia.net',
            image: 'https://robohash.org/3?200x200'
          },
          {
            id: 4,
            name: 'Patricia Lebsack',
            username: 'Karianne',
            email: 'Julianne.OConner@kory.org',
            image: 'https://robohash.org/4?200x200'
          },
          {
            id: 5,
            name: 'Chelsey Dietrich',
            username: 'Kamren',
            email: 'Lucio_Hettinger@annie.ca',
            image: 'https://robohash.org/5?200x200'
          },
          {
            id: 6,
            name: 'Mrs. Dennis Schulist',
            username: 'Leopoldo_Corkery',
            email: 'Karley_Dach@jasper.info',
            image: 'https://robohash.org/6?200x200'
          },
          {
            id: 7,
            name: 'Kurtis Weissnat',
            username: 'Elwyn.Skiles',
            email: 'Telly.Hoeger@billy.biz',
            image: 'https://robohash.org/7?200x200'
          },
          {
            id: 8,
            name: 'Nicholas Runolfsdottir V',
            username: 'Maxime_Nienow',
            email: 'Sherwood@rosamond.me',
            image: 'https://robohash.org/8?200x200'
          },
          {
            id: 9,
            name: 'Glenna Reichert',
            username: 'Delphine',
            email: 'Chaim_McDermott@dana.io',
            image:'https://robohash.org/9?200x200'
          },
          {
            id: 10,
            name: 'Clementina DuBuque',
            username: 'Moriah.Stanton',
            email: 'Rey.Padberg@karina.biz',
            image:'https://robohash.org/10?200x200'
          }
          ];



function GetRobots () {
  robots.forEach(element => {
    let nameOf = element["name"];
    let emailOf = element["email"];
    let imageOf = element["image"];
    let idRobot = element["id"];
 

    appendPage(nameOf, emailOf, imageOf, idRobot)


  })
}
 
    let sectionRobot = document.getElementById("content");

function appendPage(nameOf, emailOf, imageOf, idRobot){

    	let newCard = document.createElement("div");
    	newCard.setAttribute("id", idRobot);
    	newCard.classList.add("card");
    	let newParagraph = document.createElement("p");
      let newParagraph2 = document.createElement("p");
        let textParagraph = document.createTextNode(nameOf);
        let textParagraph2 = document.createTextNode(emailOf);
         newParagraph.style.fontSize = "0.8em";
        newParagraph2.style.fontSize = "0.5em";
        let image = document.createElement("img");
        image.classList.add("imageOf");
		    image.src=imageOf;
       

        let div2 = document.createElement("div");
        div2.classList.add("back");
        // let textParagraph = document.createTextNode("hello");

     newParagraph.classList.add("robotStyle");
      newParagraph2.classList.add("robostyles");
        newParagraph.appendChild(textParagraph);
        newParagraph2.appendChild(textParagraph2);
        div2.appendChild(newParagraph);
         div2.appendChild(newParagraph2);
        div2.appendChild(image);
        
        sectionRobot.appendChild(newCard);
        newCard.appendChild(div2);
}
   
  	 GetRobots()

//  function y(nameOf, emailOf, imageOf, idRobot){
//  let users = []
//  users.push(nameOf, emailOf, imageOf, idRobot)
//  console.log(users);


//  let searchInput = document.getElementById("searchbar");
// searchInput.addEventListener("input", e => {
// 	const value = e.target.value.toLowerCase()
// 	users.forEach(user => {
// 		const isVisible = nameOf.includes(value) 
// 		console.log(users)
// 		console.log(nameOf)
// 		console.log(idRobot)
// 	let l = document.getElementById(idRobot)
// 	// console.log(l)
// 	// // m= l.getElementsByClassName
// 	// let l= document.getElementsByClassName("card")[0]
// 		console.log(l)
// 		// if isVisible !=== true {
// 		// 		let nCard = documentgetElementsByClassName("card");
//   //   	nCard.setAttribute("class ", );
    	
// 		// }
// 		l.classlist.toggle("hide", !isVisible)
// 	 })
// })

// }



const input = document.querySelector('input');

const log = document.getElementById('searchbar');


input.addEventListener('input', updateValue);

function updateValue(e) {
  log.textContent = e.target.searchbar;
  let data = e.data
console.log(data)
console.log(robots[nameOf])
console.log(nameOf)
}

// let g = robots[0].filter(function(num) {
// return e.data === nameOF;
// })
// console.log(e)
// console.log(g)