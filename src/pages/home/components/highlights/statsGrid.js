import {useContext} from "react";
import {Box, Grid, ResponsiveContext, Text} from "grommet";
import {StatCard} from "./statCard";
import {Container} from "react-bootstrap";

export const StatsGrid = () => {
    const size = useContext(ResponsiveContext)
    return (
        <Container>
            <Box pad="large">
                <Grid
                    columns={size !== 'small' ? 'small' : '100%'}
                    gap="small"
                >
                    <StatCard
                        title="NET UNITS"
                        seven="6.23"
                    />
                    <StatCard
                        title="ROI"
                        seven="30 %"
                    />
                    <StatCard
                        title="WIN/LOSS %"
                        seven="43 %"
                    />
                </Grid>
            </Box>
            <Box>
                <Text>
                    To view all details from this weekends predictions and their corresponding outcome details below.
                </Text>
            </Box>
        </Container>

    )
}