import "./stylesFormulario.css";
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
      <div className="mainFormulario">
        <section className="Formulario">
          <h1>Formulario</h1>
          <label className="Nombre">
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
          <label className="Apellido">
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
          <label className="Estado">
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
          <label className="Ciudad">
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
          <label className="Numero">
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
            value="Enviar"
            onClick={this.handleSubmit}
          />
        </section>
        {this.state.isClick ? (
          <section className="datos">
            <label>
              <b>Nombre:</b> {this.state.Nombre}{" "}
            </label>
            <label>
              <b>Apellido:</b> {this.state.Apellido}{" "}
            </label>
            <label>
              <b>Estado:</b> {this.state.Estado}{" "}
            </label>
            <label>
              <b>Ciudad:</b> {this.state.Ciudad}{" "}
            </label>
            <label>
              <b>Número:</b> {this.state.Numero}{" "}
            </label>
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
