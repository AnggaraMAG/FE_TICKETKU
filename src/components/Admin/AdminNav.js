import React, { Component } from "react";
import { Navbar, Form, Nav, Dropdown, DropdownButton } from "react-bootstrap";
import "../Landing/Css/Navbar.css";
import Tambah from "../Admin/Modal/Tambah";
import { Link } from "react-router-dom";

export default class AdminNav extends Component {
  handleLogout = e => {
    e.preventDefault();
    localStorage.clear();
    window.location.reload(false);
  };
  render() {
    return (
      <div>
        <Navbar className="background" expand="lg">
          <Link to="/">
            <Navbar.Brand>
              <strong className="colorBrand">TicketKu</strong>
            </Navbar.Brand>
          </Link>
          <Nav className="mr-auto"></Nav>
          <Form inline style={{ marginRight: 80 }}>
            <DropdownButton
              size="sm"
              split
              variant="warning"
              id="dropdown-item-button"
              title="Admin"
            >
              <Dropdown.Item>
                <Tambah />
              </Dropdown.Item>
              <Dropdown.Item as="button" onClick={this.handleLogout}>
                <Link to="/">Keluar</Link>
              </Dropdown.Item>
            </DropdownButton>
          </Form>
        </Navbar>
      </div>
    );
  }
}
