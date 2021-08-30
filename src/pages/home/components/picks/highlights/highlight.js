import {Box, Card} from "grommet";
import {HighlightFooter} from "./highlightFooter";
import {HighlightHeader} from "./highlightHeader";
import {HighlightBody} from "./highlightBody";

export const Highlight = (props) => {
    return (
       <Box gridArea={props.gridArea}>
           <Card  height="small" width="small" background="#17EBA0">
               <HighlightHeader className="text-center" country={props.country} />
                    <HighlightBody matchup={props.matchup} />
               <HighlightFooter odds={props.odds} unitsWon={props.unitsWon}/>
           </Card>
       </Box>
    )
}