const express = require('express'); 
const app = express();

app.listen(3000, ()=>{
	console.log('listen port 3000');
})

app.use('/', express.static(__dirname + '/public'))

app.get('/users', (req,res)=>{
	  const user = {
        firstname: 'John',
        lastname: 'Doe'
    }
    res.json(user);
})
 

 app.get('/:id',(req,res)=>{
 	const id = req.params.id
 	res.json(req.params)
 }) 