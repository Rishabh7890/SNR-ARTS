import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "../App.css";
import Footer from "../components/Footer";
import cardInfo from "../paintings.json";

class Paintings extends Component {
  state = {
    cardInfo: [...cardInfo]
  };

  goToPaintingInfo = (cardInfo) => {
    localStorage.setItem("selectedPainting", cardInfo);
    this.props.history.push(`/paintingInfo/${cardInfo.id}`);
    // return <Redirect to={`/paintingInfo/${cardInfo.id}`} />;
  }

  render() {
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
        <div className="container-fluid">
          <div className="row align-items-center justify-content-between">
            {/* print out cards here */}

            {this.state.cardInfo.map(card => {
              return (
                <div className="col-12 col-sm-3 col-md-2 my-3" key={card.id}>
                  <div className="card">
                  <img
                    src={card.image}
                    alt={card.name}
                    className="img-fluid img-thumbnail rounded indvCard bg-dark"
                    onClick = {() => this.goToPaintingInfo(card)}
                  />
                  <div className="card-body">
                  <h5 className="card-title">{card.name}</h5>
                  <p className="card-text">{card.description}</p>

                  </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <Footer children={'Website Created By Rishabh Goel. All Works Of Art Created By Nishi Goel Copyright 2019'} />
      </React.Fragment>
    );
  }
}


export default Paintings;