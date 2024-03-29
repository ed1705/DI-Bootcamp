import React, { useSyncExternalStore } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Exercise4 from "./Exercise4";
import UserFavoriteColors from "./UserFavoriteColors";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
const myelement = <h1>I Love JSX!</h1>;
const sum = 5 + 5;
root.render(
  <React.StrictMode>
    <App />
    {/* <Exercise4 /> */}
    {`React is ${sum} times better with JSX`}
    {myelement}
    <h1>I Love JSX!</h1>
    {React.createElement("h1", {}, "I do not use JSX!")}
    <h1>Hello World</h1>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
