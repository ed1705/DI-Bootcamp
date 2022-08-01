
// console.log(__filename);
// console.log(__dirname);





const users = require('./userapi.js');


users.getUsers()
.then(data => {
	// console.log(data)
	data.forEach((item, i) => {
		console.log(item.name);
	});

}) 
