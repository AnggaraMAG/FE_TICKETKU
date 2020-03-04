import React, { Component } from "react";
import { Jumbotron, Container, Row, Col, Carousel } from "react-bootstrap";
import Disconimg from "../images/diskon.jpg";
import "./Css/Navbar.css";
import "./Css/Header.css";

export default class Header extends Component {
  render() {
    return (
      <Jumbotron id="colorbg">
        <Row>
          <Container>
            <Row style={{ color: "white" }}>
              <Col className="fluid">
                <h1>Selamat Pagi,Ticket Seekers</h1>
                <p>
                  Ingin Pulang Dengan Ticket Murah?
                  <br />
                  Masuk Dan Daftar Sekarang!!
                </p>
              </Col>
              <Col>
                <Carousel interval={10}>
                  <Carousel.Item style={{ borderRadius: "10px" }}>
                    <img
                      style={{ borderRadius: "10px" }}
                      className="d-block w-100"
                      src={Disconimg}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item style={{ borderRadius: "10px" }}>
                    <img
                      style={{ borderRadius: "10px" }}
                      className="d-block w-100"
                      src={Disconimg}
                      alt="Second slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item style={{ borderRadius: "10px" }}>
                    <img
                      style={{ borderRadius: "10px" }}
                      className="d-block w-100"
                      src={Disconimg}
                      alt="Third slide"
                    />
                  </Carousel.Item>
                </Carousel>
                {/* <Image className="imgsize" src={Disconimg}></Image> */}
              </Col>
            </Row>
          </Container>
        </Row>
      </Jumbotron>
    );
  }
}
