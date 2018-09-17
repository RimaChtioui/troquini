import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.js";
import registerServiceWorker from "./registerServiceWorker";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStroopwafel } from "@fortawesome/free-solid-svg-icons";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

library.add(faStroopwafel);

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
