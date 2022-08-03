const express = require('express');   
const {products} = require('./modules/data.js')

const app = express();

app.listen(5000,()=>{
	console.log('server is rung')
});

app.use('/', express.static(__dirname+'/public'))
// app.get  app.post app.put app.delete 

app.get('/api/products', (req,res) => { 
  const partial = products.map(product=>{
   return{name:product.name, price:product.price} 
  })
  
res.json(partial)
})

app.get('/api/products/:id' ,(req,res)=>{
  const pid = req.params.id;
  const product = products.find(product=>product.id==pid);
  if(!product) {
    return res.status(500).send('Not Found')
  }
   res.json(product)
})


app.get('/api/search', (req,res)=>{
  const name = req.query.name;
  const res_products = products.filter(product=> 
    product.name.toLowerCase().includes(name.toLowerCase())
if (res_products.length === 0) {
  return res.status(200).send('no match to search')
}
 res.json(products)
})