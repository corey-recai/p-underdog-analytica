import {mondayPicks, predictionColumns, saturdayPicks, sundayPicks} from "./data/predictionData";
import {PredictionInfo} from "./predictionInfo";
import Container from "react-bootstrap/Container";
import React, {useContext} from "react";
import {Box, Grid, ResponsiveContext, Heading} from "grommet";
import {Row} from "react-bootstrap";
import {CustomTable} from "./customTable";
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
                        title="Weekend Fixture Predictions"
                        content={
                          [<CustomTable columns={predictionColumns} data={saturdayPicks} date="11/12/2021"/>,
                          <CustomTable columns={predictionColumns} data={sundayPicks} date="12/12/2021"/>,
                          <CustomTable columns={predictionColumns} data={mondayPicks} date="13/12/2021"/>,
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