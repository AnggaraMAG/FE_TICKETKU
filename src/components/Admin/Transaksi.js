import React, { Component } from "react";
import { Table } from "react-bootstrap";
import Edit from "./Admin/../Modal/Edit";
import Detail from "../Admin/Modal/Detail";
import Delete from "../Admin/Modal/Delete";
import { connect } from "react-redux";
import { getOrders } from "../../_actions/order";

class Transaksi extends Component {
  componentDidMount() {
    this.props.getOrders();
  }
  render() {
    const { data } = this.props.orders;
    return (
      <>
        <Table striped bordered hover className="container mt-4">
          <thead>
            <tr>
              <th>No</th>
              <th>Users</th>
              <th>Ticket</th>
              <th>Bukti Transfer</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.user.name}</td>
                <td>
                  {item.train.stationStart} -{" "}
                  <span>{item.train.destinationStation}</span>
                </td>
                <td>{item.attachment}</td>
                <td>{item.status}</td>
                <td>
                  <Edit data={item} /> <Detail data={item} />{" "}
                  <Delete data={item} />{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    orders: state.orders
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getOrders: () => dispatch(getOrders())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Transaksi);
