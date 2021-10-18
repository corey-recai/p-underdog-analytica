import React, {Component} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {faFacebook, faInstagram, faTwitter,} from "@fortawesome/free-brands-svg-icons";
import SubscribeBtn from "./subscribeBtn";
import {SocialIcon} from "./socialIcon";

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
                            <Col sm={12} md={4} lg={2}>
                                <p>
                                    <a className="footer-link" mailto="muhammeta7@gmail.com">
                                        Email Us
                                    </a>
                                </p>
                                <p>
                                    info@underdoganalytica.com
                                </p>
                                {/*<p>*/}
                                {/*  <a className="footer-link" href="#">*/}
                                {/*    Text Us*/}
                                {/*  </a>*/}
                                {/*</p>*/}
                            </Col>
                            {/*<Col sm={12} md={12} lg={2}>*/}
                            {/*  <p>Customer Service</p>*/}
                            {/*  <p>*/}
                            {/*    <a className="footer-link" href="#">*/}
                            {/*      FAQ*/}
                            {/*    </a>*/}
                            {/*  </p>*/}
                            {/*  <p>*/}
                            {/*    <a className="footer-link" href="#">*/}
                            {/*      Contact*/}
                            {/*    </a>*/}
                            {/*  </p>*/}
                            {/*</Col>*/}
                            {/*<Col sm={12} md={12} lg={2}>*/}
                            {/*<p>More Info Coming Soon</p>*/}
                            {/*<p>*/}
                            {/*  <a className="footer-link" href="#">*/}
                            {/*    About Us*/}
                            {/*  </a>*/}
                            {/*</p>*/}
                            {/*<p>*/}
                            {/*  <a className="footer-link" href="#">*/}
                            {/*    How it works*/}
                            {/*  </a>*/}
                            {/*</p>*/}
                            {/*<p>*/}
                            {/*  <a className="footer-link" href="#">*/}
                            {/*    Privacy*/}
                            {/*  </a>*/}
                            {/*</p>*/}
                            {/*<p>*/}
                            {/*  <a className="footer-link" href="#">*/}
                            {/*    Terms*/}
                            {/*  </a>*/}
                            {/*</p>*/}
                            {/*<p>*/}
                            {/*  <a className="footer-link" href="#">*/}
                            {/*    Do Not Sell My Info*/}
                            {/*  </a>*/}
                            {/*</p>*/}
                            {/*</Col>*/}
                            <Col sm={12} md={12} lg={5}>
                                <p>Social</p>
                                <Row>
                                    <Col sm={12} md={4} lg={4}>
                                        <SocialIcon
                                            link="https://www.facebook.com/underdoganalytica"
                                            social={faFacebook}
                                        />
                                    </Col>
                                    <Col sm={12} md={4} lg={4}>
                                        <SocialIcon
                                            link="https://www.instagram.com/underdog_analytica/?hl=en"
                                            social={faInstagram}
                                        />
                                    </Col>
                                    <Col sm={12} md={4} lg={4}>
                                        <SocialIcon
                                            link="https://twitter.com/underdog_bets?lang=en"
                                            social={faTwitter}
                                        />
                                    </Col>
                                </Row>
                            </Col>
                            <Col sm={12} md={12} lg={5}>
                                <SubscribeBtn/>
                            </Col>
                        </Row>
                    </Container>
                </footer>

                <div className="footer-subsection">
                    <hr className="footer-separator mx-auto"/>
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