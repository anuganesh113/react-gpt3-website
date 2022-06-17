import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";

//React 17 syntax
// ReactDOM.render(<App />, document.getElementById("root"));

//React 18 syntax
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
