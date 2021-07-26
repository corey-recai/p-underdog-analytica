import { BrowserRouter, Switch, Route } from "react-router-dom";
import logo from "./logo.svg";
import Home from "./pages/home/home";
import React from 'react';

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import GooogleAuthCallback from "./pages/googleAuthCallback";

function App() {
  return (
    <BrowserRouter>
      <Switch>
          <Route path="/auth/callback/google">
              <React.Fragment>
                  <GooogleAuthCallback />
              </React.Fragment>
          </Route>
        <Route exact path={"/"} component={Home}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
