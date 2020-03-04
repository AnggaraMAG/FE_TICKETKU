import React, { Component } from "react";
import { Button, Modal, Form } from "react-bootstrap";

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      register: false
    };
  }
  openModal = () => {
    this.setState({
      login: true
    });
  };
  closeModal = () => {
    this.setState({
      login: false
    });
  };
  render() {
    return (
      <>
        <Button variant="outline-light" size="sm" onClick={this.openModal}>
          Daftar
        </Button>
        <Modal show={this.state.login} onHide={this.closeModal}>
          <Modal.Header>
            <Modal.Title>
              <strong>Daftar</strong>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group>
              <Form.Control type="text" placeholder="Nama Lengkap" />
            </Form.Group>
            <Form.Group>
              <Form.Control type="text" placeholder="Username" />
            </Form.Group>
            <Form.Group>
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>
            <Form.Group>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group>
              <Form.Control as="select">
                <option>Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Control type="number" placeholder="Phone" />
            </Form.Group>
            <Form.Group>
              <Form.Control type="text" placeholder="Address" />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            {/* <Button onClick={this.closeModal}>Close</Button> */}
            <Button size="sm">Daftar</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
