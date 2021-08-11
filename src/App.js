import { BrowserRouter, Switch, Route } from "react-router-dom";
import logo from "./logo.svg";
import Home from "./pages/home/home";
import React from 'react';
// import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ResponsiveGrid from "./pages/betHistory/components/responsiveGrid";
import {Results} from "./pages/betHistory/results";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"} component={Home}></Route>
        <Route exact path={"/bet-history"} component={Results}></Route>
          <Route exact path={"/grid"} component={ResponsiveGrid}></Route>
          {/*<AmplifySignOut />*/}
      </Switch>
    </BrowserRouter>

  );
}

export default App;
// export default withAuthenticator(App);
