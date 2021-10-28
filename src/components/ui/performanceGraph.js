import React, {useContext} from "react";
import {Box, Grid, ResponsiveContext} from "grommet";
import Container from "react-bootstrap/Container";
import {GridCard} from "./gridCard";
import {CustomCard} from "./customCard";
import Chart from "../../pages/home/components/charting/chartContainer";


export const PerformanceGraph = () => {
    const size = useContext(ResponsiveContext)
    return (
        <Container>
            <Box pad="small">
                <Grid
                    alignContent="center"
                    columns={[size]}
                    gap="medium">
                    <div className="center">
                        <GridCard
                            title="How do we compare to other investing options?"
                            content={[
                              <Grid
                                alignContent="center"
                                columns={[size]}
                                gap="medium">
                                <Box>
                                  <div className="home-section-3-chart-container">
                                    <Chart />
                                  </div>
                                </Box>
                              </Grid>
                            ]}
                        />
                    </div>
                </Grid>
            </Box>
        </Container>
    )
}
