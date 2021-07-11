import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Navigation from "../components/nav";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import "./home.css";
import images from "../../assets/images/images";

export default class Home extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Underdog Analytica | Home</title>
          <link rel="stylesheet"></link>
        </Helmet>
        <Navigation />
        <div className="section-1">
          <Container fluid className="section-1-container">
            <Row>
              <Col className="pt-5" sm={12} md={12} lg={6}>
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
                    Sign up now &nbsp;&nbsp;
                    <FontAwesomeIcon size="sm" icon={faAngleDoubleRight} />
                  </Button>
                </div>
              </Col>
              <Col className="text-center" sm={12} md={12} lg={6}>
                <img
                  className="section-1-big-board-img"
                  src={images.bigBoard}
                />
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}
