import React from 'react';
import {Box} from "rebass";
import {Container, Row} from "react-bootstrap";
import {Picks} from "./picks";
import {latestPicks, aug22} from "./data";
import {Heading} from "grommet";

export const DisplayContainer = () => {
    return (
        <Container>
            <Row>
                <Box gridArea="header" background="brand">
                    <Heading textAlign="center" margin="small" ccolor="#2383cc">Check Out our Latest Picks</Heading>
                </Box>
            </Row>
            <Row>
                <Picks data={aug22} date="22/08/2021"/>
            </Row>
            <Row>
                <Picks data={latestPicks} date="21/08/2021"/>
            </Row>
            <Row>
                <p>
                    ** In the table above, you will find the predictions that our algorithm has generated for this
                    weekend's matchups. In the prediction column, a <strong>"1"</strong> means the home team has been
                    selected to win, <strong>"2"</strong> is the away team to win, and <strong>"x</strong>" (which
                    doesn't apply this week) means that we expect a draw.
                </p>
            </Row>
        </Container>
    );
}