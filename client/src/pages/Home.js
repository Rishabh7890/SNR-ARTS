import React, { Component } from "react";
// import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Jumbotron from '../components/Jumbotron';
import { render } from "react-dom";
import Carousel from "../components/Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../App.css";
import Footer from "../components/Footer";
// import myNavbar from "../components/myNavbar";

class Home extends Component {
  state = {
    searchTerm: ''
  };


  // THIS IS THE CODE FOR INPUT CHANGE AND FORM SUBMIT IN THE SEARCH BAR. NEED TO DECIDE IF IM GOING TO USE MONGO OR JUST DO A JSON IN THE FRONT END
  // handleInputChange = event => {
  //   const { name, value } = event.target;
  //   this.setState({
  //     [name]: value
  //   });
  // };

  // handleFormSubmit = event => {
  //   event.preventDefault();

  //   searchPaintings(this.state.searchTerm)
  //   .then(({ data: { items: paintingList } }) => {
  //     const paintingListCleaned = paintingList.map(painting => {
  //       return {
  //         paintingID: painting.id,
  //         title: painting.title,
  //         description: painting.description,
  //         image: painting.image
  //       }
  //     })
  //     return this.setState({ paintingList: paintingListCleaned });
  //   })
  //   .then(this.retrievePainting)
  //   .catch(err => console.log(err));
  // };

  render() {
    return (
      <React.Fragment>
        <Navbar className="navCustom" bg="light" variant="light">
          <Navbar.Brand href="#home">SNR Arts</Navbar.Brand>
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
