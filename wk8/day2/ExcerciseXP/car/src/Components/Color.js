import React from "react";


class Color extends React.Component{
    constructor(props){
      super();
      this.state = { favoriteColor:"orange"}
    
    }

    changeColor = () => {
        this.setState({favoriteColor:"blue"})
    }
      render(){
        return(
          <div>
<h1>{this.state.favoriteColor}</h1>
<button onClick={this.changeColor}>Click Me</button>
          </div>
        )
      }
    
  componentDidMount(){
    setTimeout(()=>{
      this.setState({favoriteColor:"yellow"})
    }, 5000)
  }
    }

export default Color