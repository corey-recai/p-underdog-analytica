import {useContext} from "react";
import {Box, Grid, ResponsiveContext} from "grommet";
import {StatCard} from "./statCard";

export const StatsGrid = () => {
    const size = useContext(ResponsiveContext)
    return (
        <Box pad="medium">
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
    )
}