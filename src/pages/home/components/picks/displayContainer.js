import React from 'react';
import {Box} from "rebass";
import {Container, Row} from "react-bootstrap";
import {Picks} from "./picks";
import {aug27, latestPicks, results_8_27_21} from "./data";
import {Heading} from "grommet";

export const DisplayContainer = () => {
    return (
        <Container>
            <Row>
                <Box gridArea="header" background="brand">
                    <Heading textAlign="center" margin="small" ccolor="#2383cc">Predictions & Results</Heading>
                </Box>
            </Row>
            <Row>
                <Picks data={results_8_27_21} date="27/08/2021"/>
            </Row>
            <Row>
                <p>
                    ** In the table above, you will find the predictions that our algorithm has generated for this
                    weekend's matchups. In the prediction column, a <strong>"1"</strong> means the home team has been
                    selected to win, <strong>"2"</strong> is the away team to win, and <strong>"x</strong>" means that we expect a draw.
                </p>
            </Row>
        </Container>
    );
}