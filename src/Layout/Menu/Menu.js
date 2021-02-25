import "./Menu.css";
import React from "react";

const Menu = ({ changeComponent }) => {
  return (
    <header>
      <ul>
        <li>
          <button onClick={changeComponent} id="pal">
            Palindromo
          </button>
        </li>
        <li>
          <button onClick={changeComponent} id="tabs">
            Tablas
          </button>
        </li>
        <li>
          <button onClick={changeComponent} id="form">
            Formulario
          </button>
        </li>
      </ul>
    </header>
  );
};

export default Menu;
