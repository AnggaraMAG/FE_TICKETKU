import React, { Component } from "react";
import Usernav from "../Landing/Navbar";
import { Container, Row, Col, Card, Table, Button } from "react-bootstrap";
import "./CSS/Ticketsaya.css";
import qrcode from "../images/qrcode.jpg";
import { connect } from "react-redux";
import { getMyticket } from "../../_actions/myticket";

class Ticketsaya extends Component {
  componentDidMount() {
    this.props.getMyticket();
  }
  render() {
    const { data } = this.props.myticket;
    return (
      <div>
        <Usernav />
        <Container className="mt-3">
          <h2>
            <strong>Ticket Ku</strong>
          </h2>
          {data.map((item, index) => (
            <Card style={{ padding: 30 }}>
              <Row className="mt-3">
                <Col sm={8}>
                  <Row>
                    <Col xs={4}>
                      <h4>
                        <strong>{item.train.type.name}</strong>
                      </h4>
                      <p>{item.train.type.name}</p>
                      <h6 style={{ color: "green" }}>{item.status}</h6>
                    </Col>
                    <Col xs={4} className="colorT">
                      <h6>
                        <strong>05:00</strong>
                      </h6>
                      <p>21 February 2020</p>
                      <br />
                      <h6>
                        <strong>07:00</strong>
                      </h6>
                      <p>21 February 2020</p>
                    </Col>
                    <Col xs={4} className="colorT">
                      <h6>05:00</h6>
                      <p>21 February 2020</p>
                      <br />
                      <h6>07:00</h6>
                      <p>21 February 2020</p>
                    </Col>
                  </Row>
                </Col>
                <Col>
                  <h4>
                    <strong>Kereta Api</strong>
                  </h4>
                  <h6 className="satur">
                    <b>Saturday</b> ,21 February 2020
                  </h6>
                  <br />
                  <h5>
                    <img style={{ width: 150 }} src={qrcode} alt="img"></img>
                    <h6 style={{ marginLeft: 40 }}>
                      <b>TI8383748</b>
                    </h6>
                  </h5>
                </Col>
              </Row>
              <Row>
                <Col sm={9}>
                  <Table>
                    <thead>
                      <tr>
                        <td>No.Tanda Pengenal</td>
                        <td>Nama Pemesanan</td>
                        <td>No. Handphone</td>
                        <td>Email</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="colortd">
                        <td>929282727232</td>
                        <td>Nurdin</td>
                        <td>3939383933</td>
                        <td>nurdinmtop@gmail.com</td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
                <Col className="mt-5">
                  <Button variant="danger">Bayar Sekarang</Button>
                </Col>
              </Row>
            </Card>
          ))}
        </Container>
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
export default connect(mapStateToProps, mapDispatchToProps)(Ticketsaya);
