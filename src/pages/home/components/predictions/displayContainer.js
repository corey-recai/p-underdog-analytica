import {monday, predictionColumns, saturday, sunday} from "./data/predictionData";
import {PredictionInfo} from "./predictionInfo";
import Container from "react-bootstrap/Container";
import React, {useContext} from "react";
import {Box, Grid, ResponsiveContext, Heading} from "grommet";
import {Row} from "react-bootstrap";
import {CustomTable} from "./customTable";
import {resultColumns, saturdayResults, sundayResults} from "./data/resultData";
import {GridCard} from "../../../../components/ui/gridCard.js";


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
                        title="Last Week's Results & Details"
                        content={
                          [<CustomTable columns={predictionColumns} data={saturday} date="30/10/2021"/>,
                          <CustomTable columns={predictionColumns} data={sunday} date="31/10/2021"/>,
                          <CustomTable columns={predictionColumns} data={monday} date="1/11/2021"/>,
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
