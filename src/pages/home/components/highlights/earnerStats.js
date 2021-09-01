import {Box, Text} from "grommet";

export const EarnerStats = (props) => {
    return (
        <Box direction="row" gap="large">
            <Text className="text-center">Odds {props.odds}</Text>
            <Text className="text-center">Net Units {props.unitsWon}</Text>
        </Box>
    )
}