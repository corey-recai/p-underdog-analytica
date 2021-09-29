import React from 'react';
import {Box, Flex} from "rebass";
import {Container, Row} from "react-bootstrap";
import {CustomTable} from "./customTable";
import {Heading} from "grommet";
import {predictionColumns} from "./data/predictionData";
import {PredictionInfo} from "./predictionInfo";
import {weekend_results} from "./data/resultData";

export const DisplayContainer = (props) => {
    return (
        <Container>
            <Box>
                <Heading textAlign="center" margin="medium">{props.title}</Heading>
            </Box>
            <Row>
                <Flex>
                    <Box p={2}>
                        <CustomTable columns={predictionColumns} data={weekend_results} date="Saturday 25/09/2021"/>
                    </Box>
                </Flex>
            </Row>
            <PredictionInfo />
        </Container>
    );
}