import React, { Component } from "react";
import { Col, Row, Container, Card, Table, Button } from "react-bootstrap";
import Navabar from "../Landing/Navbar";
import Footer from "../Landing/Footer";
import "./CSS/Invoice.css";
import qrcode from "../images/qrcode.jpg";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getMyticket } from "../../_actions/myticket";

class Invoice extends Component {
  componentDidMount() {
    this.props.getMyticket();
  }
  render() {
    const { data } = this.props.myticket;
    return (
      <div>
        <Navabar />
        <Container>
          {data.map((item, index) => (
            //
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
                      <td>{item.user.username}</td>
                      <td>{item.user.name}</td>
                      <td>{item.user.phone}</td>
                      <td>{item.user.email}</td>
                    </tr>
                  </Table>
                </Row>
                <Row style={{ marginTop: 60 }}>
                  <Col sm={8}>
                    <h3>Rincian Harga</h3>
                    <Table bordered>
                      <tr>
                        <td>
                          {item.train.nameTrain} <span>(Dewasa)x 1</span>
                        </td>
                        <td>Rp. 250.000</td>
                      </tr>
                      <tr className="bgtotal">
                        <td>
                          <strong>Total</strong>
                        </td>
                        <td>
                          <strong>Rp. 250.000</strong>
                        </td>
                      </tr>
                    </Table>
                    <Link to="/approve">
                      <Button variant="info" className="mb-5 mt-3">
                        Bayar Sekarang
                      </Button>
                    </Link>
                  </Col>
                  <Col>FOTO OI</Col>
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
                    {/* <span>Eksekutif (H)</span> */}
                    <Table className="garisilang">
                      <h5 style={{ color: "red" }}>Stasiun</h5>
                      <tr>
                        <th>{item.train.timeStart}</th>
                        <th>{item.train.stationStart}</th>
                      </tr>
                      <tr>
                        <td>{item.train.dateStart}</td>
                        <td>Depok</td>
                      </tr>
                      <h5 style={{ color: "red" }}>Tujuan</h5>
                      <tr>
                        <th>{item.train.timeArrival}</th>
                        <th>{item.train.destinationStation}</th>
                      </tr>
                      <tr>
                        <td>{item.train.dateStart}</td>
                        <td>Wuhan</td>
                      </tr>
                    </Table>
                  </Row>
                </div>
              </Col>
            </Row>
          ))}
          ;
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
