import React, {Component} from "react";
import {Container, Row} from "react-bootstrap";
import {Picks} from "./picks";
import {Metrics} from "./metrics";

export default class DisplayContainer extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Metrics />
                </Row>
                <Row>
                    <Picks />
                </Row>
            </Container>
        );
    }
}