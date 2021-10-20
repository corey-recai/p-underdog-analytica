import {useContext} from "react";
import {Box, Grid, ResponsiveContext, Text} from "grommet";
import {StatCard} from "./statCard";
import Container from "react-bootstrap/Container";

export const StatsGrid = () => {
    const size = useContext(ResponsiveContext)
    return (
        <Container>
            <Box pad="xsmall">
                <Grid
                    columns={size !== 'small' ? 'small' : '100%'}
                    gap="small"
                >
                    <StatCard
                        title="NET UNITS"
                        seven="-12.63"
                    />
                    <StatCard
                        title="ROI"
                        seven="-63 %"
                    />
                    <StatCard
                        title="WIN/LOSS %"
                        seven="15 %"
                    />
                </Grid>
            </Box>
            <Box>
                <Text>
                    Prediction results outlined below.
                </Text>
            </Box>
        </Container>
    )
}