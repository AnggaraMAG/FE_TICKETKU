import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { connect } from "react-redux";
import { getTrains } from "../../_actions/trains";

class Jadwal extends Component {
  componentDidMount() {
    this.props.getTrains();
  }
  render() {
    return (
      <div className="container mt-5">
        <Table responsive className="text-center">
          <thead>
            <tr>
              <th>Nama Kereta</th>
              <th>Berangkat</th>
              <th>Tiba</th>
              <th>Durasi</th>
              <th>Harga PerOrang</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mark</td>
              <td>10:00</td>
              <td>12:00</td>
              <td>2 Jam</td>
              <td style={{ color: "red" }}>Rp.100</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    trains: state.trains,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getTrains: () => dispatch(getTrains())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Jadwal);
