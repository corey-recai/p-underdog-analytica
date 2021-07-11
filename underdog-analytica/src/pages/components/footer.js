import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

export default class footer extends Component {
  componentDidMount() {
    this.mobileView = window.matchMedia("(max-width: 767.98px)");

    this.checkWidth = (e) => {
      if (e.matches) {
      } else {
      }
    };

    this.checkWidth(this.mobileView);
    this.mobileView.addListener(this.checkWidth);
  }

  componentWillUnmount() {
    this.mobileView.removeListener(this.checkWidth);
  }
  render() {
    return (
      <>
        <footer className="py-5">
          <Container fluid className="content-container">
            <Row>
              <Col sm={12} md={12} lg={2}>
                <p>
                  <a className="footer-link" href="#">
                    Email Us
                  </a>
                </p>
                <p>
                  <a className="footer-link" href="#">
                    Text Us
                  </a>
                </p>
              </Col>
              <Col sm={12} md={12} lg={2}>
                <p>Customer Service</p>
                <p>
                  <a className="footer-link" href="#">
                    FAQ
                  </a>
                </p>
                <p>
                  <a className="footer-link" href="#">
                    Contact
                  </a>
                </p>
              </Col>
              <Col sm={12} md={12} lg={2}>
                <p>Company</p>
                <p>
                  <a className="footer-link" href="#">
                    About Us
                  </a>
                </p>
                <p>
                  <a className="footer-link" href="#">
                    How it works
                  </a>
                </p>
                <p>
                  <a className="footer-link" href="#">
                    Privacy
                  </a>
                </p>
                <p>
                  <a className="footer-link" href="#">
                    Terms
                  </a>
                </p>
                <p>
                  <a className="footer-link" href="#">
                    Do Not Sell My Info
                  </a>
                </p>
              </Col>
              <Col sm={12} md={12} lg={2}>
                <p>Social</p>
                <div id="footer-social-icons">
                  <FontAwesomeIcon
                    className="small-text "
                    icon={faInstagram}
                    size="lg"
                  />
                  <FontAwesomeIcon
                    className="mx-3 small-text "
                    icon={faTwitter}
                    size="lg"
                  />
                  <FontAwesomeIcon
                    className="small-text "
                    icon={faFacebook}
                    size="lg"
                  />
                </div>
              </Col>
              <Col sm={12} md={12} lg={4}>
                <span className="bold purple-highlight">
                  Sign Up for Our Newsletter
                </span>
                <div className="footer-signup-section">
                  <InputGroup className="my-3">
                    <FormControl
                      className="footer-signup-input"
                      placeholder="Enter your email"
                      aria-label="Enter your email"
                      aria-describedby="basic-addon2"
                    />
                    <Button
                      className="footer-signup-input-btn"
                      variant="outline-secondary"
                      id="button-addon2"
                    >
                      <span className="bold">&#8594;</span>
                    </Button>
                  </InputGroup>
                </div>
                <p className="footer-signup-text">
                  By signing up you agree to Underdog Analytica's{" "}
                  <a href="#">Privacy Policy</a> and{" "}
                  <a href="#">Terms of Service</a>{" "}
                </p>
              </Col>
            </Row>
          </Container>
        </footer>

        <div className="footer-subsection">
          <hr className="footer-separator mx-auto" />
          <Container fluid className="content-container  py-3">
            <Row>
              <Col sm={12} md={12} lg={12}>
                <div className="footer-copyright-section">
                  <p className="footer-copyright-section-text">
                    &copy; 2021 Underdog Analytica{" "}
                  </p>
                  <p
                    className="footer-copyright-section-links"
                    id="footer-copyright"
                  >
                    <a href="/privacy-policy">Privacy Policy</a> |{" "}
                    <a href="/terms">Terms of Service</a>
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}
