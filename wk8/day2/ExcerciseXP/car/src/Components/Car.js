import React from 'react';
import App from '../App';
import Garage from './Garage';


class Car extends React.Component {
    constructor(props) {
      super(props);
      this.state = {color: "red"};
    console.log(props.model)
    }

    render(){
        return (
            <div>
             <header>This car is a {this.state.color} {this.props.model}</header>
             <Garage size="small"/>
            </div>
          )
        }
      
  }

  export default Car;