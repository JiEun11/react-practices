import React from "react";
import ReactDOM from "react-dom/client";

const Welcome = (props) => {
  return <h1>Hello, {props.name}</h1>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Welcome name="Sara" />);
