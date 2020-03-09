import React, { Component } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { connect } from "react-redux";
import { putStatus } from "../../../_actions/order";

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false,
      status: null
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
  handleChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });

    // console.log(e.target.value);
  };

  handleSubmit = async e => {
    e.preventDefault();
    const data = this.state.status;
    const id = this.props.data.id;
    this.props.putStatus(id, data);
    window.location.reload(false);
  };
  render() {
    return (
      <>
        <Button variant="info" size="sm" onClick={this.openModal}>
          Edit
        </Button>
        <Modal show={this.state.login} onHide={this.closeModal}>
          <Modal.Header>
            <Modal.Title>
              <strong>Edit</strong>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group>
              <Form.Control value={this.props.data.id} readOnly />
            </Form.Group>
            <Form.Group>
              <Form.Control value={this.props.data.user.name} readOnly />
            </Form.Group>
            <Form.Group>
              <Form.Control value={this.props.data.attachment} readOnly />
            </Form.Group>
            <Form.Group>
              <Form.Control
                as="select"
                onChange={this.handleChange}
                name="status"
              >
                <option value="">Status</option>
                <option value="approved">Approved</option>
                <option value="pending">Pending</option>
              </Form.Control>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button size="sm" onClick={this.handleSubmit}>
              Edit
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
const mapStateToProps = state => {
  return {
    putstatus: state.orders
  };
};
const mapDispatchToProps = dispatch => {
  return {
    putStatus: (id, data) => dispatch(putStatus(id, data))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Edit);
