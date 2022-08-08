import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import Exercise4 from "./Exercise4";
import UserFavoriteColors from "./UserFavoriteColors";

const user = {
  first_name: "Bob",
  last_name: "Dylan",
  fav_animals: ["Horse", "Turtle", "Elephant", "Monkey"],
};

function App() {
  return (
    <div>
      <Exercise4 />
      <div className="App">
        <h3>{user.first_name}</h3>
        <h3>{user.last_name}</h3>
        <UserFavoriteColors animals={user.fav_animals} />
      </div>
    </div>
  );
}

export default App;
