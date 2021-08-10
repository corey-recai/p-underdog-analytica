import { BrowserRouter, Switch, Route } from "react-router-dom";
import logo from "./logo.svg";
import Home from "./pages/home/home";
import React from 'react';
// import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Layout from "./pages/betHistory/components/layout";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"} component={Home}></Route>
        <Route exact path={"/bet-history"} component={Layout}></Route>
          {/*<AmplifySignOut />*/}
      </Switch>
    </BrowserRouter>

  );
}

export default App;
// export default withAuthenticator(App);
