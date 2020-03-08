import React, { Component } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { connect } from "react-redux";
import { postTrain } from "../../../_actions/trains";
import { getTypes } from "../../../_actions/types";

class Tambah extends Component {
  componentDidMount() {
    this.props.getTypes();
  }
  constructor(props) {
    super(props);
    this.state = {
      register: false,
      nameTrain: null,
      type_id: null,
      dateStart: null,
      stationStart: null,
      timeStart: null,
      destinationStation: null,
      timeArrival: null,
      station1: null,
      station2: null,
      price: null,
      qty: null
    };
    // this.handleTambah = this.handleTambah.bind(this);
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
    console.log(e.target.value);
  };

  handleTambah = e => {
    e.preventDefault();
    const data = {
      nameTrain: this.state.nameTrain,
      type_id: this.state.type_id,
      dateStart: this.state.dateStart,
      stationStart: this.state.stationStart,
      timeStart: this.state.timeStart,
      destinationStation: this.state.destinationStation,
      timeArrival: this.state.timeArrival,
      station1: this.state.station1,
      station2: this.state.station2,
      price: this.state.price,
      qty: this.state.qty
    };
    this.props.postTrain(data);
    window.location.reload(false);
  };
  render() {
    const { data } = this.props.types;
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
              <Form.Control
                type="text"
                onChange={this.handleChange}
                name="nameTrain"
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                as="select"
                value={this.state.types}
                onChange={this.handleChange}
                name="type_id"
              >
                <option>Jenis Kereta</option>
                {data.map((item, index) => (
                  <option key={index} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Tanggal Keberangkatan</Form.Label>
              <Form.Control
                type="date"
                onChange={this.handleChange}
                name="dateStart"
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                as="select"
                onChange={this.handleChange}
                name="stationStart"
              >
                <option>Pilih Stasiun Keberangkatan</option>
                <option value="Manggarai">Manggarai</option>
                <option value="Wuhan">Wuhan</option>
                <option value="Tokyo">Tokyo</option>
                <option value="China">China</option>
                <option value="Afrika">Afrika</option>
                <option value="Zimbwabe">Zimbwabe</option>
                <option value="Namex">Namex</option>
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Jam Keberangkatan</Form.Label>
              <Form.Control
                type="time"
                onChange={this.handleChange}
                name="timeStart"
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                as="select"
                onChange={this.handleChange}
                name="destinationStation"
              >
                <option>Pilih Stasiun Tujuan</option>
                <option value="Medan">Medan</option>
                <option value="Depok">Depok</option>
                <option value="Singapore">Singapore</option>
                <option value="Makassar">Makassar</option>
                <option value="India">India</option>
                <option value="Malaysia">Malaysia</option>
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Jam Tiba</Form.Label>
              <Form.Control
                type="time"
                onChange={this.handleChange}
                name="timeArrival"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Harga Ticket</Form.Label>
              <Form.Control
                type="number"
                onChange={this.handleChange}
                name="price"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Qty</Form.Label>
              <Form.Control
                type="number"
                onChange={this.handleChange}
                name="qty"
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                as="select"
                onChange={this.handleChange}
                name="station1"
              >
                <option>Pilih Nama Station Awal</option>
                <option value="Wadidaw (WDD)">Wadidaw (WDD)</option>
                <option value="Meleleh (MLL)">Meleleh (MLL)</option>
                <option value="Kou (KU)">Kou (KU)</option>
                <option value="CIAO (CIO)">CIAO (CIO)</option>
                <option value="Alala (ALL)">Alala (ALL)</option>
                <option value="Zoro (ZR)">Zoro (ZR)</option>
                <option value="NO (N)">NO (N)</option>
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Control
                as="select"
                onChange={this.handleChange}
                name="station2"
              >
                <option>Pilih Nama Station Akhir</option>
                <option value="Wadidaw (WDD)">Wadidaw (WDD)</option>
                <option value="Meleleh (MLL)">Meleleh (MLL)</option>
                <option value="Kou (KU)">Kou (KU)</option>
                <option value="CIAO (CIO)">CIAO (CIO)</option>
                <option value="Alala (ALL)">Alala (ALL)</option>
                <option value="Zoro (ZR)">Zoro (ZR)</option>
                <option value="NO (N)">NO (N)</option>
              </Form.Control>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            {/* <Button onClick={this.closeModal}>Close</Button> */}
            <Button size="sm" onClick={this.handleTambah}>
              <strong>Tambah</strong>
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    train: state.trains,
    types: state.types
  };
};
const mapDispatchToProps = dispatch => {
  return {
    postTrain: data => dispatch(postTrain(data)),
    getTypes: () => dispatch(getTypes())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Tambah);
