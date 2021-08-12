import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import {Box, Flex} from "rebass";
import {AccordionTable} from "../../../betHistory/components/accordianTable";
import {Picks} from "./picks";

export const DisplayContainer = () => {
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
                
            </Row>
        </Container>
    );
}