import "./Form.css";
import React from "react";

const Input = ({ styleName, name, placeholderValue, handleChange, value }) => {
  return (
    <label className={styleName}>
      {placeholderValue + ":"}
      <input
        type="text"
        name={name}
        id={name}
        placeholder={placeholderValue}
        value={value}
        onChange={handleChange}
      />
    </label>
  );
};

const Output = ({ name, lastName, country, city, phoneNumber }) => {
  return (
    <section className="Data">
      <label>
        <b>Nombre:</b> {name}{" "}
      </label>
      <label>
        <b>Apellido:</b> {lastName}{" "}
      </label>
      <label>
        <b>Estado:</b> {country}{" "}
      </label>
      <label>
        <b>Ciudad:</b> {city}{" "}
      </label>
      <label>
        <b>Número:</b> {phoneNumber}{" "}
      </label>
    </section>
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
      phoneNumber: "",
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
            styleName="LastName"
            name="lastName"
            placeholderValue="Apellido"
            handleChange={this.handleChange}
            value={this.state.lastName}
          />
          <Input
            styleName="Country"
            name="country"
            placeholderValue="Estado"
            handleChange={this.handleChange}
            value={this.state.country}
          />
          <Input
            styleName="City"
            name="city"
            placeholderValue="Ciudad"
            handleChange={this.handleChange}
            value={this.state.city}
          />
          <Input
            styleName="PhoneNumber"
            name="phoneNumber"
            placeholderValue="Número"
            handleChange={this.handleChange}
            value={this.state.phoneNumber}
          />

          <input
            id="button"
            type="submit"
            value="Enviar"
            onClick={this.handleSubmit}
          />
        </section>

        {this.state.isClick ? (
          <Output
            name={this.state.name}
            lastName={this.state.lastName}
            country={this.state.country}
            city={this.state.city}
            phoneNumber={this.state.phoneNumber}
          />
        ) : (
          " "
        )}
      </div>
    );
  }
}

export default function App() {
  return <FormData />;
}
