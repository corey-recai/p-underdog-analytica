import {CardFooter} from "grommet";

export const HighlightFooter = (props) => {
    return(
        <CardFooter pad={{horizontal: "small"}} background="light-5">
            <p>ODDS: {props.odds}</p>
            <p>NET UNITS: {props.unitsWon}</p>
        </CardFooter>
    )
}