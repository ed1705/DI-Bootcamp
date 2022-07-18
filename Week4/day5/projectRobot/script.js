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



function GetRobots (x) {
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
   
     GetRobots(robots)


let input = document.getElementById('searchbar');
input.addEventListener("input", search)


function search() { 
let input = document.getElementById('searchbar').value;
input = input.toLowerCase();
let p = document.getElementsByClassName('robotStyle');
let div = document.getElementsByTagName('div');

for (let i=0; i < p.length; i++) {
  if(!p[i].textContent.toLowerCase().includes(input)) {
    div[i].style.display="none";
  }
  else {
    div[i].style.display="block";
  }
}


}








