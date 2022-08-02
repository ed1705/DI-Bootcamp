const express = require('express');
const {products} = require('./modules/data.js');
// /wk7/day2/express-demo 2/modules

const app = express();

app.use('/',express.static(__dirname+'/public'));

app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.listen(5000, ()=>{
  console.log('Server is running on port 5000');
})

app.get('/api/products/search', (req,res)=>{
  const name = req.query.q;
  const filterProducts = products.filter(item=>{
    return item.name.toLowerCase().includes(name.toLowerCase())
  })
  if(filterProducts.length === 0){
    return res.status(201).json({msg:'Not Found'})
  }
  res.json(filterProducts);
})

app.get('/api/products',(req,res)=>{
  res.json(products)
})

//POST - create a new product
app.post('/api/products',(req,res)=>{
  console.log(req.body);
  const newProduct = {
    id:products.length+1,
    name: req.body.name,
    price: req.body.price
  }
  products.push(newProduct);
  res.json({msg: 'OK'})
})

app.get('/api/products/:id',(req,res)=>{
  const pid = req.params.id;
  const product = products.find(item=>{
    return item.id==pid
  })
  if(!product){
    return res.status(404).json({msg:'ID Not Found'})
  }
  res.json(product)
});

