import React, { Component } from "react";
import { Table, Button } from "react-bootstrap";

export default class Transaksi extends Component {
  render() {
    return (
      <div>
        <Table striped hover>
          <thead>
            <h4>List Transaksi</h4>
            <tr>
              <th>No</th>
              <th>User</th>
              <th>Ticket</th>
              <th>Bukti Transfer</th>
              <th>Status Payment</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Surabaya-Jakarta</td>
              <td>baca.jpg</td>
              <td>Pending</td>
              <td>
                <Button variant="info" size="sm">
                  Detail
                </Button>{" "}
                <Button variant="warning" size="sm">
                  Edit
                </Button>{" "}
                <Button variant="danger" size="sm">
                  Delete
                </Button>{" "}
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Mark</td>
              <td>Surabaya-Jakarta</td>
              <td>baca.jpg</td>
              <td>Pending</td>
              <td>
                <Button variant="info" size="sm">
                  Detail
                </Button>{" "}
                <Button variant="warning" size="sm">
                  Edit
                </Button>{" "}
                <Button variant="danger" size="sm">
                  Delete
                </Button>{" "}
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Mark</td>
              <td>Surabaya-Jakarta</td>
              <td>baca.jpg</td>
              <td>Pending</td>
              <td>
                <Button variant="info" size="sm">
                  Detail
                </Button>{" "}
                <Button variant="warning" size="sm">
                  Edit
                </Button>{" "}
                <Button variant="danger" size="sm">
                  Delete
                </Button>{" "}
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}
