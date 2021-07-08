import './App.css';
import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Layout} from "./UI/Layout";
import {Home} from "./UI/Home";
import {About} from "./UI/About";
import {Contact} from "./UI/Contact";
import {NoMatch} from "./UI/NoMatch";
import {NavigationBar} from "./UI/NavigationBar"
import {Jumbotron} from "./UI/Jumbotron";

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Router>
                    <NavigationBar/>
                    <Jumbotron />
                    <Layout>
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route path="/about" component={About}/>
                            <Route path="/contact" component={Contact}/>
                            <Route path={NoMatch}/>
                        </Switch>
                    </Layout>
                </Router>
            </React.Fragment>
        );
    }
}

export default App;
