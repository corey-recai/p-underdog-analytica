import './App.css';
import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Layout} from "./components/Layout";
import Home from "./pages/Home";
import {About} from "./pages/About";
import {Contact} from "./pages/Contact";
import {NoMatch} from "./components/NoMatch";
import {Footer} from "./components/Footer";
import Nav from "./components/ui/nav";
import Betting101 from "./pages/betting101"

class App extends Component {
    render() {
        return (
            <>
                <Router>
                    <Nav/>
                    <Layout>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/about" component={About} />
                            <Route path="/contact" component={Contact} />
                            <Route path="/betting" component={Betting101} />
                            <Route path={NoMatch} />
                        </Switch>
                    </Layout>
                    <Footer/>
                </Router>
            </>
        );
    }
}

export default App;
