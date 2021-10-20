import React, {useContext} from "react";
import {Box, Grid, ResponsiveContext} from "grommet";
import Container from "react-bootstrap/Container";
import {GridCard} from "./gridCard";
import SubscribeBtn from "../../pages/components/subscribeBtn";
import {ResultsContainer} from "../../pages/home/components/predictions/resultsContainer";
import {StatsGrid} from "../../pages/home/components/highlights/statsGrid";
import {DisplayContainer} from "../../pages/home/components/predictions/displayContainer";


export const TwoColGrid = () => {
    const size = useContext(ResponsiveContext)
    return (
        <Container>
            <Box pad="large">
                <Grid
                    columns={['33%', '67%']}
                    gap="small"
                >
                    <GridCard
                        title="The future of sports: Investing."
                        //title="Data-driven predictions and transparent results"
                        subtitle="Welcome to your honest, realiable, mathematically proven handicapper."
                        par1="Our algorithm makes the calculations, you make the cash. "
                        par2="We apply a Machine Learning approach to produce European football predictions that are mathematically supported."
                        par3="Our algorithm discovers Underdogs, or teams who are underperforming according to our model. This means that all of the predictions we provide pay out at least +2 odds."
                        par4="Sign up to receive alerts for when we produce our weekend picks"

                        styling="text-left home-section-1-h2-text p-2"
                        other={<SubscribeBtn />}
                    />
                    <GridCard
                        title="Weekend's Predictions"

                        par1={<DisplayContainer />}
                    />
                </Grid>
            </Box>
        </Container>
    )
}
