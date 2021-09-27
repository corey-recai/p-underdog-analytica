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
                        seven="-5.91"
                    />
                    <StatCard
                        title="ROI"
                        seven="-18 %"
                    />
                    <StatCard
                        title="WIN/LOSS %"
                        seven="27 %"
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