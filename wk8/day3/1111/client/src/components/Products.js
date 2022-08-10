import React from 'react';
import './Products.css'

class Products extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      searchText: " "
    }
  }

  componentDidMount(){
    fetch('http://localhost:8001/api/products/all')
    .then(res=>res.json())
    .then(data => {
      this.setState({products:data})
    })
    .catch(e=>{
      console.log(e);
    })
  }
  handleChange = (e) => {
    this.setState({searchText:e.target.value})
  }
  handleClick = () => {
    console.log(this.state.searchText);
    fetch(`http://localhost:8001/api/products/search?q=${this.state.searchText}`)
    .then(res=>res.json())
    .then(data => {
      this.setState({products:data})
    })
    .catch(e=>{
      console.log(e);
    }) 
  }
  render(){
    return(
      <div>
      <h1>Shop</h1>
      <div> 
      <input type="text" onChange={this.handleChange} />
      <button onClick={this.handleClick} >Search</button>
      </div>
      {
        this.state.products.map(item => {
          return(
            
            <div className='product' key={item.id}>
              <h2>{item.name}</h2>
              <h4>{item.price}</h4>
            </div>
          )
        })
      }
      </div>
    )
  }
}
export default Products
