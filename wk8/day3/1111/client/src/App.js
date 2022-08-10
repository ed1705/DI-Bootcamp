import React from 'react';
import Products from './components/Products'
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      username:'',
      password:'',
      textareavalue:'',
      isChecked: false,
      select:''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state.username + " " + this.state.password);
    // console.log(this.state.textareavalue);
    console.log(this.state.select);
  }

  handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    this.setState({[e.target.name]:value})
  }

  handleCheck = (e) => {
    this.setState({isChecked:e.target.checked})
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          {/*<Products />*/}
          <form onSubmit={this.handleSubmit}>
            <input type="text" name="username" onChange={this.handleChange}/><br/>
            <input type="text" name="password" onChange={this.handleChange}/><br/>
            <textarea name="textareavalue" onChange={this.handleChange}>Bla Bla Bla</textarea><br/>
            <input type="checkbox" name='isChecked' onChange={this.handleChange} /><br/>
            <select onChange={this.handleChange} name="select">
              <option value="1200">iPhone</option>
              <option value="850">iPad</option>
              <option value="950">iWatch</option>
            </select>
            <input type="submit" value="Submit" />
           </form>
        </header>
      </div>
    );
  }
}

export default App;