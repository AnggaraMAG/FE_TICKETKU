import React, { Component } from "react";
import { Button, Modal, Form } from "react-bootstrap";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false
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
    // const { login } = this.state;
    return (
      <>
        <Button variant="outline-light" size="sm" onClick={this.openModal}>
          Masuk
        </Button>
        <Modal show={this.state.login} onHide={this.closeModal}>
          <Modal.Header>
            <Modal.Title>
              <strong>Masuk</strong>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group>
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>
            <Form.Group>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            {/* <Button onClick={this.closeModal}>Close</Button> */}
            <Button size="sm">Masuk</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
export default Login;
