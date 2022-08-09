import React from "react";

class Garage extends React.Component{
    constructor(props){
      super();
  
    }
    render(){
      return(
        <div>
          <p>Who lives in my {this.props.size} Garage?</p>
        </div>
      )
    }
  }
  
  export default Garage;

