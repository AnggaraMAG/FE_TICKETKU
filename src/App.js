import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Landing from "./components/Landing/Landing";
import Admin from "./components/Admin/Admin";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
        </Router>
      </div>
    );
  }
}
