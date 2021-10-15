import React, {useContext} from "react";
import {Box, Grid, ResponsiveContext} from "grommet";
import Container from "react-bootstrap/Container";
import {GridCard} from "./gridCard";
import SubscribeBtn from "../../pages/components/subscribeBtn";
import {ResultsContainer} from "../../pages/home/components/predictions/resultsContainer";
import {StatsGrid} from "../../pages/home/components/highlights/statsGrid";
import {DisplayContainer} from "../../pages/home/components/predictions/displayContainer";


export const TwoColGrid = (props) => {
    const size = useContext(ResponsiveContext)
    return (
        <Container>
            <Box pad="large">
                <Grid
                    columns={size !== 'small' ? 'medium' : '100%'}
                    gap="large"
                >
                    <GridCard
                        title="Data-driven predictions and transparent results"
                        content="Profit on European football by betting on underdogs. Our
                    algorithm makes the calculations, you make the cash. Start
                    for free today."
                        footer={<SubscribeBtn />}
                    />
                    <GridCard
                        title="Weekend's Predictions"
                        content={<DisplayContainer />}
                    />
                </Grid>
            </Box>
        </Container>
    )
}