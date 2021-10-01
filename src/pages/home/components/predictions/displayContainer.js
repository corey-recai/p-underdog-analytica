import React from 'react';
import {Box, Flex} from "rebass";
import {Container, Row} from "react-bootstrap";
import {CustomTable} from "./customTable";
import {Heading} from "grommet";
import {predictionColumns, saturday, sunday} from "./data/predictionData";
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
                        <CustomTable columns={predictionColumns} data={saturday} date="02/10/2021"/>
                    </Box>
                </Flex>
            </Row>
            <Row>
                <Flex>
                    <Box p={2}>
                        <CustomTable columns={predictionColumns} data={sunday} date="03/10/2021"/>
                    </Box>
                </Flex>
            </Row>
            <PredictionInfo />
        </Container>
    );
}
