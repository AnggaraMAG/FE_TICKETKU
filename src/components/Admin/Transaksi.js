import React, { Component } from "react";
import { Table, Button, Container } from "react-bootstrap";
import Edit from "./Admin/../Modal/Edit";
import Detail from "../Admin/Modal/Detail";

export default class Transaksi extends Component {
  render() {
    return (
      <Container className="mt-4">
        <Table striped hover>
          <thead>
            <h2>List Transaksi</h2>
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
                {/* <Button variant="info" size="sm">
                  Detail
                </Button>{" "} */}
                <Edit /> <Detail />{" "}
                <Button variant="danger" size="sm">
                  Delete
                </Button>{" "}
              </td>
            </tr>
            {/* <tr>
              <td>2</td>
              <td>Mark</td>
              <td>Surabaya-Jakarta</td>
              <td>baca.jpg</td>
              <td>Pending</td>
              <td>
                <Edit/>
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
            </tr> */}
          </tbody>
        </Table>
      </Container>
    );
  }
}
