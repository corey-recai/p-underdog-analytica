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
                    title="Win %"
                    seven="41.67 %"
                    fourteen="56.55 %"
                    thirty="61.23 %"
                />
                <StatCard
                    title="Net Units"
                    seven="-1.22"
                    fourteen="2.56"
                    thirty="3.75"
                />
                <StatCard
                    title="Overall ROI"
                    seven="7 %"
                    fourteen="14 %"
                    thirty="30 %"
                />
            </Grid>
        </Box>
    )
}