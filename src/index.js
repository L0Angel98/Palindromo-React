import { StrictMode } from "react";
import ReactDOM from "react-dom";

//import App from "./App";
//import Menu from "./Menu";
import Tablas from "./Tablas";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Tablas />
  </StrictMode>,
  rootElement
);
