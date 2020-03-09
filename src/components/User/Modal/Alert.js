import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

class Alert extends Component {
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
    return (
      <div className="mb-5">
        <Button variant="info" onClick={this.openModal}>
          Bayar Sekarang
        </Button>
        <Modal show={this.state.login} onHide={this.closeModal}>
          <Modal.Body>
            <h4>Bayar Sekarang?</h4>
          </Modal.Body>
          <Modal.Footer>
            <Link to="/ticketku">
              <Button size="sm" variant="primary">
                Ya
              </Button>
            </Link>
            <Button size="sm" variant="danger" onClick={this.closeModal}>
              Tidak
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
export default Alert;
