import React, { Component } from "react";
import Navigation from "../components/nav";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import "./home.css";

export default class Home extends Component {
  render() {
    return (
      <>
        <Navigation />
        <div className="section-1">
          <Container fluid className="section-1-container pt-5">
            <Row>
              <Col sm={12} md={12} lg={6}>
                <div className="section-1-cta-text">
                  <h1 className="bold section-1-h1-text">
                    TRANSPARENT &amp; HASSLE FREE SPORTS BETTING PREDICTIONS
                  </h1>
                  <h2>
                    Honesty and clarity meets real-time, data-driven European
                    football predictions
                  </h2>
                </div>
                <div className="py-3">
                  <Button className="section-1-signup-btn px-5 py-3" size="lg">
                    Sign Up Now{"  "}
                    <FontAwesomeIcon size="sm" icon={faChevronRight} />
                  </Button>
                </div>
              </Col>
              <Col sm={12} md={12} lg={6}></Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}
