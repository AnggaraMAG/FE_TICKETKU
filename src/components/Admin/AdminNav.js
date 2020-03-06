import React, { Component } from "react";
import { Navbar, Form, Nav, Dropdown, DropdownButton } from "react-bootstrap";
import "../Landing/Css/Navbar.css";
import Tambah from "../Admin/Modal/Tambah";

export default class AdminNav extends Component {
  render() {
    return (
      <div>
        <Navbar className="background" expand="lg">
          <Navbar.Brand>
            <strong className="colorBrand">TicketKu</strong>
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
              <Dropdown.Item>
                <Tambah />
              </Dropdown.Item>
              <Dropdown.Item as="button">Keluar</Dropdown.Item>
            </DropdownButton>
          </Form>
        </Navbar>
      </div>
    );
  }
}
