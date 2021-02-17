//import "./styles.css";
import React from "react";
//import App from "./App";

class ListMenu extends React.Component {
  /*constructor(props) {
    super(props);
  }*/
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
