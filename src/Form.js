import "./stylesForm.css";
import React from "react";

const Input = ({ styleName, name, placeholderValue, handleChange, value }) => {
  return (
    <label className={styleName}>
      {placeholderValue}
      <input
        type="text"
        name={name}
        id={name}
        placeholder={placeholderValue}
        value={value}
        onChange={handleChange}
      />
      <span>:D</span>
    </label>
  );
};

class FormData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      lastName: "",
      country: "",
      city: "",
      phoneNumer: "",
      isClick: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    let value = event.target.value;
    let name = event.target.name;
    this.setState({ [name]: value });
    this.setState({ isClick: false });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ isClick: true });
  }

  render() {
    return (
      <div className="MainForm">
        <section className="Form">
          <h1>Formulario</h1>
          <Input
            styleName="Name"
            name="name"
            placeholderValue="Nombre"
            handleChange={this.handleChange}
            value={this.state.name}
          />
          <Input
            styleName="latsName"
            name="name"
            placeholderValue="Nombre"
            handleChange={this.handleChange}
            value={this.state.name}
          />
          <Input
            styleName="Name"
            name="name"
            placeholderValue="Nombre"
            handleChange={this.handleChange}
            value={this.state.name}
          />
          <Input
            styleName="Name"
            name="name"
            placeholderValue="Nombre"
            handleChange={this.handleChange}
            value={this.state.name}
          />

          <label className="Name">
            {" "}
            Nombre:
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Nombre"
              value={this.state.text}
              onChange={this.handleChange}
            />
          </label>
          <label className="LastName">
            {" "}
            Apellido:
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Apellido"
              value={this.state.text}
              onChange={this.handleChange}
            />
          </label>
          <label className="Country">
            {" "}
            Estado:
            <input
              type="text"
              name="country"
              id="country"
              placeholder="Estado"
              value={this.state.text}
              onChange={this.handleChange}
            />
          </label>
          <label className="City">
            {" "}
            Ciudad:
            <input
              type="text"
              name="city"
              id="city"
              placeholder="Ciudad"
              value={this.state.text}
              onChange={this.handleChange}
            />
          </label>
          <label className="PhoneNumer">
            {" "}
            Número:
            <input
              type="text"
              name="phoneNumer"
              id="phoneNumer"
              placeholder="Número de tel."
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
          <section className="Data">
            <label>
              <b>Nombre:</b> {this.state.name}{" "}
            </label>
            <label>
              <b>Apellido:</b> {this.state.lastName}{" "}
            </label>
            <label>
              <b>Estado:</b> {this.state.country}{" "}
            </label>
            <label>
              <b>Ciudad:</b> {this.state.city}{" "}
            </label>
            <label>
              <b>Número:</b> {this.state.phoneNumer}{" "}
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
