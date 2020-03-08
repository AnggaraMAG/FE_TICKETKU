import React, { Component } from "react";
import {
  Col,
  Row,
  Container,
  Card,
  Table,
  Button,
  Form
} from "react-bootstrap";
import Navabar from "../Landing/Navbar";
import Footer from "../Landing/Footer";
import "./CSS/Invoice.css";
import qrcode from "../images/qrcode.jpg";
// import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getMyticket } from "../../_actions/myticket";

class Invoice extends Component {
  componentDidMount() {
    this.props.getMyticket();
  }
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      preview: null
    };
  }
  render() {
    const { data } = this.props.myticket;

    return (
      <div>
        <Navabar />
        <Container>
          {data.map((item, index) => (
            <Row className="mt-4" key={index}>
              <Col sm={8}>
                <h1>
                  <strong>Invoice</strong>
                </h1>
                <Row className="bgcolor">
                  <Card>
                    <Container className="p-3">
                      <p>
                        Silahkan melakukan pembayaran melalui
                        M-Banking,E-Banking dan ATM ke No.rek yang Tertera.
                      </p>
                      <p>No.Rek : 393838493849384938</p>
                    </Container>
                  </Card>
                </Row>
                <Row style={{ marginTop: 40 }}>
                  <Table bordered>
                    <tr>
                      <th>No.Tanda Pengenal</th>
                      <th>Nama Pemesanan</th>
                      <th>No.Handphone</th>
                      <th>Email</th>
                    </tr>
                    <tr className="warnaabu">
                      <td>{item.user.idcard}</td>
                      <td>{item.user.name}</td>
                      <td>{item.user.phone}</td>
                      <td>{item.user.email}</td>
                    </tr>
                  </Table>
                </Row>
                <Row style={{ marginTop: 60 }}>
                  <Col sm={6}>
                    <h3>Rincian Harga</h3>
                    <Table bordered>
                      <tr>
                        <th>{item.train.nameTrain}</th>
                        <th>Harga</th>
                      </tr>
                      <tbody>
                        <td>
                          <tr>( Dewasa ) x {item.qty}</tr>
                          <tr>( Bayi ) x {item.qtybaby}</tr>
                        </td>
                        <td>
                          <tr>Rp. {item.adultprice}</tr>
                          <tr>Rp. {item.babyprice}</tr>
                        </td>
                      </tbody>
                      <tr className="bgtotal">
                        <td>
                          <strong>Total</strong>
                        </td>
                        <td>
                          <strong>Rp.{item.totalprice}</strong>
                        </td>
                      </tr>
                    </Table>
                    <Button variant="info" className="mb-5 mt-3">
                      Bayar Sekarang
                    </Button>
                  </Col>
                  <Row>
                    <Col>
                      <img
                        src={this.state.preview}
                        style={{ width: 200 }}
                      ></img>
                      <Form enctype="multipart/form-data">
                        <input
                          className="invoice-choose-file"
                          accept="image/*"
                          id="contained-button-file"
                          multiple
                          type="file"
                          name="attachment"
                          onChange={e => {
                            this.setState({
                              preview: URL.createObjectURL(e.target.files[0]),
                              file: e.target.files[0]
                            });
                          }}
                        />
                      </Form>
                    </Col>
                  </Row>
                </Row>
              </Col>
              <Col>
                <div style={{ marginLeft: 10 }}>
                  <Row className="keretabg">
                    <Col sm={9} className="tengah text">
                      <h2>
                        <strong>Kereta Api</strong>
                      </h2>
                      <p>Saturday ,{item.train.dateStart}s</p>
                    </Col>
                    <Col className="mb-3 text-center">
                      <img style={{ width: 130 }} src={qrcode} alt="img"></img>
                      <h5 style={{ color: "black" }}>TU48477</h5>
                    </Col>
                  </Row>
                  <Row className="bgtable tengah">
                    <h5 style={{ textAlign: "center" }}>
                      {item.train.nameTrain}
                    </h5>
                    <Table className="garisilang">
                      <h5 style={{ color: "red" }}>Stasiun</h5>
                      <tr>
                        <th>{item.train.timeStart}</th>
                        <th>{item.train.station1}</th>
                      </tr>
                      <tr>
                        <td>{item.train.dateStart}</td>
                        <td>{item.train.stationStart}</td>
                      </tr>
                      <h5 style={{ color: "red" }}>Tujuan</h5>
                      <tr>
                        <th>{item.train.timeArrival}</th>
                        <th>{item.train.station2}</th>
                      </tr>
                      <tr>
                        <td>{item.train.dateStart}</td>
                        <td>{item.train.destinationStation}</td>
                      </tr>
                    </Table>
                  </Row>
                </div>
              </Col>
            </Row>
          ))}
        </Container>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    myticket: state.myticket
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getMyticket: () => dispatch(getMyticket())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Invoice);
