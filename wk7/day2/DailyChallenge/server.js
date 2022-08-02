const express = require('express');

const app = express();


app.listen(3000, () => {
console.log('listening to 3004');
});

app.use(express.urlencoded({extendes:true}));
app

app.get('/aboutMe/:hobby',(req,res)=> {
console.log('hobby',req.params.hobby);
const hobby = req.params.hobby;
if(typeof hobby === 'string') {
res.json(req.params)
}
res.status(404).send('not s string')
})

app.get('/pic', (req,res) => {
	res.sendFile(__dirname +'/images/img.html')
})

app.get('/form', (req,res) => {
	res.sendFile(__dirname + '/public/index.html')
})

app.post('/FormData',(req,res) => {
	const {email, message} = req.body;
	res.send()
}) 