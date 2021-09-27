import Container from "react-bootstrap/Container";
import {PicksContainer} from "./picksContainer";
import React from "react";
import {PredictionInfo} from "./predictionInfo";
import {Box, Heading} from "grommet";
import {Row} from "react-bootstrap";
import {aug27_29} from "../../../betHistory/data/season21_22/august";


export const ResultsContainer = () => {
    return (
        <Container className="home-section-3">
            <Row>
                <Box gridArea="header">
                    <Heading textAlign="center" margin="small" ccolor="#2383cc">Last Weeks Results & Details</Heading>
                </Box>
            </Row>
            <PicksContainer data={aug27_29} date="August 27-29, 2021"/>
            <PredictionInfo />
        </Container>
    );
}