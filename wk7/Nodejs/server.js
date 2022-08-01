const http = require('http');

const server = http.createServer( (req,res) => {
	console.log('get a request from client');
	console.log(req.headers)
	res.end('hello from my first server')
})

server.listen(5000, ()=>{
	console.log('listen to port 8080')
})




const http = require('http');

const server = http.createServer((req,res)=>{
  console.log('this is from inside the server');
  res.end('hello my first server 12345')
})
server.listen(5000) 