import React, { Component } from "react";
import {
  Form,
  Col,
  Card,
  Row,
  Table,
  Button,
  Container
} from "react-bootstrap";

export default class Body extends Component {
  render() {
    return (
      <Container style={{ width: "60%" }}>
        <Card
          className="shadow align-items-center"
          style={{ bottom: 50, height: 250 }}
        >
          <Form className="mt-4">
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
                  <Form.Control type="text" value="Medan" />
                  <Form.Label className="mt-3">
                    <strong>Tanggal Berangkat</strong>
                  </Form.Label>
                  <Form.Control type="date" />
                </Table>
              </Col>
              <Col sm={2}>
                <Button
                  variant="danger"
                  style={{
                    marginTop: "65px",
                    marginLeft: "20px",
                    borderRadius: "100px",
                    width: "40px",
                    height: "40"
                  }}
                >
                  S
                </Button>
              </Col>
              <Col sm={4}>
                <Table style={{ marginTop: "32px" }}>
                  <Form.Label>
                    <strong>Tujuan</strong>
                  </Form.Label>
                  <Form.Control type="text" value="Jakarta" />
                  <Form.Label className="mt-3">Dewasa</Form.Label>
                  <Form.Control type="date" />
                </Table>
              </Col>
            </Row>
          </Form>
        </Card>
      </Container>
    );
  }
}
