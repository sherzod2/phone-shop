import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider as DataProvider } from "./Context/dataContext";

/* ReactDOM objectini render degan methodi ikkita argument qabul qilarkan:
1) Nimalar render bo'lishi (<React.StrictMode> ichida)
2) Qayerga render bo'lishi (document.getElementById('root') HTMLdagi root degan id ichiga) */

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <DataProvider>
        <App />
      </DataProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
