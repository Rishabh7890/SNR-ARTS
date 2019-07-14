import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Jumbotron from '../components/Jumbotron';
import Carousel from "../components/Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../App.css";
import Footer from "../components/Footer";

class Home extends Component {
  state = {
    
  };

  render() {
    return (
      <React.Fragment>
        <Navbar className="navCustom" bg="light" variant="light">
          <Navbar.Brand href="/">SNR Arts</Navbar.Brand>
          <Nav className="ml-auto navCust">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/paintings">Paintings</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar>
        <Jumbotron fluid bg={'light'} color={'dark'} pageTitle={'Welcome to SNR Arts'} />
        <Carousel />
        <Footer children={'Website Created By Rishabh Goel. All Works Of Art Created By Nishi Goel Copyright 2019'} />
      </React.Fragment>
    );
  }
}

export default Home;
