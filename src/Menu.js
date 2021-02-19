//import "./styles.css";
import React from "react";
import App from "./App";
import Tablas from "./Tablas";
import Formulario from "./Formulario";

class ListMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { App: true, Tablas: false, Formulario: false };
    this.handlesApp = this.handlesApp.bind(this);
    this.handlesTablas = this.handlesTablas.bind(this);
    this.hanlesFormulario = this.hanlesFormulario.bind(this);
  }
  handlesApp(event) {
    this.setState({ App: true, Tablas: false, Formulario: false });
  }
  handlesTablas(event) {
    this.setState({ App: false, Tablas: true, Formulario: false });
  }
  hanlesFormulario(event) {
    this.setState({ App: false, Tablas: false, Formulario: true });
  }
  render() {
    return (
      <div>
        <ul>
          <li>
            <button onClick={this.handlesApp}>Palindromo</button>
          </li>
          <li>
            <button onClick={this.handlesTablas}>Tablas</button>
          </li>
          <li>
            <button onClick={this.hanlesFormulario}>Formulario</button>
          </li>
        </ul>

        {this.state.App ? (
          <App />
        ) : this.state.Tablas ? (
          <Tablas />
        ) : this.state.Formulario ? (
          <Formulario />
        ) : (
          <App />
        )}
        <footer>Footer</footer>
      </div>
    );
  }
}

export default function Menu() {
  return <ListMenu />;
}
