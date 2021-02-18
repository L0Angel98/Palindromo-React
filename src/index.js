import { StrictMode } from "react";
import ReactDOM from "react-dom";

//import App from "./App";
//import Menu from "./Menu";
import Tablas from "./Tablas";
//import Formulario from "./Formulario";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Tablas />
  </StrictMode>,
  rootElement
);
