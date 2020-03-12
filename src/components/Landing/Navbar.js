import React, { Component } from "react";
import Login from "../Login/Login";
import Register from "../Register/Register";
import { Navbar, Form, Nav } from "react-bootstrap";
import "../Landing/Css/Navbar.css";
import Usernav from "../User/Usernav";
import { connect } from "react-redux";
import { getUser } from "../../_actions/user";
import Admin from "../Admin/AdminNav";
import { Redirect, Link } from "react-router-dom";

class Header extends Component {
  componentDidMount() {
    this.props.getUser();
  }
  render() {
    const { isLogin, data } = this.props.user;
    return (
      <>
        <Navbar className="background" expand="lg">
          <Link to="/">
            <Navbar.Brand>
              <strong className="colorBrand">TicketKu</strong>
            </Navbar.Brand>
          </Link>
          <Nav className="mr-auto"></Nav>
          <Form inline>
            {data.roles === "admin" ? (
              <>
                <Admin />
                <Redirect to="/admin" />
              </>
            ) : isLogin ? (
              <Usernav />
            ) : (
              <>
                <Login /> &nbsp;
                <Register />
              </>
            )}
          </Form>
        </Navbar>
      </>
    );
  }
}

const mapStateToprops = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUser: () => dispatch(getUser())
  };
};

export default connect(mapStateToprops, mapDispatchToProps)(Header);
