import React, { Component } from "react";
import { Form, Col, Card, Row, Table, Button } from "react-bootstrap";
import bullet from "../images/repeat.png";

export default class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value1: "",
      value2: ""
    };
  }
  handlechange1 = e => {
    this.setState({ value1: e.target.value });
  };
  handlechange2 = e => {
    this.setState({ value2: e.target.value });
  };

  handleclick = () => {
    this.setState({ value2: this.state.value1 });
    this.setState({ value1: this.state.value2 });
  };
  render() {
    const { value1, value2 } = this.state;
    return (
      <div className="container" style={{ marginTop: -50 }}>
        <Card className="shadow" style={{ padding: 20 }}>
          <Form>
            <Row>
              <Col sm={2}>
                <h4>Ticket</h4>
              </Col>
              <Col sm={4}>
                <h5>Ticket Kereta Api</h5>
                <Table>
                  <Form.Label>
                    <strong>Asal</strong>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    value={value2}
                    onChange={this.handlechange2}
                  />
                  <Row>
                    <Col xs={6}>
                      <Form.Label className="mt-3">
                        <strong>Tanggal Berangkat</strong>
                      </Form.Label>
                      <Form.Control type="date" />
                    </Col>
                    <Col xs={6} className="mt-3">
                      <Form.Check
                        type="switch"
                        id="custom-switch"
                        label="Pulang Pergi"
                      />
                    </Col>
                  </Row>
                </Table>
              </Col>
              <Col sm={2}>
                <Button
                  onClick={this.handleclick}
                  variant=""
                  style={{
                    marginTop: "65px",
                    marginLeft: "20px",
                    borderRadius: "500px"
                    // width: "40px",
                    // height: "40",
                  }}
                >
                  <img style={{ width: 30 }} src={bullet} alt="arrow"></img>
                </Button>
              </Col>
              <Col sm={4}>
                <Table style={{ marginTop: "32px" }}>
                  <Form.Label>
                    <strong>Tujuan</strong>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    value={value1}
                    onChange={this.handlechange1}
                  />
                  <Row className="mt-4">
                    <Col xs={4}>
                      <Form.Group>
                        <Form.Label>
                          <strong>Dewasa</strong>
                        </Form.Label>
                        <Form.Control as="select">
                          <option>0</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </Form.Control>
                      </Form.Group>
                    </Col>
                    <Col xs={4}>
                      <Form.Group>
                        <Form.Label>
                          <strong>Bayi</strong>
                        </Form.Label>
                        <Form.Control as="select">
                          <option>0</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </Form.Control>
                      </Form.Group>
                    </Col>
                    <Col xs={4} className="mt-4">
                      <Button size="sm" variant="danger">
                        Cari Ticket
                      </Button>
                    </Col>
                  </Row>
                </Table>
              </Col>
            </Row>
          </Form>
        </Card>
      </div>
    );
  }
}
