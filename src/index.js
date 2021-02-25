import { StrictMode } from "react";
import "./Index.css";
import ReactDOM from "react-dom";

import Layout from "./Layout/Layout";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Layout />
  </StrictMode>,
  rootElement
);
