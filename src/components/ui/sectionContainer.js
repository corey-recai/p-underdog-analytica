import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import SubscribeBtn from "../../pages/components/subscribeBtn";
import {DisplayContainer} from "../../pages/home/components/predictions/displayContainer";
import Row from "react-bootstrap/Row";
import React from "react";

export const SectionContainer = (props) => {
    return(
        <Container
            fluid
            id="home-section-1-container"
            className="content-container"
        >
            <Row>
                <Col className="pt-5" sm={12} md={12} lg={6}>
                    <div className="home-section-1-cta-text mt-5">
                        <h1 className="bold home-section-1-h1-text">
                            Data-driven predictions and transparent results
                            {/*Transparent &amp; Hassle-Free Sports Betting Predictions*/}
                        </h1>
                        <span className="home-section-1-h2-text highlight">
                    Profit on European football by betting on underdogs. Our
                    algorithm makes the calculations, you make the cash. Start
                    for free today.
                  </span>
                    </div>
                    <div className="py-3">
                        <SubscribeBtn />
                    </div>
                </Col>
                <Col
                    id="home-section-1-big-board-col"
                    className="d-flex align-items-center justify-content-center"
                    sm={12}
                    md={12}
                    lg={6}
                >
                    <div className="home-section-1-big-board-chart-container d-flex align-items-center justify-content-center mt-5">
                        <DisplayContainer title="Weekends Predictions" />
                    </div>
                </Col>
                {/*<Col*/}
                {/*    id="home-section-1-big-board-col"*/}
                {/*    className="d-flex align-items-center justify-content-center"*/}
                {/*    sm={12}*/}
                {/*    md={12}*/}
                {/*    lg={6}*/}
                {/*>*/}
                {/*    <div className="home-section-1-big-board-chart-container mt-5">*/}
                {/*        <HighlightGrid/>*/}
                {/*        <StatsGrid/>*/}
                {/*    </div>*/}
                {/*</Col>*/}
            </Row>

        </Container>
    )
}