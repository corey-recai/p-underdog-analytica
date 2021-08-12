import React, {Component} from "react";
import {Container, Row, Col} from "react-bootstrap";
import {Box, Flex} from "rebass";
import {AccordionTable} from "../../../betHistory/components/accordianTable";
import {Picks} from "./picks";
import {Metrics} from "./metrics";

export default class DisplayContainer extends Component {
    render() {
        return (
            <Container
                fluid
                id="home-section-1-container"
                className="content-container"
            >
                <Row>
                    <Picks />
                </Row>
                <Row>
                    <Metrics />
                </Row>
            </Container>
        );
    }
}