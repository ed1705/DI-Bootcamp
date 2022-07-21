//1st question


const firstPromise = function () {
	return new Promise((resolve, reject)=> {
		setTimeout(() => resolve("Great"),4000)
	})
}

firstPromise()
.then(res => console.log(res))
.catch(err => console.log("Ooops something went wrong"))

//2nd question

Promise.resolve("success")
.then(res => setTimeout(()=> {console.log(res)}, 4000))
.catch(err => console.log("Ooops something went wrong"))  
