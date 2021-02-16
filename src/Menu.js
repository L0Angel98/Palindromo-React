//import "./styles.css";
import React from "react";
import App from "./App";

class ListMenu extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit1 = this.handleSubmit1.bind(this);
  }
  handleSubmit1(event) {
    <App />;
  }
  render() {
    return (
      <ul>
        <form onSubmit={this.handleSubmit1}>
          <li>
            <button>Palindromo </button>
          </li>
        </form>
        <li>
          <button>Tablas</button>
        </li>
        <li>
          <button>Formulario</button>
        </li>
      </ul>
    );
  }
}

export default function Menu() {
  return <ListMenu />;
}
