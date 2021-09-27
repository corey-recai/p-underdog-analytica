import {Box, Flex} from "rebass";
import {Heading} from "grommet";
import React from "react";
import Container from "react-bootstrap/Container";
import {Row} from "react-bootstrap";
import {CustomTable} from "./customTable";
import {mondaysPicks, sundaysPicks} from "./data";
import {predictionColumns} from "./data/predictionData";


export const UpcomingPredictions = () => {
    return (
        <Container>
            <Box>
                <Heading textAlign="center" margin="medium">Sunday & Mondays Predictions</Heading>
            </Box>
            <Row>
                <Flex>
                    <Box p={2}>
                        <CustomTable data={sundaysPicks} columns={predictionColumns} date="26/09/2021"/>
                    </Box>
                </Flex>
            </Row>
            <Row>
                <Flex>
                    <Box p={2}>
                        <CustomTable data={mondaysPicks} columns={predictionColumns} date="27/09/2021"/>
                    </Box>
                </Flex>
            </Row>
        </Container>
    )
}