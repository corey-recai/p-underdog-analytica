import Container from "react-bootstrap/Container";
import React from "react";
import {PredictionInfo} from "./predictionInfo";
import {Box, Heading} from "grommet";
import {Row} from "react-bootstrap";
import {CustomTable} from "./customTable";
import {resultColumns, saturdayResults, sundayResults} from "./data/resultData";


export const ResultsContainer = () => {
    return (
        <Container>
            <Row>
                <Box gridArea="header" fluid>
                    <Heading className="justify-content-center home-section-1-h1-text bold mx-auto" textAlign="center" margin="xxsmall" ccolor="#2383cc">Last Weeks Results & Details</Heading>
                </Box>
            </Row>
            <Row>
              <Box fluid>
                <CustomTable columns={resultColumns} data={saturdayResults} date="23/10/2021"/>
                <CustomTable columns={resultColumns} data={sundayResults} date="24/10/2021"/>
                <PredictionInfo />
              </Box>
            </Row>
        </Container>
    );
}
