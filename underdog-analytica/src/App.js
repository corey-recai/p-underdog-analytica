import './App.css';
import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Layout} from "./components/Layout";
import {Home} from "./pages/Home";
import {About} from "./pages/About";
import {Contact} from "./pages/Contact";
import {NoMatch} from "./components/NoMatch";
import {NavigationBar} from "./components/NavigationBar"
import {Jumbotron} from "./components/Jumbotron";
import {Footer} from "./components/Footer";

class App extends Component {
    render() {
        return (
            <>
                <Router>
                    <NavigationBar/>
                    <Layout>
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route path="/about" component={About}/>
                            <Route path="/contact" component={Contact}/>
                            <Route path={NoMatch}/>
                        </Switch>
                    </Layout>
                    <Footer/>
                </Router>
            </>
        );
    }
}

export default App;
