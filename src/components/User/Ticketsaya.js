import React, { Component } from "react";
import Usernav from "../Landing/Navbar";
import { Container, Row, Col, Card, Table, Button } from "react-bootstrap";
import "./CSS/Ticketsaya.css";
import { Link } from "react-router-dom";
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
            <Card style={{ padding: 30 }} key={index}>
              <Row className="mt-3">
                <Col sm={8}>
                  <Row>
                    <Col xs={4}>
                      <h4>
                        <strong>{item.train.nameTrain}</strong>
                      </h4>
                      <p>{item.train.type.name}</p>
                      {item.status === "approved" ? (
                        <h6
                          style={{
                            color: "white",
                            backgroundColor: "green",
                            width: 80,
                            borderRadius: 5
                          }}
                        >
                          {item.status}
                        </h6>
                      ) : (
                        <h6
                          style={{
                            color: "white",
                            backgroundColor: "red",
                            width: 80,
                            borderRadius: 5
                          }}
                        >
                          {item.status}
                        </h6>
                      )}
                    </Col>
                    <Col xs={4} className="colorT">
                      <h6>
                        <strong>{item.train.timeStart}</strong>
                      </h6>
                      <p>{item.train.dateStart}</p>
                      <br />
                      <h6>
                        <strong>{item.train.timeArrival}</strong>
                      </h6>
                      <p>{item.train.dateStart}</p>
                    </Col>
                    <Col xs={4} className="colorT">
                      <h6>{item.train.stationStart}</h6>
                      <p>{item.train.station1}</p>
                      <br />
                      <h6>{item.train.destinationStation}</h6>
                      <p>{item.train.station2}</p>
                    </Col>
                  </Row>
                </Col>
                <Col>
                  <h4>
                    <strong>Kereta Api</strong>
                  </h4>
                  <h6 className="satur">{item.train.dateStart}</h6>
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
                        <td>{item.user.idcard}</td>
                        <td>{item.user.name}</td>
                        <td>{item.user.phone}</td>
                        <td>{item.user.email}</td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
                <Col className="mt-5">
                  <Link to="/invoice">
                    <Button variant="danger">Bayar Sekarang</Button>
                  </Link>
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
