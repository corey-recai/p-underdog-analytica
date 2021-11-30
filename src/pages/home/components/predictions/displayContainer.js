import {mondayPicks, predictionColumns, saturdayPicks, sundayPicks} from "./data/predictionData";
import {PredictionInfo} from "./predictionInfo";
import Container from "react-bootstrap/Container";
import React, {useContext} from "react";
import {Box, Grid, ResponsiveContext, Heading} from "grommet";
import {Row} from "react-bootstrap";
import {CustomTable} from "./customTable";
import {GridCard} from "../../../../components/ui/gridCard.js";
import {resultColumns} from "./data/resultData";


export const DisplayContainer = () => {
    const size = useContext(ResponsiveContext)
    return (
        <Container>
          <Box pad="xsmall">
            <Grid gap="small" columns={[size]} alignContent="center">
              <div className="center">
                <Row>
                    <Box>
                      <GridCard
                        title="Weekend Fixture Predictions"
                        content={
                          [<CustomTable columns={resultColumns} data={saturdayPicks} date="27/11/2021"/>,
                          <CustomTable columns={resultColumns} data={sundayPicks} date="28/11/2021"/>,
                          <CustomTable columns={resultColumns} data={mondayPicks} date="29/11/2021"/>,
                          <PredictionInfo />]
                        }
                        />
                    </Box>
                </Row>
              </div>
            </Grid>
          </Box>
        </Container>
    );
}