import React from "react";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: props.number
    };
  }

  render() {
    let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const TablaNumer = this.state.number;
    const TablaItem = numeros.map((numero) => (
      <li key={numero}>
        {TablaNumer} x {numero} = {TablaNumer * numero}
      </li>
    ));
    return <ul>{TablaItem}</ul>;
  }
}

class Tablas extends React.Component {
  render() {
    let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const TotalTablas = numeros.map((numero) => (
      <div key={numero}>
        <h1>Tablas</h1>
        <List number={numero} />
      </div>
    ));
    return <div>{TotalTablas}</div>;
  }
}

export default function Tabla() {
  return <Tablas />;
}
