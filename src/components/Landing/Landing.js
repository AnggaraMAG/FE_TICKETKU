import React, { Component } from "react";

import Navabar from "../Landing/Navbar";
import Header from "../Landing/Header";
import Body from "./Body";
import Footer from "./Footer";

export default class Landing extends Component {
  render() {
    return (
      <>
        <Navabar />
        <Header />
        <Body />
        <Footer />
      </>
    );
  }
}
