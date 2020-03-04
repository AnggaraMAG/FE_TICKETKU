import React, { Component } from "react";
import Transaksi from "./Transaksi";
import Footer from "../Landing/Footer";
import AdminNav from "../Admin/AdminNav";

export default class Admin extends Component {
  render() {
    return (
      <div>
        <AdminNav/>
        <Transaksi />
        <Footer />
      </div>
    );
  }
}
