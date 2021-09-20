import React from 'react';
import {Box, Flex} from "rebass";
import {Container, Row} from "react-bootstrap";
import {PicksTable} from "./picksTable";
import {latest_results} from "./data";
import {Heading} from "grommet";

export const DisplayContainer = () => {
        return (
            <Container>
                <Box>
                    <Heading textAlign="center" margin="small">Weekend Outcomes & Details</Heading>
                </Box>
                <Row>
                    <Flex>
                        <Box p={2}>
                            <PicksTable data={latest_results} />
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