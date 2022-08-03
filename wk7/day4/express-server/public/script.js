
console.log('errol')

const sendGetData = () => {
	const email = document.getElementById('email').value;
	const password = document.getElementById('password').value;
    fetch(`http://localhost:5000/userlogin?email=${email}&password=${password}`)
    .then(res=>res.json())
    .then(data => {
    	console.log(data);
    })
    .catch(e => {
    	console.log(e);
    })
}