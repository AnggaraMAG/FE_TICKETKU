import React, { Component } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { connect } from "react-redux";
import { register } from "../../_actions/auth";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      register: false,
      name: null,
      username: null,
      email: null,
      password: null,
      gender: null,
      phone: null,
      address: null,
      validate: false
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

  handleChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(e.target.value);
  };

  handleRegister = async e => {
    e.preventDefault();
    const data = {
      name: this.state.name,
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      gender: this.state.gender,
      phone: this.state.phone,
      address: this.state.address
    };
    const res = await this.props.getRegister(data);
    if (res.action.type === "REGISTER_FULFILLED") {
      window.location.reload(false);
      this.setState({
        register: false
      });
    }
  };
  render() {
    return (
      <>
        <Button variant="outline-light" size="sm" onClick={this.openModal}>
          Daftar
        </Button>
        <Modal show={this.state.login} onHide={this.closeModal}>
          <Form>
            <Modal.Header>
              <Modal.Title>
                <strong>Daftar</strong>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form.Group>
                <Form.Control
                  required
                  onChange={this.handleChange}
                  type="text"
                  placeholder="Nama Lengkap"
                  name="name"
                />
                <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
              </Form.Group>
              <Form.Group>
                <Form.Control
                  required
                  onChange={this.handleChange}
                  type="text"
                  placeholder="Username"
                  name="username"
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  required
                  onChange={this.handleChange}
                  type="email"
                  placeholder="Email"
                  name="email"
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  required
                  onChange={this.handleChange}
                  type="password"
                  placeholder="Password"
                  name="password"
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  required
                  onChange={this.handleChange}
                  as="select"
                  name="gender"
                >
                  <option>Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Control
                  required
                  onChange={this.handleChange}
                  type="number"
                  placeholder="Phone"
                  name="phone"
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  required
                  onChange={this.handleChange}
                  type="text"
                  placeholder="Address"
                  name="address"
                />
                <Form.Control.Feedback type="invalid">
                  Please choose a username.
                </Form.Control.Feedback>
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button type="submit" size="sm" onClick={this.handleRegister}>
                Daftar
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>
      </>
    );
  }
}
const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getRegister: data => dispatch(register(data))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Register);
