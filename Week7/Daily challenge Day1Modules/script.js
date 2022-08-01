// Part I:

// const largeNumber = require('./main.js')

// const b = 5;
// console.log(largeNumber+b)

const http = require('http');

const server = http.createServer((req,res)=>{
  console.log("I'm listening");
 
  res.setHeader('Content-Type', 'text/html')
   res.end('hello my first server 12345')
})
server.listen(3000)