
const btn = document.getElementById("button");
btn.addEventListener("click", retrieveCharacter);

async function retrieveCharacter(){



   try {
    updateWithLoading()
    const x = Math.floor((Math.random() * 83) + 1);
    const url= (`https://swapi.dev/api/people/${x}`)
    const result = await fetch(url);
    console.log(result.status);


        if (result.status !== 200) {
            throw new Error ("Error in status")
        } else {
            const finalResult = await result.json();
            console.log(finalResult)
            homeRetrieve(finalResult)
            // displayData(finalResult, homeRetrieve())
        }

    } catch(error){
        console.log(error.message)
        let names = document.getElementById("name")
        names.innerText=(`That Dude is Not Found! TRY AGAIN!`)
    }

}

async function homeRetrieve(link) { 
   try {
    const url2= link.homeworld
    console.log(url2)
    const result2 = await fetch(url2);

        if (result2.status !== 200) {
            throw new Error ("Error in status")
        } else {
            const finalResult2 = await result2.json();
              // console.log(finalResult2)
            // displayData(finalResult2)
            displayData(link, finalResult2)
        }

    } catch(error){
        console.log(error.message)
        let names = document.getElementById("name")
        names.innerText=(`That Dude is Not Found! TRY AGAIN!`)
    }

}

// // function createTitles 
// function displayData(info, homelands) {
// let names = document.getElementById("name")
// names.innerText=(`Name: ${info.name}`)
// let heights = document.getElementById("height")
// heights.innerText=(`Height: ${info.height}`)
// let genders = document.getElementById("gender")
// genders.innerText=(`Gender: ${info.gender}`)
// let birthyears = document.getElementById("birth-year")
// birthyears.innerText=(`Birth: ${info.birth_year}`)
// }


async function displayData(link1, link2){
    try {
        // let link1 = await retrieveCharacter();
        // let link2 = await homeRetrieve(link);
        // console.log(link1)
        // console.log(link2)
        let names = document.getElementById("name")
        names.innerText=(`Name: ${link1.name}`)
        let heights = document.getElementById("height")
        heights.innerText=(`Height: ${link1.height}`)
        let genders = document.getElementById("gender")
        genders.innerText=(`Gender: ${link1.gender}`)
        let birthyears = document.getElementById("birth-year")
        birthyears.innerText=(`Birth: ${link1.birth_year}`)
        let homeRet = document.getElementById("home-world")
        homeRet.innerText=(`Homeland: ${link2.name}`)

    } catch (err){
        console.log(err.message)
    }
}

function updateWithLoading(){
  //Icon link: https://fontawesome.com/how-to-use/on-the-web/styling/animating-icons
 let names = document.getElementById("name")
  names.innerHTML = '<i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i> <p>Loading...</p>';

        let heights = document.getElementById("height")
        heights.innerText=(``)
        let genders = document.getElementById("gender")
        genders.innerText=(``)
        let birthyears = document.getElementById("birth-year")
        birthyears.innerText=(``)
        let homeRet = document.getElementById("home-world")
        homeRet.innerText=(``)
}









