import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Homepage2Dark from "./pages/Homepage2Dark";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Homepage2Dark />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
