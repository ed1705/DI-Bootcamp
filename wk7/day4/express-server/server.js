// 1. npm init -y    console.log('hello');
// 2. express: npm i express   ("npm uninstall express" if need to delete)
// 3. nodemon - live server npm i -D nodemon
// 4. const express = require('express')
// 5. init express   -  const app = express()
// 6. create routes


const express = require('express');
const app = express();

app.use('/',express.static(__dirname+'/public'))

app.listen(5000,()=>{
	console.log('server is running')
});

app.get('/userlogin',(req,res)=>{
	console.log(req.query);
	// res.send('login page')
	// res.sendFile(__dirname+'/public/login.html') 
	// this sends loginpage .html to login page 
res.json({msg:'login success'})
});


app.get('/register',(req,res)=>{
	res.send('register page')
});