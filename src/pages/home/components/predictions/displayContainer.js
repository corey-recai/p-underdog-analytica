import React from 'react';
import {Box, Flex} from "rebass";
import {Container, Row} from "react-bootstrap";
import {CustomTable} from "./customTable";
import {predictionColumns, saturday, sunday} from "./data/predictionData";
import {PredictionInfo} from "./predictionInfo";


export const DisplayContainer = () => {
    return (
        <Container>
            <Row>
                <Flex>
                    <Box p={2}>
                        <CustomTable columns={predictionColumns} data={saturday} date="16/10/2021"/>
                    </Box>
                </Flex>
            </Row>
            <PredictionInfo />
        </Container>
    );
}