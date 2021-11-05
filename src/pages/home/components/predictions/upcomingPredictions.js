import {Box, Flex} from "rebass";
import {Heading} from "grommet";
import React from "react";
import Container from "react-bootstrap/Container";
import {Row} from "react-bootstrap";
import {CustomTable} from "./customTable";
import {predictionColumns, sundayPicks} from "./data/predictionData";


export const UpcomingPredictions = () => {
    return (
        <Container>
            <Box>
                <Heading textAlign="center" className="justify-content-center home-section-1-h1-text bold mx-auto">Sunday's Predictions</Heading>
            </Box>
            <Row>
                <Flex>
                    <Box p={2}>
                        <CustomTable columns={predictionColumns} data={sundayPicks} date="24/10/2021"/>
                    </Box>
                </Flex>
            </Row>
        </Container>
    )
}
