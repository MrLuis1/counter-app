import React from "react";
import ReactDOM from "react-dom/client";
// import { NameApp } from "./NameApp";
import { CounterApp } from "./counterApp";

import './index.css';

ReactDOM.createRoot( document.getElementById('root') ).render(
  <React.StrictMode>
    {/* <NameApp title="Hola, soy Luis" subtitle={1234} /> */}
    <CounterApp value={1} />
  </React.StrictMode>
);