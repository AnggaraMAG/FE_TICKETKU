import React, { Component } from "react";
import { Table } from "react-bootstrap";

export default class Jadwal extends Component {
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
              <th>Harga Perorang</th>
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
            <tr>
              <td>Jacob</td>
              <td>05:00</td>
              <td>10:00</td>
              <td>5 Jam</td>
              <td style={{ color: "red" }}>Rp.150</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}
