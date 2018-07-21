import React from "react";
import "./Button.css";

// class Button extends React.Component {
//   render() {
//     return <button>{this.props.children}</button>;
//   }
// }

function Button(props) {
  return <button>{props.children}</button>;
}

export default Button;
