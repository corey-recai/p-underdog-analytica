import React from 'react';
import {Metrics} from "./metrics";
import { Flex, Box, Text } from "rebass";
import {Container, Row} from "react-bootstrap";
import {Picks} from "./picks";
import {latestPicks} from "./data";

export const DisplayContainer = () => {
        return (
            <Container>
                <Row>
                    <Flex>
                        <Box p={2}>
                            <Picks data={latestPicks} />
                        </Box>
                    </Flex>
                </Row>
                <Row>
                    <Metrics />
                </Row>
            </Container>
        );
}