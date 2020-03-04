import React, { Component } from "react";
import { Button, Modal, Form, Row, Col } from "react-bootstrap";

class Edit extends Component {
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
        <Button variant="success" size="sm" onClick={this.openModal}>
          Detail
        </Button>
        <Modal show={this.state.login} onHide={this.closeModal}>
          <Modal.Header>
            <Modal.Title>
              <strong>INVOICE</strong>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group>
              <Form.Control type="text" placeholder="1" />
            </Form.Group>
            <Form.Group>
              <Form.Control type="text" placeholder="Anto" />
            </Form.Group>
            <Form.Group>
              <Form.Control type="text" placeholder="Surabaya-Jakarta" />
            </Form.Group>
            <Form.Group>
              <Form.Control type="text" placeholder="bni.jpg" />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Row>
              <Col sm={4}>
                <h3>
                  <strong>Total:</strong>
                </h3>
              </Col>
              <Col sm={8}>
                <h4 style={{ color: "red" }}>Rp.89383877334</h4>
              </Col>
            </Row>
            {/* <Button onClick={this.closeModal}>Close</Button> */}
            {/* <Button size="sm">Edit</Button> */}
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
export default Edit;
