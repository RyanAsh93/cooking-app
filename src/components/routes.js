import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import Home from './homeScreen'

import Login from "./login";
// import Contact from "./Contact/Contact";
// import Products from "./Product/Products";
// import Home from "./Home/Home";
import history from './history';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/Login" component={Login} />
                    {/* <Route path="/Contact" component={Contact} /> */}
                    {/* <Route path="/Products" component={Products} /> */}
                </Switch>
            </Router>
        )
    }
}
