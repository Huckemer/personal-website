import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Homepage2Dark from "./pages/Homepage2Dark";
import DronePage from "./pages/DronePage";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Homepage2Dark />
        </Route>
        <Route path="/drones" exact>
          <DronePage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
