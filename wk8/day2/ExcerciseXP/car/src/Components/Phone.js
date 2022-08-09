import React from 'react';

class Phone extends React.Component{
  constructor(props){
    super();
    this.state = {
      brand: "Samsung",
      model: "Galaxy S20",
      color: "black",
      year: 2020
    };
  }

  render(){
    return(
      <div>
        <p>my phone is a {this.state.brand}, its a {this.state.color} {this.state.model} from {this.state.year}</p>
        <button onClick={this.changeColor}>Change Color</button>
      </div>
    )
  }

}

export default Phone;
