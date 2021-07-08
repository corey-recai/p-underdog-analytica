import logo from './logo.svg';
import './App.css';
import Nav from './UI/nav.js'
import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Layout} from "./UI/Layout";
import {Home} from "./UI/Home";
import {About} from "./UI/About";
import {Contact} from "./UI/Contact";

class App extends Component {
  render() {
      return (
          <React.Fragment>
              <Layout>
                  <Router>
                      <Switch>
                          <Route exact path="/" component={Home} />
                          <Route exact path="/about" component={About} />
                          <Route exact path="/contact" component={Contact} />
                      </Switch>
                  </Router>
              </Layout>
              {/*<Nav />*/}
          </React.Fragment>
      );
  }
}

export default App;
