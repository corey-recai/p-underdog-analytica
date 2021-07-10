import React, {Component} from "react";
import { Nav, Navbar } from "react-bootstrap";
import styled from 'styled-components'
import {Link} from "react-router-dom";

const Styles = styled.div`
  .navbar {
    width: 100%;
    //position: fixed;
    //top: 0;
    margin-bottom: 2%;
  }

  .navbar-brand, .navbar-nav .nav-link {
    color: #bbb;

    &:hover {
      color: white;
    }
  }
`;

export default class nav extends Component {
    render() {
        return (
          <>
              <Styles>
                  <Navbar bg="dark" expand="lg">
                      <Navbar.Brand href="">Underdog Analytica</Navbar.Brand>
                      <Navbar.Toggle aria-controls="basic-navbar-nav" />
                      <Navbar.Collapse id="basic-navbar-nav">
                          <Nav className="ml-auto">
                              <Nav.Item>
                                  <Nav.Link as={Link} to={"/"}>
                                      Home
                                  </Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                  <Nav.Link as={Link} to={"/about"}>
                                      About
                                  </Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                  <Nav.Link as={Link} to={"/contact"}>
                                      Contact Us
                                  </Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                  <Nav.Link as={Link} to={"/betting"}>
                                      Betting 101
                                  </Nav.Link>
                              </Nav.Item>
                          </Nav>
                      </Navbar.Collapse>
                  </Navbar>

              </Styles>
          </>
        );
    }
}