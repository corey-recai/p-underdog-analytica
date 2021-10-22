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
                    columns={size !== 'small' ? 'medium' : '100%'}
                    gap="large"
                >
                    {/*<GridCard*/}
                    {/*    title="The future of sports:Investing"*/}
                    {/*    content="Profit on European football by betting on underdogs. Our*/}
                    {/*algorithm makes the calculations, you make the cash. Start*/}
                    {/*for free today."*/}
                    {/*    styling="text-left home-section-1-h2-text p-2"*/}
                    {/*    footer={<SubscribeBtn />}*/}
                    {/*/>*/}
                    <CustomCard />
                    <div>
                        <GridCard
                            title="Weekend's Predictions"
                            content={<DisplayContainer />}
                        />
                    </div>
                </Grid>
            </Box>
        </Container>
    )
}