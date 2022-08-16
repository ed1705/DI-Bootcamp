import React from "react"
import { connect } from "react-redux"
import "./App.css"
import Hello from "./components/Hello"
import { handleChangeFromRedux } from "./redux/actions"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      property_one: "One 1",
      property_two: "Two 2",
    }
  }

  handleChangeAppState = (e) => {
    this.setState({ property_one: e.target.value })
  }

  handleClick = () => {
    this.setState({ property_two: this.state.property_one })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>This is property_one: {this.state.property_one}</div>
          <div>This is prop_one from store: {this.props.prop_one}</div>
          <div>
            Change property_one:{" "}
            <input type="text" onChange={this.handleChangeAppState} />
            <input type="text" onChange={this.props.myHandleChange} />
          </div>
          <div>This is property_two: {this.state.property_two}</div>
          <div>
            <button onClick={this.handleClick}>
              Change prop one to prop two
            </button>
          </div>
          <div>
            <h2>Hello Component</h2>
            <Hello prop_one_from_app={this.state.property_one} />
          </div>
        </header>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    prop_one: state.prop_one,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    myHandleChange: (e) => dispatch(handleChangeFromRedux(e.target.value)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
