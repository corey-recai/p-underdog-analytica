import {Box, Grid, Heading} from "grommet";


export const GrommetGrid = () => {
    return(
        <Grid
            rows={['xsmall', 'xsmall', 'xsmall']}
            columns={['small', 'small', 'small']}
            gap="small"
            areas={[
                { name: 'header', start: [0, 0], end: [2, 0] },
                { name: 'second1', start: [0,1], end: [1, 1] },
                { name: 'second2', start: [1, 1], end: [1, 1] },
                { name: 'second3', start: [2, 1], end: [2, 1] },
                { name: 'third1', start: [0,2], end: [1, 2] },
                { name: 'third2', start: [1, 2], end: [1, 2] },
                { name: 'third3', start: [2, 2], end: [2, 2] },
            ]}
        >
            <Box gridArea="header" background="brand" >
                <Heading margin="none" textAlign="center" margin="small">Latest Picks & Data</Heading>
            </Box>
            <Box gridArea="second1" background="light-5" >

            </Box>
            <Box gridArea="second2" background="light-5" >

            </Box>
            <Box gridArea="second3" background="light-5" >

            </Box>
            <Box gridArea="third1" background="light-5" >

            </Box>
            <Box gridArea="third2" background="light-5" >

            </Box>
            <Box gridArea="third3" background="light-5" >

            </Box>

            {/*<Box gridArea="third1" background="light-5" />*/}
            {/*<Box gridArea="r2_c2" background="light-3" />*/}
        </Grid>
    );
}