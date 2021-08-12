import { BrowserRouter, Switch, Route } from "react-router-dom";
import logo from "./logo.svg";
import Home from "./pages/home/home";
import Dashboard from "./pages/dashboard/dashboard";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"} component={Home}></Route>
        <Route exact path={"/dashboard"} component={Dashboard}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
