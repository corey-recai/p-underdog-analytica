import React, {useContext} from "react";
import {Box, Grid, ResponsiveContext} from "grommet";
import Container from "react-bootstrap/Container";
import {GridCard} from "./gridCard";
import SubscribeBtn from "../../pages/components/subscribeBtn";
import {ResultsContainer} from "../../pages/home/components/predictions/resultsContainer";
import {StatsGrid} from "../../pages/home/components/highlights/statsGrid";
import {DisplayContainer} from "../../pages/home/components/predictions/displayContainer";
import {CustomCard} from "./customCard";


export const TwoColGrid = () => {
    const size = useContext(ResponsiveContext)
    return (
        <Container>
            <Box pad="large">
                <Grid
                    columns={[size]}
                    gap="medium">
                    <div class="center">
                      <CustomCard />
                    </div>
                    <div class="center">
                        <GridCard
                            title="Weekend Predictions"
                            content={<DisplayContainer />}
                        />
                    </div>
                </Grid>
            </Box>
        </Container>
    )
}
