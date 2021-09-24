import { BrowserRouter, Switch, Route } from "react-router-dom";
import logo from "./logo.svg";
import Home from "./pages/home/home";
import React from 'react';
// import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import Dashboard from "./pages/dashboard/dashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import {Results} from "./pages/betHistory/results";
import {Accordion} from "./components/tables/accordion";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"} component={Home}></Route>
        <Route exact path={"/bet-history"} component={Results}></Route>
          <Route exact path={"/grid"} component={Accordion}></Route>
          {/*<AmplifySignOut />*/}
        <Route exact path={"/dashboard"} component={Dashboard}></Route>
      </Switch>
    </BrowserRouter>

  );
}

export default App;
// export default withAuthenticator(App);
