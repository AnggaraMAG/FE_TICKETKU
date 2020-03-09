import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";
import { connect } from "react-redux";
import { deleteOrder } from "../../../_actions/order";

class Delete extends Component {
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

  handleDelete = e => {
    e.preventDefault();
    const id = this.props.data.id;
    this.props.deleteOrder(id);
    console.log(id);
    window.location.reload(false);
  };
  render() {
    return (
      <>
        <Button variant="danger" size="sm" onClick={this.openModal}>
          Delete
        </Button>
        <Modal show={this.state.login} onHide={this.closeModal}>
          <Modal.Body>
            <h5>
              <b>ID :</b> {this.props.data.id}
            </h5>
            <h4>
              Yakin Hapus Data{" "}
              <b style={{ color: "red" }}>{this.props.data.user.name}</b> ?
            </h4>
          </Modal.Body>
          <Modal.Footer>
            <Button size="sm" variant="danger" onClick={this.handleDelete}>
              Ya
            </Button>
            <Button size="sm" variant="info" onClick={this.closeModal}>
              Tidak
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
const mapStateToProps = state => {
  return {
    deleteorder: state.orders
  };
};
const mapDispatchToProps = dispatch => {
  return {
    deleteOrder: id => dispatch(deleteOrder(id))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Delete);
