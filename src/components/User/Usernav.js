import React, { Component } from "react";
import { Form, Dropdown, DropdownButton } from "react-bootstrap";
import { connect } from "react-redux";
import { getUser } from "../../_actions/user";
import { Link } from "react-router-dom";
class Usernav extends Component {
  componentDidMount() {
    this.props.getUser();
  }

  handleLogout = e => {
    e.preventDefault();
    localStorage.clear();
    window.location.reload(false);
  };
  render() {
    const { data } = this.props.user;
    return (
      <div>
        <Form inline style={{ marginRight: 90 }}>
          <DropdownButton
            className=""
            size="sm"
            variant="light"
            id="dropdown-item-button"
            title={data.name}
          >
            <Dropdown.Item as="button">
              <Link to="/ticketku">Ticket Ku</Link>
            </Dropdown.Item>
            <Dropdown.Item as="button">
              <Link to="/ticketku">Payment</Link>
            </Dropdown.Item>
            <Dropdown.Item as="button" onClick={this.handleLogout}>
              Keluar
            </Dropdown.Item>
          </DropdownButton>
        </Form>
      </div>
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

export default connect(mapStateToprops, mapDispatchToProps)(Usernav);
