import React, { Component } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { connect } from "react-redux";
import { getOrderid } from "../../../_actions/order";

class Edit extends Component {
  componentDidMount() {
    this.props.getOrderid();
  }
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
  handleEdit = () => {
    const id = this.props.idorderx;
    this.props.getOrderid(id);
  };
  render() {
    // const { data } = this.props.idorder;

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
            <Form.Group>
              <Form.Control as="select">
                <option>Status</option>
                <option value="approved">Approved</option>
                <option value="pending">Pending</option>
                <option value="cancel">Cancel</option>
              </Form.Control>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button size="sm">Edit</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
const mapStateToProps = state => {
  return {
    idorder: state.trains
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getOrderid: id => dispatch(getOrderid(id))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Edit);
