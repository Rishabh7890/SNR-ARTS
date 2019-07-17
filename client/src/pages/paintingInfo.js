import React, { Component } from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "../App.css";
import Footer from "../components/Footer";

class PaintingInfo extends Component {
  state = {};

  render() {
    let selectedPaintingId = localStorage.getItem("selectedPainting");
    return (
      <React.Fragment>
        <Navbar className="navCustom d-flex justify-space-between" bg="light" variant="light">
          <Navbar.Brand href="/">SNR Arts</Navbar.Brand>
          <Nav className="ml-auto navCust">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/paintings">Paintings</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar>

       


        <Footer children={'Website Created By Rishabh Goel. All Works Of Art Created By Nishi Goel Copyright 2019'} />
      </React.Fragment>
    );
  }
}


export default PaintingInfo;