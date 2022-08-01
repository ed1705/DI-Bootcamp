	// let btn =	document.getElementById("btn");
 
	// console.log(btn)
		
	// 	const func1 = () => {
	// 		let newDiv = document.createElement("div");
	// 		let newP = document.createElement("p");
	// 		let text = document.createTextNode(`New Paragraph`);
	//         newP.appendChild(text);
	//         newDiv.appendChild(newP);
 //            document.body.appendChild(newDiv)
	// 	}

	       
 // btn.addEventListener("click", func1);



let btn = document.getElementById("btn")


async function retrieveCat () {

   try {
    const url= ("https://catfact.ninja/fact")
    const result = await fetch(url);
    console.log(result);

        if (result.status !== 200) {
            throw new Error ("Error in status")
        } else {
            const finalResult = await result.json();
        }

    } catch(error){
        console.log(error.message)
    }
}

btn.addEventListener("click", retrieveCat);
 // function displayAll() {

 // }