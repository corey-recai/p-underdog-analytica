import Container from "react-bootstrap/Container";
import React, {useContext} from "react";
import {PredictionInfo} from "./predictionInfo";
import {Box, Grid, ResponsiveContext} from "grommet";
import {Row} from "react-bootstrap";
import {CustomTable} from "./customTable";
import {mondayResults, resultColumns, saturdayResults, sundayResults} from "./data/resultData";
import {GridCard} from "../../../../components/ui/gridCard.js";


export const ResultsContainer = () => {
    const size = useContext(ResponsiveContext)
    return (
        <Container>
            <Box pad="xsmall">
                <Grid gap="small" columns={[size]} alignContent="center">
                    <div className="center">
                        <Row>
                            <Box>
                                <GridCard
                                    title="Last Week's Results & Details"
                                    content={[
                                        <CustomTable columns={resultColumns} data={saturdayResults} date="20/11/2021"/>,
                                        <CustomTable columns={resultColumns} data={sundayResults} date="21/11/2021"/>,
                                        <CustomTable columns={resultColumns} data={mondayResults} date="22/11/2021"/>,
                                        <PredictionInfo
                                        />
                                    ]}
                                />
                            </Box>
                        </Row>
                    </div>
                </Grid>
            </Box>
        </Container>
    );
}