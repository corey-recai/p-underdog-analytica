import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";

import logos from "../../assets/logos/logos";

export default class Navigation extends Component {
  render() {
    return (
      <>
        <Navbar className="py-3 ua-nav" sticky="top" expand="lg">
          <Container fluid className="nav-container">
            <Navbar.Brand href="#home" id="navbar-brand" className="me-auto">
              <img src={logos.logoTransparentNoText} className="nav-logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav id="nav-link-list" className="ms-auto">
                <Nav.Link className="px-3" href="#home">
                  Bet History
                </Nav.Link>
                <Nav.Link className="px-3" href="#link">
                  About Us
                </Nav.Link>
                <Nav.Link className="px-3" href="#home">
                  Sign Up
                </Nav.Link>
                <Nav.Link className="px-3" href="#link">
                  Login
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
}
