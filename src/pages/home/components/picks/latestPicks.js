import React from 'react';
import {Container, Row} from "react-bootstrap";
import {aug22} from "./latestData";
import {Box, Heading} from "grommet";
import {PicksContainer} from "./picksContainer";


export const LatestPicks = () => {
    return (
        <Container className="display-container">
            <Row>
                <Box gridArea="header">
                    <Heading textAlign="center" margin="small" ccolor="#2383cc">Check Out our Latest Picks</Heading>
                </Box>
            </Row>
            <PicksContainer data={aug22} date="22/08/2021"/>
        </Container>
    );
}