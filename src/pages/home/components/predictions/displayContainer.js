import React from 'react';
import {Box, Flex} from "rebass";
import {Container, Row, Col} from "react-bootstrap";
import {CustomTable} from "./customTable";
import {predictionColumns, saturday, sunday} from "./data/predictionData";
import {PredictionInfo} from "./predictionInfo";


export const DisplayContainer = () => {
    return (
        <Container>
            <Row>
                <Flex>
                    <Box p={2} width={[1000]} fontSize={1}>
                        <CustomTable columns={predictionColumns} data={saturday} date="23/10/2021"/>
                    </Box>
                </Flex>
            </Row>
            <Row>
                <Flex>
                    <Box p={2} width={[1000]} fontSize={1}>
                        <CustomTable columns={predictionColumns} data={sunday} date="24/10/2021"/>
                    </Box>
                </Flex>
            </Row>
            <PredictionInfo />
        </Container>
    );
}
