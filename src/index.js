import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

function formatDate(date) {
  return date.toLocaleDateString();
}

const text = {
  date: new Date()
};

function App(props) {
  return (
    <div>
      <div className="text">{formatDate(props.date)}</div>
    </div>
  );
}

ReactDOM.render(<App date={text.date} />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
