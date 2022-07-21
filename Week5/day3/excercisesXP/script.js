
 // Exercise 1 : Comparison

const compareToTen = function(num) {

const check = new Promise ((resolve, reject) => {
			if (num < 10){
				resolve(num)
			} else {
				reject(`error`)
			}
		})
	
return check;
}

compareToTen(15)
.then(res => console.log(res)) 
.catch(error => console.log(error))

compareToTen(8)
.then(res => console.log(res))
.catch(error => console.log(error)) //error 123

 // Exercise 2 : Promises

 const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([89, 45, 323]);
        }, 4000);
    });
 
promise.then(values => {
    console.log(values[1]);
});







