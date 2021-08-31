import {Box, Grid, Text} from "grommet";

export const TopThree = () => {
    return (
        <Grid
            rows={['xsmall', 'xsmall']}
            columns={['small', 'small']}
            gap="small"
            areas={[
                {name: 'header', start: [0, 0], end: [2, 0]},
                {name: 'second1', start: [0, 1], end: [1, 1]},
                {name: 'second2', start: [1, 1], end: [1, 1]},
                {name: 'second3', start: [2, 1], end: [2, 1]},
            ]}
        >
            <Box gridArea="header" background="brand">
                <Text
                    textAlign="center"
                    margin="small"
                >
                </Text>
            </Box>
            <Box gridArea="second1" background="light-5">

            </Box>
            <Box gridArea="second2" background="light-5">

            </Box>
            <Box gridArea="second3" background="light-5">
            </Box>
        </Grid>
    )
}