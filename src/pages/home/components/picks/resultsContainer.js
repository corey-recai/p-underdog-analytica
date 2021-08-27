import Container from "react-bootstrap/Container";
import {results_aug21, results_aug22} from "./latestData";
import {PicksContainer} from "./picksContainer";
import React from "react";
import {PicksInfo} from "./picksInfo";
import {Box, Heading} from "grommet";
import {Row} from "react-bootstrap";


export const ResultsContainer = () => {
    return (
        <Container className="home-section-3">
            <Row>
                <Box gridArea="header">
                    <Heading textAlign="center" margin="small" ccolor="#2383cc">Last Weeks Results</Heading>
                </Box>
            </Row>
            <PicksContainer data={results_aug22} date="22/08/2021"/>
            <PicksContainer data={results_aug21} date="21/08/2021"/>
            <PicksInfo />
        </Container>
    );
}