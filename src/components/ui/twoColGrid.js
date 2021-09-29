import React, {useContext} from "react";
import {Box, Grid, ResponsiveContext} from "grommet";
import Container from "react-bootstrap/Container";
import {GridCard} from "./gridCard";
import SubscribeBtn from "../../pages/components/subscribeBtn";


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
                        title={props.titleOne}
                        content={props.contentOne}
                        footer={<SubscribeBtn />}
                    />
                    <GridCard
                        title={props.titleTwo}
                        content={props.contentTwo}
                    />
                </Grid>
            </Box>
        </Container>
    )
}