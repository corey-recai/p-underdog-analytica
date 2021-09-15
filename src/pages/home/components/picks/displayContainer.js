import React from 'react';
import {Box, Flex} from "rebass";
import {Container, Row} from "react-bootstrap";
import {Picks} from "./picks";
import {latestPicks} from "./data";
import {Heading} from "grommet";

export const DisplayContainer = () => {
        return (
            <Container>
                <Row>
                    <Box gridArea="header" background="brand" >
                        <Heading textAlign="center" margin="small" ccolor="#2383cc">Check Out our Latest Picks</Heading>
                    </Box>
                </Row>
                <Row>
                    <Flex>
                        <Box p={2}>
                            <Picks data={latestPicks} />
                        </Box>
                    </Flex>
                </Row>
                <Row>
                    <p className="home-section-2-text mx-auto">
                        ** In the table above, you will find the predictions that our algorithm has generated for this weekend's matchups. In the prediction column, a <strong>"1"</strong> means the home team has been selected to win, <strong>"2"</strong> is the away team to win, and <strong>"X</strong>" means that we expect a draw.
                    </p>
                </Row>
            </Container>
        );
}