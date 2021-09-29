import {Box, Flex} from "rebass";
import {Heading} from "grommet";
import React from "react";
import Container from "react-bootstrap/Container";
import {Row} from "react-bootstrap";

export const UpcomingPredictions = () => {
    return (
        <Container>
            <Box>
                <Heading textAlign="center" margin="medium">Sunday & Mondays Predictions</Heading>
            </Box>
            <Row>
                <Flex>
                    <Box p={2}>
                    </Box>
                </Flex>
            </Row>
            <Row>
                <Flex>
                    <Box p={2}>
                    </Box>
                </Flex>
            </Row>
        </Container>
    )
}