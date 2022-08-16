import logo from "./logo.svg"
import "./App.css"
import React from "react"
// import Lesson from "./Lesson"
import { createStore } from "redux"

const store = createStore(reducer, initialState)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {" "}
        <Provider store={store}>
          <Counter />
        </Provider>
      </header>
    </div>
  )
}

export default App
