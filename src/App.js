import { BrowserRouter, Switch, Route } from "react-router-dom";
import logo from "./logo.svg";
import Home from "./pages/home/home";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Layout from "./pages/betHistory/components/layout";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"} component={Home}></Route>
        <Route exact path={"/bet-history"} component={Layout}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
