import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { connect } from "react-redux";
import { getTrains } from "../../_actions/trains";
import { getTypes } from "../../_actions/types";
import { toRupiah } from "indo-formatter";
import "./Css/Jadwal.css";
import moment from "moment";

class Jadwal extends Component {
  componentDidMount() {
    this.props.getTrains();
    this.props.Types();
  }

  render() {
    const getDuration = (timeA, timeB) => {
      let startTime = moment(timeA, "HH:mm:ss");
      let endTime = moment(timeB, "HH:mm:ss");
      let duration = moment.duration(endTime.diff(startTime));
      let hours = parseInt(duration.asHours());
      let minutes = parseInt(duration.asMinutes()) - hours * 60;
      return `${hours} Jam ${minutes} Menit`;
    };
    const { data: kereta } = this.props.trains;
    return (
      <div className="container mt-5">
        <Table responsive className="text-center">
          <thead>
            <tr>
              <th>Nama Kereta</th>
              <th>Berangkat</th>
              <th>Tiba</th>
              <th>Durasi</th>
              <th>Harga Per Orang</th>
            </tr>
          </thead>
          <tbody className="warna">
            {kereta.map((item, index) => (
              <tr key={index}>
                <td>
                  <h6>{item.nameTrain}</h6>
                  <p>{item.type.name}</p>
                </td>
                <td>
                  <h6>{item.timeStart}</h6>
                  <p>{item.stationStart}</p>
                </td>
                <td>
                  <h6>{item.timeArrival}</h6>
                  <p>{item.destinationStation}</p>
                </td>
                <td>{getDuration(item.timeStart, item.timeArrival)}</td>
                <td style={{ color: "red" }}>{toRupiah(item.price)}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    trains: state.trains,
    types: state.types
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getTrains: () => dispatch(getTrains()),
    Types: () => dispatch(getTypes())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Jadwal);
