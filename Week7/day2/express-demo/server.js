const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(7070, ()=>{

	console.log('run on port 5000')
})

// app.get
// app.post 
// app.put 
// app.delete 


app.get('/api', (req,res)=>
{
	res.send('api route')
})


