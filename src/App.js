import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Landing from "./components/Landing/Landing";
import Admin from "./components/Admin/Admin";
import Invoice from "./components/User/Invoice";
import Ticketku from "./components/User/Ticketsaya";
import Ticketaprov from "./components/User/Ticketaprove";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route path="/admin">
          <Admin />
        </Route>
        <Route path="/invoice">
          <Invoice />
        </Route>
        <Route path="/ticketku">
          <Ticketku />
        </Route>
        <Route path="/approve">
          <Ticketaprov />
        </Route>
      </Router>
    );
  }
}
