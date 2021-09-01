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
                <StatCard title="Win %" metric="41.67 %" background="#00C8FF" />
                <StatCard title="Net Units" metric="-0.613" background="#FC6161"/>
                <StatCard title="Overall ROI" metric="105 %" background="#00C8FF"/>
            </Grid>
        </Box>
    )
}