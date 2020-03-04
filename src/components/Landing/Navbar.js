import React, { Component } from "react";
import Login from "../Login/Login";
import Register from "../Register/Register";
import { Navbar, Form, Nav } from "react-bootstrap";
import "../Landing/Css/Navbar.css";

export default class Header extends Component {
  render() {
    return (
      <>
        <Navbar className="background" expand="lg">
          <Navbar.Brand>
            <strong className="colorBrand">Ticket Cuks</strong>
          </Navbar.Brand>
          <Nav className="mr-auto"></Nav>
          <Form inline>
            <Login /> &nbsp;
            <Register />
          </Form>
        </Navbar>
      </>
    );
  }
}
