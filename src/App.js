import React from "react";

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

export default App;
