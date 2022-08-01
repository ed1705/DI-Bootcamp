const express = require('express');
const {products} = require('./modules/data.js')

const app = express();

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(7070, ()=>{

	console.log('run on port 7070 ')
})


pp.get('/api/products/search', (req,res) => {
	const name = req.query.q;
	const filterProducts = products.filter(item=>{
		return item.name.toLowerCase().includes(name.toLowerCase())
	})
	res.json(filterProducts)
})

// app.get
// app.post 
// app.put 
// app.delete 


// app.get('/api', (req,res)=>
// {
// 	res.send('api route')
// })

----append to html page
function addProductsToPage(arr){
  const root = document.getElementById('root');
  arr.forEach((item, i) => {
    const div = document.createElement('div');
    div.classList.add('dib')
    const h2 = document.createElement('h2');
    h2.innerText= item.name;
    div.appendChild(h2)
    const p = document.createElement('p');
    p.innerText= item.price;
    div.appendChild(p)
    root.appendChild(div)
  });
}
const express = require('express');
const {products} = require('./modules/data.js');

const app = express();

app.use('/',express.static(__dirname+'/public'));

app.listen(5000, ()=>{
  console.log('Server is running on port 5000');
})

app.get('/api/products',(req,res)=>{
  res.json(products)
})