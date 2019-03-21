import React from "react";
import ReactDOM from "react-dom";
import "./Resources/css/app.css";
import { BrowserRouter } from "react-router-dom";

import Routes from "./containers/Routes";

const App = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
