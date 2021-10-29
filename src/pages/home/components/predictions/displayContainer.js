import React from 'react';
import {Box, Flex} from "rebass";
import {Container, Row, Col} from "react-bootstrap";
import {CustomTable} from "./customTable";
import {monday, predictionColumns, saturday, sunday} from "./data/predictionData";
import {PredictionInfo} from "./predictionInfo";


export const DisplayContainer = () => {
    return (
        <Container>
            <Row>
                <Flex>
                    <Box p={2} width={[1000]} fontSize={1}>
                        <CustomTable columns={predictionColumns} data={saturday} date="30/10/2021"/>
                    </Box>
                </Flex>
            </Row>
            <Row>
                <Flex>
                    <Box p={2} width={[1000]} fontSize={1}>
                        <CustomTable columns={predictionColumns} data={sunday} date="31/10/2021"/>
                    </Box>
                </Flex>
            </Row>
            <Row>
                <Flex>
                    <Box p={2} width={[1000]} fontSize={1}>
                        <CustomTable columns={predictionColumns} data={monday} date="01/11/2021"/>
                    </Box>
                </Flex>
            </Row>
            <PredictionInfo />
        </Container>
    );
}
