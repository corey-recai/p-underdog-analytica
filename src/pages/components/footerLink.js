import Col from "react-bootstrap/Col";
import React from "react";

export const FooterLink = () => {
    return (
        <>
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
                <p>More Info Coming Soon</p>
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
        </>
    )
}