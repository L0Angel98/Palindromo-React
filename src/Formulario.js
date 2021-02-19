//import "./styles.css";
import React from "react";

class FormData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Nombre: "",
      Apellido: "",
      Estado: "",
      Ciudad: "",
      Numero: "",
      isClick: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({ [name]: value });
    this.setState({ isClick: false });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ isClick: true });
  }

  render() {
    return (
      <div className="main">
        <section>
          <h1>Formulario</h1>
          <label>
            {" "}
            Nombre:
            <input
              type="text"
              name="Nombre"
              id="Nombre"
              placeholder="Nombre"
              value={this.state.text}
              onChange={this.handleChange}
            />
          </label>
          <label>
            {" "}
            Apellido:
            <input
              type="text"
              name="Apellido"
              id="Apellido"
              placeholder="Apellido"
              value={this.state.text}
              onChange={this.handleChange}
            />
          </label>
          <label>
            {" "}
            Estado:
            <input
              type="text"
              name="Estado"
              id="Estado"
              placeholder="Estado"
              value={this.state.text}
              onChange={this.handleChange}
            />
          </label>
          <label>
            {" "}
            Ciudad:
            <input
              type="text"
              name="Ciudad"
              id="Ciudad"
              placeholder="Ciudad"
              value={this.state.text}
              onChange={this.handleChange}
            />
          </label>
          <label>
            {" "}
            Número:
            <input
              type="text"
              name="Numero"
              id="Numero"
              placeholder="Numero"
              value={this.state.text}
              onChange={this.handleChange}
            />
          </label>
          <input
            id="button"
            type="submit"
            value="Revisar"
            onClick={this.handleSubmit}
          />
        </section>
        {this.state.isClick ? (
          <section>
            <label>Nombre: {this.state.Nombre} </label>
            <label>Apellido: {this.state.Apellido} </label>
            <label>Estado: {this.state.Estado} </label>
            <label>Ciudad: {this.state.Ciudad} </label>
            <label>Número: {this.state.Numero} </label>
          </section>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default function App() {
  return <FormData />;
}
