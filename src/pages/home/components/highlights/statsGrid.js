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
                        seven="+ 11.41"
                    />
                    <StatCard
                        title="ROI"
                        seven="46 %"
                    />
                    <StatCard
                        title="WIN/LOSS %"
                        seven="48 %"
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