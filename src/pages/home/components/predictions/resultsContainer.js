import Container from "react-bootstrap/Container";
import React from "react";
import {PredictionInfo} from "./predictionInfo";
import {Box, Heading} from "grommet";
import {Row} from "react-bootstrap";
import {CustomTable} from "./customTable";
import {resultColumns, weekend_results} from "./data/resultData";


export const ResultsContainer = () => {
    return (
        <Container className="home-section-3">
            <Row>
                <Box gridArea="header">
                    <Heading textAlign="center" margin="small" ccolor="#2383cc">Last Weeks Results & Details</Heading>
                </Box>
            </Row>
            <CustomTable columns={resultColumns} data={weekend_results} date="August 27-29, 2021"/>
            <PredictionInfo />
        </Container>
    );
}