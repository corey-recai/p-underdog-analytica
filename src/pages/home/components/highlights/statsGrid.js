import {useContext} from "react";
import {Box, Grid, ResponsiveContext} from "grommet";
import {StatCard} from "./statCard";

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
                        seven="-12.01"
                    />
                    <StatCard
                        title="ROI"
                        seven="-57 %"
                    />
                    <StatCard
                        title="WIN/LOSS %"
                        seven="14 %"
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