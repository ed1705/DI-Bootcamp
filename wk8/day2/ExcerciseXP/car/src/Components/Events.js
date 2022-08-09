import React from 'react';


 class Events extends React.Component{
    constructor(props){
      super();
    //   this.state = { isToggleOn:true}
    }
     clickMe = (event)=>{
        alert( "I was clicked")
    }
     handleKeyPress = (event) =>{
    if (window.event.keyCode == 13) {
        alert(`Enter key pressed: input is ${event.target.value}`)
    }
    

    // changeText = (OFF) => {
    //     if  ({isToggleOn:!this.state.isToggleOn}) {
    //         this.setState({OFF});
    //     }

        
    // this.setState({isToggleOn:!this.state.isToggleOn});
    }

    render(){ 
   
      return(    
       
      <div>
           <button onClick={this.clickMe}>Click Me</button>
           <input onKeyPress={this.handleKeyPress} />
           <button onClick={this.onClickss}>ON</button>
    </div>
)
      }}

 export default Events;
