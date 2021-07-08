import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import './nav.css'

export default class nav extends Component {
    placeOrder = () => {
        window.location = "/order";
    };
    render() {
        return (
            <>
                <Navbar className="py-5" sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container fluid className="container-content">

                    </Container>
                </Navbar>
            </>
        );
    }
}
