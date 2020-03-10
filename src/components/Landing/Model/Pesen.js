import React, { Component } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import moment from "moment";
// import { toRupiah } from "indo-formatter";
import { connect } from "react-redux";
import { useraddticket } from "../../../_actions/order";
// import { getUser } from "../../../_actions/user";

class Alert extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false,
      ticket_id: null,
      user_id: null,
      qty: null,
      qtybaby: null,
      adultprice: null,
      babyprice: null,
      totalprice: null,
      status: null,
      attachment: null
    };
  }
  handleSubmit = e => {
    e.preventDefault();
    const data = {
      ticket_id: this.props.data.id,
      user_id: this.props.user.data.id,
      qty: this.props.data.qty,
      qtybaby: this.props.data.qtybaby,
      adultprice: this.props.data.adultprice,
      babyprice: this.props.data.babyprice,
      totalprice: this.props.data.price,
      status: "Pending"
    };
    console.log(data, "iiiidididididididis");
    console.log(this.props, "opopopopopopopopo");
    this.props.useraddticket(data);
    window.location.reload(false);
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(e.target.value);
  };
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
    const getDuration = (timeA, timeB) => {
      let startTime = moment(timeA, "HH:mm:ss");
      let endTime = moment(timeB, "HH:mm:ss");
      let duration = moment.duration(endTime.diff(startTime));
      let hours = parseInt(duration.asHours());
      let minutes = parseInt(duration.asMinutes()) - hours * 60;
      return `${hours} Jam ${minutes} Menit`;
    };
    return (
      <div className="mb-5">
        <Button variant="info" size="sm" onClick={this.openModal}>
          Buy
        </Button>
        <Modal show={this.state.login} onHide={this.closeModal}>
          <Modal.Body>
            <h4>Bayar Sekarang?</h4>
            <Form>
              <Form.Label>Nama Kereta</Form.Label>
              <Form.Control
                value={this.props.data.nameTrain}
                readOnly
                onChange={this.handleChange}
              />
            </Form>
            <Form>
              <Form.Label>Waktu Berangkat</Form.Label>
              <Form.Control
                value={this.props.data.timeStart}
                readOnly
                onChange={this.handleChange}
              />
            </Form>
            <Form>
              <Form.Label>Waktu Tiba</Form.Label>
              <Form.Control
                value={this.props.data.timeArrival}
                readOnly
                onChange={this.handleChange}
              />
            </Form>
            <Form>
              <Form.Label>Durasi</Form.Label>
              <Form.Control
                value={getDuration(
                  this.props.data.timeStart,
                  this.props.data.timeArrival
                )}
                readOnly
                onChange={this.handleChange}
              />
            </Form>
            <Form>
              <Form.Label>Qty Dewasa</Form.Label>
              <Form.Control as="select" onChange={this.handleChange}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </Form.Control>
            </Form>
            <Form>
              <Form.Label>Qty Baby</Form.Label>
              <Form.Control as="select" onChange={this.handleChange}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </Form.Control>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Link to="/ticketku">
              <Button size="sm" variant="primary" onClick={this.handleSubmit}>
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
const mapStateToProps = state => {
  return {
    orders: state.orders,
    user: state.user
  };
};
const mapDispatchToProps = dispatch => {
  return {
    useraddticket: data => dispatch(useraddticket(data))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Alert);
