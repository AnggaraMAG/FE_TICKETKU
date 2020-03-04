import React, { Component } from "react";
import { Navbar, Form, Nav, Dropdown, DropdownButton } from "react-bootstrap";
import "../Landing/Css/Navbar.css";

export default class AdminNav extends Component {
  render() {
    return (
      <div>
        <Navbar className="background" expand="lg">
          <Navbar.Brand>
            <strong className="colorBrand">Ticket Cuks</strong>
          </Navbar.Brand>
          <Nav className="mr-auto"></Nav>
          <Form inline style={{ marginRight: 80 }}>
            <DropdownButton
              size="sm"
              split
              variant="warning"
              id="dropdown-item-button"
              title="Admin"
            >
              <Dropdown.Item as="button">Tambah Ticket</Dropdown.Item>
              <Dropdown.Item as="button">Keluar</Dropdown.Item>
            </DropdownButton>
          </Form>
        </Navbar>
      </div>
    );
  }
}
