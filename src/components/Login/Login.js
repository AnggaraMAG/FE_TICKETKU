import React, { Component } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { connect } from "react-redux";
import { login } from "../../_actions/auth";

class Login extends Component {
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

  handleLogin = async e => {
    e.preventDefault();
    const data = {
      email: this.state.email,
      password: this.state.password
    };
    const res = await this.props.getLogin(data);
    if (res.action.type === "LOGIN_FULFILLED") {
      window.location.reload(false);
      this.setState({
        login: false
      });
    }
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(e.target.value);
  };
  render() {
    const { verif } = this.props.auth;
    return (
      <>
        <Button variant="outline-light" size="sm" onClick={this.openModal}>
          Masuk
        </Button>
        <Modal show={this.state.login} onHide={this.closeModal}>
          <Form>
            <Modal.Header>
              <Modal.Title>
                <strong>Masuk</strong>
              </Modal.Title>
            </Modal.Header>
            <h6 style={{ marginLeft: 100, color: "red" }}>
              {verif === false ? <p>Password or email wrong</p> : ""}
            </h6>
            <Modal.Body>
              <Form.Group>
                <Form.Control
                  onChange={this.handleChange}
                  type="email"
                  placeholder="Email"
                  name="email"
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  onChange={this.handleChange}
                  type="password"
                  placeholder="Password"
                  name="password"
                  required
                />
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button type="submit" size="sm" onClick={this.handleLogin}>
                Masuk
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
    auth: state.auth,
    user: state.user
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getLogin: data => dispatch(login(data))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
