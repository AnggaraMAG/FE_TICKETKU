import React, { Component } from "react";
import { Button, Modal, Row, Col, Table, Image } from "react-bootstrap";
import qrcode from "../../images/qrcode.jpg";

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
    return this.props.data.attachment ? (
      <>
        <Button variant="success" size="sm" onClick={this.openModal}>
          Detail
        </Button>
        <Modal show={this.state.login} onHide={this.closeModal}>
          <Modal.Body>
            <div>
              <h2>
                <strong>INVOICE</strong>
              </h2>
              <p style={{ size: 10 }}>Kode Invoice :NGA72626</p>
            </div>
            <Row>
              <Col sm={9} style={{ marginLeft: 10 }}>
                <Row>
                  <Col xs={6}>
                    <Row>
                      <h3>Kereta Api</h3>
                      <p>Saturday ,21 Februari 2020</p>
                    </Row>
                  </Col>
                  <Col xs={6}>
                    <img style={{ width: 50 }} src={qrcode} alt="img"></img>
                    <p>TI8737</p>
                  </Col>
                </Row>
                <h5>{this.props.data.train.nameTrain}</h5>
                <p>Eksekutif</p>
                <Row>
                  <Col xs={6}>
                    <h6>{this.props.data.train.timeStart}</h6>
                    <p>{this.props.data.train.dateStart}</p>
                  </Col>
                  <Col xs={6}>
                    <h6>{this.props.data.train.station1}</h6>
                    <p>{this.props.data.train.stationStart}</p>
                  </Col>
                </Row>
                <Row>
                  <Col xs={6}>
                    <h6>{this.props.data.train.timeArrival}</h6>
                    <p>{this.props.data.train.dateStart}</p>
                  </Col>
                  <Col xs={6}>
                    <h6>{this.props.data.train.station2}</h6>
                    <p>{this.props.data.train.destinationStation}</p>
                  </Col>
                </Row>
                <hr />
                <Row>
                  <Table>
                    <tbody>
                      <tr>
                        <th>No.tanda Pengenal</th>
                        <th>Nama Pemesanan</th>
                        <th>No Handphone</th>
                        <th>Email</th>
                      </tr>
                      <br />
                      <tr>
                        <td>{this.props.data.user.idcard}</td>
                        <td>{this.props.data.user.name}</td>
                        <td>{this.props.data.user.phone}</td>
                        <td>{this.props.data.user.email}</td>
                      </tr>
                      <tr>
                        <td style={{ color: "red" }}>
                          <b>TOTAL :</b>{" "}
                        </td>
                        <td>
                          <tr>
                            <b>Rp.</b>
                            <b>{this.props.data.totalprice}</b>
                          </tr>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Row>
              </Col>
              <Col>
                <p>upload payment proof</p>
                <Image
                  style={{ width: 200 }}
                  src={require(`../../../images/${this.props.data.attachment}`)}
                />
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
          </Modal.Footer>
        </Modal>
      </>
    ) : null;
  }
}
export default Edit;
