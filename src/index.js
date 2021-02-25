import { StrictMode } from "react";
import ReactDOM from "react-dom";

import Menu from "./Layout/Menu/Menu";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Menu />
  </StrictMode>,
  rootElement
);

/*

 src
  Forms
    Forms.js
    Forms.css
    Forms.test.js
    Imeges
      Images.js
      Images.css
  Menu
    Menu.js
    Menu.css

*/
