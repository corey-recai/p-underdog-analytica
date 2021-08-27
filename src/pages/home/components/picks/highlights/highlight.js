import {Box, Card} from "grommet";
import {HighlightFooter} from "./highlightFooter";
import {HighlightHeader} from "./highlightHeader";
import {HighlightBody} from "./highlightBody";

export const Highlight = (props) => {
    return (
       <Box gridArea={props.gridArea} background="light-5">
           <Card  height="small" width="small" background="light-1">
               <HighlightHeader className="text-center" country={props.country} />
                    <HighlightBody matchup={props.matchup} />
               <HighlightFooter odds={props.odds} unitsWon={props.unitsWon}/>
           </Card>
       </Box>
    )
}