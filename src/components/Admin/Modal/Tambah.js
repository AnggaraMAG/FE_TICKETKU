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
        <Button variant="warning" size="sm" onClick={this.openModal}>
          Tambah Ticket
        </Button>
        <Modal show={this.state.login} onHide={this.closeModal}>
          <Modal.Header>
            <Modal.Title>
              <strong>Tambah Ticket</strong>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group>
              <Form.Label>Nama Kereta</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group>
              <Form.Control as="select">
                <option>Jenis Kereta</option>
                <option value="executive">Executive</option>
                <option value="business">Business</option>
                <option value="ekonomi">Ekonomi</option>
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Tanggal Keberangkatan</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
            <Form.Group>
              <Form.Control as="select">
                <option>Pilih Stasiun Keberangkatan</option>
                <option value="manggarai">Manggarai</option>
                <option value="wuhan">Wuhan</option>
                <option value="tokyo">tokyo</option>
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Jam Keberangkatan</Form.Label>
              <Form.Control type="time" />
            </Form.Group>
            <Form.Group>
              <Form.Control as="select">
                <option>Pilih Stasiun Tujuan</option>
                <option value="medan">Medan</option>
                <option value="depok">Depok</option>
                <option value="singapur">Singapur</option>
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Jam Tiba</Form.Label>
              <Form.Control type="time" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Harga Ticket</Form.Label>
              <Form.Control type="number" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Qty</Form.Label>
              <Form.Control type="number" />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            {/* <Button onClick={this.closeModal}>Close</Button> */}
            <Button size="sm">
              <strong>Tambah</strong>
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
