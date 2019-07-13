import React, { Component } from "react";
// import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Jumbotron from '../components/Jumbotron';
// import myNavbar from "../components/myNavbar";

class Home extends Component {
  state = {
    searchTerm: ''
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    searchPaintings(this.state.searchTerm)
    .then(({ data: { items: paintingList } }) => {
      const paintingListCleaned = paintingList.map(painting => {
        return {
          paintingID: painting.id,
          title: painting.title,
          description: painting.description,
          image: painting.image
        }
      })
      return this.setState({ paintingList: paintingListCleaned });
    })
    .then(this.retrievePainting)
    .catch(err => console.log(err));
  };

  render() {
    return (
      <React.Fragment>
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="#home">SNR Arts</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/paintings">Paintings</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search Paintings" className="mr-sm-2" />
            <Button variant="outline-light">Search</Button>
          </Form>
        </Navbar>
        <Jumbotron fluid bg={'dark'} color={'light'} pageTitle={'Welcome to SNR Arts'} />
      </React.Fragment>
    );
  }
}

export default Home;
